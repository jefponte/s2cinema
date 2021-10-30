import React, { useState } from "react";
import { Typography, Box, TextField } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { Autocomplete } from "@mui/material";


export default function WatchProviders(props) {
  const { providers } = props;
  let countries = [];
  const language = navigator.language.split("-")[0];

  Object.keys(providers.results).forEach(function (item) {
    let regionNames = new Intl.DisplayNames([language], { type: "region" });
    countries.push({ label: regionNames.of(item), code: item });
  });

  let defaultCountry = {};
  if(countries[0] !== null && countries[0] !== undefined){
    defaultCountry = countries[0];
  }

  function isPT(c) {
    if(Object.keys(c).length === 0 || c === undefined){
      return false;
    }
    return c.code === "BR";
  }
  
  if (language === "pt") {
    let def2 = countries.find(isPT);
    if (def2 !== undefined) {
      defaultCountry = def2;
    }
  }

  const [country, setCountry] = useState(defaultCountry);
  const types = ["flatrate", "rent", "buy"];

  if(country === null){
    return "";
  }
  if(country === undefined){
    return "";
  }
  if(countries === undefined){
    return "";
  }
  if(countries === null){
    return "";
  }
  if(countries.length === 0 ){
    return "";
  }
  if(Object.keys(countries).length === 0){
    return "";
  }


  return (
    <>
      
      <Autocomplete
        fullwidth="true"
        id="country-select-demo"
        options={countries}
        autoHighlight
        value={country}
        onChange={(event, newValue) => {
          if (newValue !== null && newValue !== "") {
            setCountry(newValue);
          }
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {Object.keys(providers.results[country.code]).map((elemento, index) => {
        if (types.indexOf(elemento) !== -1) {
          return (
            <React.Fragment key={index}>
              <Typography variant="subtitle1" component="h3">
                <FormattedMessage
                  id={`movieSelect.${elemento}`}
                  description={elemento}
                  defaultMessage={elemento}
                />
              </Typography>
              {providers.results[country.code][elemento].map((item, index) => {
                return (
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.logo_path}`}
                    height={50}
                    key={item.provider_id}
                    alt={item.provider_name}
                  />
                );
              })}
            </React.Fragment>
          );
        } else {
          return <React.Fragment key={index}></React.Fragment>;
        }
      })}
         
    </>
  );
}
