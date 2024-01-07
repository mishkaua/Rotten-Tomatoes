import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";

export function FilterReleaseDate() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState();
    const getData = async () => {
      const { data } = await axios.get("/api/movie_list/");
      console.log("Movies for date filter", data);
      setDates(data.data.results);
      //console.log("First movie is =>", data.data.results[0]);
      setSelectedDate(data.data.results[0]);
      console.log('First movies for date filter is =>', data.data.results[0]);
    };
    useEffect(() => {
      getData();
    }, []);
  
/*     {moment(movie.release_date).year()} */

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