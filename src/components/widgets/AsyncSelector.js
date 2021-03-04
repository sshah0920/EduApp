import React from 'react';
import AsyncSelect from 'react-select/async';


const loadOptions = async (inputValue, callback) => {
    if(inputValue){
        let response = await fetch(
            `http://universities.hipolabs.com/search?name=${inputValue}&country=United States`
        );
        if (response.ok) {
            let json = await response.json();
            json = await json.map(({ name }) => ({ label: name, value: name }));
            callback(json);
        } else {
            alert("HTTP-Error: " + response.status);
            callback([]);
        }
    } else {
        callback([]);
    }
};

 const AsyncSelector = ({ onChange, value }) => {
    const handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        return inputValue;
    };
    return (
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        onChange={({ value }) => onChange(value)}
      />
    );
}

export default AsyncSelector;