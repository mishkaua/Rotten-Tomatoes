export async function GET() {
            const res = await 
            fetch
            ("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=7b80a4dcee06d29bb7cc319e2ef94706")
            const data = await res.json();
            return Response.json({data});
    }