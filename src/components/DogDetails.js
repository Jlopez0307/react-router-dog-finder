import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid'
import '../styles/DogDetails.css'

const DogDetails = (params) => {
    const { name } = useParams();
    const [ dog, setDog ] = useState(null);

    useEffect(() => {
        const getDog = () => {
            params.dogs.map(dog => {
                if(dog.name === name){
                    setDog(dog)
                }
            })
        }
        getDog()
    }, [name]);
    


    return (
        <div className="DogDetails">
            {dog ? 
                <div>
                    <h1>Here's {dog.name}!</h1> 
                    <img className="DogDetails-img" src={dog.src}/>
                    <h2>Facts about {dog.name}:</h2>

                    <ul>
                        <li>Age: {dog.age}</li>
                        {dog.facts.map(fact => (
                            <li key={uuid()}>{fact}</li>
                        ))}
                    </ul>
                    <Link to="/dogs">Go back</Link>
                </div>
                
                : null}
        </div>
    )

};

export default DogDetails;