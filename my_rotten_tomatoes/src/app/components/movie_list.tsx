import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import React, { useEffect } from "react";

export function MovieList() {
    const movies = axios.get('/api/movie_list/')
/*     const headers = {
        api_key: "7b80a4dcee06d29bb7cc319e2ef94706",
      };
      useEffect(() => {
        axios
          .get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=FR', {
            headers,
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []); */
  return (
    <div className="movie-container text-sm grid grid-cols-5 gap-12 border border-grey-800 px-8 pb-16">
      <div className="movie mt-8 px-4">
        <div className="relative inline-block">
          <a href="#">
            {/* add the link from an API */}
            <Image
              src="/images/ROTTEN.png"
              alt="movie cover"
              className="hover:opacity-75"
              width={200}
              height={350}
            />
          </a>
          {/* circle with rating */}
          <div
            className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full"
            style={{
              right: -20,
              bottom: -20,
            }}
          >
            <div className="font-semibold text-xs text-white flex justify-center items-center h-full">
              80%
            </div>
          </div>
        </div>
        <a
          href=""
          className="block text-base font-semibold hover:text-gray-400 mt-8"
        >
          Movie title
        </a>
        <div className="flex inline-flex place-items-stretch">
          <div>
            <FontAwesomeIcon icon={faStar} className="px-1" />
            Rating
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} className="px-1" />
            Comments
          </div>
        </div>
        <div className="my-1">Producing company</div>
        <div className="text-xs my-1">Release date</div>
        <button className="border rounded-full p-1">
          Add to favourites
          <FontAwesomeIcon icon={faHeart} className="px-1" />
        </button>
      </div>
    </div>
  );
}
