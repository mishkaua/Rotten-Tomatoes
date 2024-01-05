import { NextRequest, NextResponse } from 'next/server'

export async function GET(request : NextRequest, { params}: { params: { id: number}}) {
    /*     const headers = {
            api_key: "7b80a4dcee06d29bb7cc319e2ef94706",
        //   }; */
        //     const id = id
            const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7b80a4dcee06d29bb7cc319e2ef94706`)
            const data = await res.json();
            return Response.json({data});
}