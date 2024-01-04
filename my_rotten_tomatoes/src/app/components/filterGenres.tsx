import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";

const genres = [{ name: "Adventure" }, { name: "Action" }, { name: "Drama" }];

/*   export async function componentDidMount() {
  const headers = {
    'api_key': '7b80a4dcee06d29bb7cc319e2ef94706'
  };
  await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {headers})
  .then(response =>{
    this.setState({ totalReactPackages: response.data.total });
    console.log('Genres: => ', response);
  })
  .catch(error => {
    this.setState({ errorMessage: error.message });
    console.error('Error getting a list of genres:', error);
  })
} */

export function FilterGenres() {
/*   const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [data, setData] = useState([]);
  const headers = {
    api_key: "7b80a4dcee06d29bb7cc319e2ef94706",
  };
  const getData = async () => {
    const { data } = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      headers,
    });
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{JSON.stringify(data)}</div>; */
   const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const headers = {
    language: "en",
    api_key: "7b80a4dcee06d29bb7cc319e2ef94706",
  };
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        headers,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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

/*  <div className="flex text-black ">
      <button className="rounded-full border-solid border-2 border-gray-600 px-3 m-3 font-bold">
        Genre
      </button>

      <button className="rounded-full border-solid border-2 border-gray-600 px-3 m-3 font-bold">
        Date
      </button>

      <button className="rounded-full border-solid border-2 border-gray-600 px-3 m-3 font-bold">
        Production Company
      </button>

    </div>
  );
} */
