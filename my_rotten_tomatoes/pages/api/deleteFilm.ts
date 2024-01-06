import { NextApiRequest, NextApiResponse } from "next";
import FilmModel, {IFilm} from "../../src/connexion_db/modelFilms";
import connect from "../../src/connexion_db/connexion";

export default async function deleteuser(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {movieId} = req.body
    try{
        const film = await FilmModel.findByIdAndDelete(movieId);
        console.log(film)
        if (!film) {
            return res.status(401).json({data:"Film doesn't exist"});
        }
        
        return res.status(200).json({data:'Film successfully deleted'})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
    
}