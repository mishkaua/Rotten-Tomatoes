import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
/* 
const genres = [{ name: "Adventure" }, { name: "Action" }, { name: "Drama" }]; */

export function FilterGenres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({name:""});
  const getData = async () => {
    const { data } = await axios.get('/api/movie_genres/');
    console.log('Genres', data);
    //let response = JSON.stringify(data);
    setGenres(data.data.genres);
    setSelectedGenre(data.data.genres[0]);
    console.log('First genre is =>', data.data.genres[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Listbox value={selectedGenre} onChange={setSelectedGenre}>
      <Listbox.Label className="font-bold text-black px-3 m-3">
        Genres
      </Listbox.Label>
      <br />
      <Listbox.Button className="rounded-lg border-solid border-2 border-grey-800 bg-grey-200 shadow-md px-3 m-3">
          {selectedGenre.name}
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options>
          {genres.map((genre) => (
            <Listbox.Option
              key={genre.id}
              value={genre}
              //disabled={genre.unavailable}
            >
              {genre.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}