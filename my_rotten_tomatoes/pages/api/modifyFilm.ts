import { NextApiRequest, NextApiResponse } from "next";
import FilmModel, {IFilm} from "../../src/connexion_db/modelFilms";
import connect from "../../src/connexion_db/connexion";

export default async function modifyFilm(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {movieId} = req.body
    try{
        const film = await FilmModel.findByIdAndUpdate(movieId, req.body, { new: true });
        console.log(film)
        if (!film) {
            return res.status(401).json({data:"Couldn't find film"});
        }
        
        // await film.updateOne(
        //     req.body
        // );
        // await film.save()
        console.log(film)
        return res.status(200).json({film, movieId: film.id})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
    
}
