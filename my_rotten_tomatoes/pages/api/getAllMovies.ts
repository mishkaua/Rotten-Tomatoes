import { NextApiRequest, NextApiResponse } from "next";
import FilmModel, {IFilm} from "../../src/connexion_db/modelFilms";
import connect from "../../src/connexion_db/connexion";

export default async function getAllMovies(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    try{
        const films = await FilmModel.find();
        return res.status(200).json({films})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
}