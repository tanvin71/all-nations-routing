import React from 'react';
import  { useState, useEffect } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [countries, setCountries] =useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        // .then(data => setCountries(data))
        .then(data => setCountries(data.slice(0,20)))
        // console.log(setCountries)
      }, [])
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;