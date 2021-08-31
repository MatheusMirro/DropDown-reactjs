import React, { useState } from 'react';
import DropdownState from './components/Forms/DropdownState';
import './App.css';
import DropdownCity from './components/Forms/DropdownCity';
import DropdownInfos from './components/Forms/DropdownInfos';

function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  return (
    <div className="container">
      <form>
        <label htmlFor="state">Estado:</label>
        <DropdownState onChange={handleInputChange} />
        <label htmlFor="city">Cidade:</label>
        <DropdownCity state={formValues.state} />
        <label htmlFor="infos"></label>
        <DropdownInfos city={formValues.city} />
      </form>
    </div>
  );
}

export default App;
