/* import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const genres = [
    { name: 'Adventure' },
    { name: 'Action' },
    { name: 'Drama' },
];

export function FilterGenres() {
  const [selectedGenre, setSelectedGenre] = useState(genres[0])

  return (
    <Listbox value={selectedGenre} onChange={setSelectedGenre}>
      <Listbox.Button>{selectedGenre.name}</Listbox.Button>
      <Listbox.Options>
        {genres.map((genre) => (
          <Listbox.Option
            key={genre.id}
            value={genre}
            disabled={genre.unavailable}
          >
            {genre.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

   <div className="flex text-black ">
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
