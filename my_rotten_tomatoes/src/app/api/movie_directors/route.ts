export async function GET() {
            const res = await 
            fetch
            //insert link to the table movies from MongoDB
            ("mongodb+srv://movie:movie@movies.38ixhee.mongodb.net/?retryWrites=true&w=majority")
            const data = await res.json();
            return Response.json({data});
    }