export async function GET() {
/*     const headers = {
        api_key: "7b80a4dcee06d29bb7cc319e2ef94706",
      }; */
        const res = await 
        fetch
        ("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=7b80a4dcee06d29bb7cc319e2ef94706")
        const data = await res.json();
        return Response.json({data});
}