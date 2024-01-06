import FilmModel, {IFilm} from "../../../connexion_db/modelFilms";
import connect from "../../../connexion_db/connexion";

export async function GET() {
        await connect()
        const res = await 
        fetch
        ("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=7b80a4dcee06d29bb7cc319e2ef94706")
        const data = await res.json();

        data.results.forEach(async function (value: Record<string, any> ) {
                console.log(value.title,value.vote_average,value.id,value.release_date)
                const NewFilm: IFilm = new FilmModel({
                        title: value.title, 
                        vote_average: value.vote_average,
                        movie_id: value.id,
                        release_date: value.release_date,
                        synopsis: value.overview,
                        popularity: value.popularity
                })
                await NewFilm.save()
        })
        return Response.json({data});
}