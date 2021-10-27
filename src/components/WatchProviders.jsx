import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function WatchProviders(props) {
  const { providers } = props;
  let countries = [];
  Object.keys(providers.results).forEach(function (item) {
    let regionNames = new Intl.DisplayNames([item], { type: "region" });
    countries.push({ label: regionNames.of(item), code: item });
  });

  const [country, setCountry] = useState(countries[0]);
  const types = ["flatrate", "rent", "buy"];

  return (
    <>
      {console.log(countries)}

      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        value={country}
        onChange={(event, newValue) => {
          if(newValue !== null && newValue !== ""){
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
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
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

      {/*
       
      

          


     
      
      <Typography variant="subtitle1" component="p">
        <FormattedMessage
          id="movieSelect.rent"
          description="rent"
          defaultMessage="rent"
        />
      </Typography>

      {providers.results[country.code].rent.map((item, index) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
            height={50}
            key={item.provider_id}
            alt={item.provider_name}
          />
        );
      })}
      <Typography variant="subtitle1" component="p">
        <FormattedMessage
          id="movieSelect.buy"
          description="buy"
          defaultMessage="buy"
        />
      </Typography>

      {providers.results[country.code].buy.map((item, index) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
            height={50}
            key={item.provider_id}
            alt={item.provider_name}
          />
        );
      })} */}
    </>
  );
}
