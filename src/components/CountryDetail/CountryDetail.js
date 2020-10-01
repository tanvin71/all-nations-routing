import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryDetail = () => {
    const {countryName} = useParams();
    console.log(countryName);
    const [country, setCountry] =useState([])
    useEffect(()=>{
        let url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setCountry(data[0]));
        // console.log(setCountry)

    },  [])
    return (
        <div>
            <h2>This is country detail component: {countryName}</h2>
            <h4> capital: {country.capital}</h4>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
        </div>
    );
};

export default CountryDetail;