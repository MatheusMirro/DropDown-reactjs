import React, { useEffect, useState } from 'react';
import { fetchCitiesForState } from '../../../api/ibge';

const DropdownCity = ({ state }) => {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState(state).then((cities) => {
      setCities(cities);
    });
  }, [state]);

  return (
    <select id="city" name="city">
      <option value="">Selecione uma cidade...</option>

      {cities.map((city) => {
        const { id, nome } = city;
        return (<option key={id} value={id}>{nome}</option>);
      })}
    </select>
  );
};

export default DropdownCity;