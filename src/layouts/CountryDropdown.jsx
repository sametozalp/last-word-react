import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

const CountryDropdown = ({ onSelect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        const options = data
          .map((c) => ({
            key: c.name.common,
            text: c.name.common,
            value: c.name.common,
            image: { avatar: true, src: c.flags.png },
            flagUrl: c.flags.png
          }))
          .sort((a, b) => a.text.localeCompare(b.text));

        setCountries(options);
      });
  }, []);

  const handleChange = (_, data) => {
    const selected = countries.find((c) => c.value === data.value);
    onSelect({
      name: selected.text,
      flagUrl: selected.flagUrl
    });
  };

  return (
    <Dropdown
      placeholder="Ülke Seç"
      fluid
      search
      selection
      options={countries}
      onChange={handleChange}
    />
  );
};

export default CountryDropdown;
