'use client' 

import React, { Fragment, useState, useEffect } from "react";
import { Chart } from "chart.js";
import axios from "axios";


export default function Statistiques(){

    const [films, setFilms] = useState([]);
    const getData = async () => {
        const {data} = await axios.get("/api/films_admin_display/");

        setFilms(data.data.results);
        // console.log(data.data.results); 
    };

    useEffect(() => {
        getData();
    }, []);
    
    return(
        
        <div className="w-full">
            <header className="w-full h-[12vh] border-b-[0.1px] border-gray-300/20 flex justify-between items-center">
                <article>
                    <h1 className="text-white text-2xl">Statistiques</h1>
                </article>
                <article>

                </article>

            </header>
            <main>
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
          {films.map((film) => (
            <div key={film.id} className="mb-8">
              <div className="bg-white rounded-lg text-left overflow-hidden shadow transition-all p-5 mr-80">
                <h3 className="text-sm leading-6 font-medium text-gray-400">{film.title}</h3>
                <img src={"https://image.tmdb.org/t/p/w185" + film.poster_path}/>

              </div>
              <div className="flex mt-4">
                <div className="bg-white rounded-lg text-left overflow-hidden shadow transition-all p-5 mr-4">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">Popularity</h3>
                  <p className="text-3xl font-bold text-black">{film.popularity}</p>
                </div>
                <div className="bg-white rounded-lg text-left overflow-hidden shadow transition-all p-5 mr-4">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">Vote count</h3>
                  <p className="text-3xl font-bold text-black">{film.vote_count}</p>
                </div>
                <div className="bg-white rounded-lg text-left overflow-hidden shadow transition-all p-5">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">Avg. vote</h3>
                  <p className="text-3xl font-bold text-black">{film.vote_average}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}