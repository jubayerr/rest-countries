import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { flag, name } = props.country

    return (
        <div className="country">
            <img src={flag} />
            <h2>{name}</h2>
            <Link to={`/country/${name}`}><button>See More</button></Link>

        </div>
    );
};

export default Country;