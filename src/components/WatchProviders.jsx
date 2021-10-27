import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { Autocomplete, TextField } from "@mui/material";

function ListProviders(props) {
  const { idType, providers } = props;
  return <React.Fragment></React.Fragment>;
}

export default function WatchProviders(props) {
  const { providers } = props;
  let countries = [];
  Object.keys(providers.results).forEach(function (item) {
    let regionNames = new Intl.DisplayNames([item], { type: "region" });

    countries.push({ name: regionNames.of(item), code: item });
  });

  const [country, setCountry] = useState(countries[6]);
  const types = ["flatrate", "rent", "buy"];

  const handleChangeCountry = (event, values) => {
    if(values=== null || values === ""){
      return;
    }
    setCountry(values);
  };

  return (
    <>
      <Autocomplete
        id="country"
        name="country"
        options={countries}
        getOptionLabel={(option) => option.name}
        onChange={handleChangeCountry}
        value={country}
        fullWidth
        renderInput={(params) => (
          <TextField
            required
            {...params}
            label="Country"
            variant="outlined"
            margin="normal"
          />
        )}
      />

      <Typography variant="subtitle1" component="p">
        <FormattedMessage
          id='movieSelect.flatrate'
          description="flatrate"
          defaultMessage="flatrate"
        />
      </Typography>
            
      {providers.results[country.code].flatrate.map((item, index) => {
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
          id='movieSelect.rent'
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
          id='movieSelect.buy'
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
      })}

    </>
  );
}
