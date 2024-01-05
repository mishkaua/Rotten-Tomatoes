'use client'

import Image from "next/image";
//import { config } from "@fortawesome/fontawesome-svg-core";
//import "@fortawesome/fontawesome-svg-core/styles.css";
import { Righteous } from "next/font/google";
import { FilterGenres} from './components/filterGenres'
import { MovieList } from "./components/movie_list";
//import { FilterDirectors } from "./components/filterDirectors";
// import axios from "axios";

export default function Home() {
  return (
    <div className="bg-stone-200">
      <main className="py-8">

         <FilterGenres />
{/*          <FilterDirectors /> */}
        <MovieList />
      
      </main>

    </div>
  );
}
