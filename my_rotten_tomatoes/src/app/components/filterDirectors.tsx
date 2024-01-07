import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";

/* When I make API call i have to set the specific crew Array-ID to get the director e.g.:
https://api.themoviedb.org/3/movie/{movie.id}?api_key=###&append_to_response=credits
console.log(result.credits.crew[12].name); */

export function FilterDirectors() {
    const [directors, setDirectors] = useState([]);
    const [selectedDirector, setSelectedDirector] = useState({name:""});
    const getData = async () => {
      const { data } = await axios.get('/api/movie_directors/');
      console.log('Directors', data);
      setDirectors(data.data.results);
      setSelectedDirector(data.data.results[0]);
      console.log('First director is =>', data.data.results[0]);
    };
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <Listbox value={selectedDirector} onChange={setSelectedDirector}>
        <Listbox.Label className="font-bold text-black px-3 m-3">
          Directors
        </Listbox.Label>
        <br />
        <Listbox.Button className="rounded-lg border-solid border-2 border-grey-800 bg-grey-200 shadow-md px-3 m-3">
            {selectedDirector.name}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options>
            {directors.map((director) => (
              <Listbox.Option
                key={director.id}
                value={director}
                //disabled={genre.unavailable}
              >
                {director.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    );
  }