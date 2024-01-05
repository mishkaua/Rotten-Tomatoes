'use client'

import React, { Fragment, useState, useEffect } from "react";
import { useParams } from 'next/navigation'
import axios from "axios";


export default function Details(){
    const params = useParams<{id}>()
    const [films, setFilms] = useState([]);
    const getData = async () => {
        const {data} = await axios.get("/api/films_details/");

        setFilms(data.data.results);
        // console.log(data.data.results); 
    };

    useEffect(() => {
        getData();
    }, []);

    return(<>

    <div className="card">
        <img src={"https://image.tmdb.org/t/p/w185" + film.poster_path}/>

    </div>
    {/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div> */}
    </>)
}
