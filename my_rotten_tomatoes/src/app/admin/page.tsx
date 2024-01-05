'use client'

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

export default function Admin() { 
    const [films, setFilms] = useState([]);
    const getData = async () => {
        const {data} = await axios.get("/api/films_admin_display/");

        setFilms(data.data.results);
        // console.log(data.data.results); 
    };


    useEffect(() => {
        getData();
    }, []);

    return(<>

        {films.map((film) => (<>
            <h2>{film.title}</h2>
            <h2>{film.release_date}</h2>
            <button>Détails</button>
            <button>Ajouter</button>
            <button>Supprimer</button>
        
        </>))}
    </>)
     
}