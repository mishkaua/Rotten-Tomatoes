import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFilm extends Document {
    title: string;
    release_date: string;
    vote_average: number;
    movie_id: number;
    synopsis: String;
    popularity: number;
}

const FilmsSchema: Schema = new Schema({
    title: { type: String, require: true, unique: true },
    release_date: { type: String, require: true },
    vote_average: { type: Number, require: true },
    movie_id: { type: Number, require: true },
    synopsis: { type: String, require: true },
    popularity: { type: Number, require: true },
});

const FilmModel: Model<IFilm> = mongoose.models.Film || mongoose.model<IFilm>('Film', FilmsSchema);

export default FilmModel