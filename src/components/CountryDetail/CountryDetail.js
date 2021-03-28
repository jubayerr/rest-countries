import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css'

const CountryDetail = () => {
    const { countryName } = useParams()
    const [country, setCountry] = useState([])
    const { flag, name, capital, region, subregion, population, numericCode } = country
    console.log('country', country);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [country])
    return (
        <div className="country" key={numericCode}>
            <img src={flag} />
            <h2>{name}</h2>
            <p>Capital: <strong>{capital}</strong></p>
            <p>Region: <strong>{region}</strong>, {subregion}</p>
            <p>Population: <strong>{population}</strong></p>
            <p>Currency: {country.currencies?.map(currency => <strong> {currency.name}</strong>)}</p>
            <p>Languages: {country.languages?.map(language => <strong> {language.name}</strong>)}</p>
            <p>Border: {country.borders?.map(border => <strong> {border}</strong>)}</p>
        </div>
    );
};

export default CountryDetail;