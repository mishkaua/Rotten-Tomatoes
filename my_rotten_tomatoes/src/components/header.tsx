import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


export function Header() {
  return (
    <header className="bg-red-500 border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-2 py-3">
        <div className="flex items-center space-x-3">
          <Image className="rounded-full"
            src="/images/ROTTEN.png"
            alt="Rotten Tomatoes Logo"
            height={70}
            width={70}
          />
          <a href="/">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <ul className="flex">
            <li>
              <a href="/admin">Admin Page</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 text-sm rounded-full w-64 pl-8"
              placeholder="Search..."
            />
            <div className="absolute top-0 flex items-center h-full ml-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div>
            <Link href="/connexion" className="bg-stone-200 rounded-full px-5 mx-3">
              <FontAwesomeIcon icon={faUser} className="pr-1" />
              Login
            </Link>
            <Link href="/inscription" className="bg-stone-200 rounded-full px-3 mx-3">
              <FontAwesomeIcon icon={faUserPlus} className="pr-1" />
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
