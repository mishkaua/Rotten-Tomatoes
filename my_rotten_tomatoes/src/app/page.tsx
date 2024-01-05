import Image from "next/image";
//import { config } from "@fortawesome/fontawesome-svg-core";
//import "@fortawesome/fontawesome-svg-core/styles.css";
import { Righteous } from "next/font/google";
//import { FilterGenres} from './components/filterGenres'
import { MovieGrid } from "./components/movie_grid";


export default function Home() {
  return (
    <div className="bg-stone-200">
      <main className="py-8">

{/*         <FilterGenres />
 */}        <MovieGrid />
      
      </main>

    </div>
  );
}
