import React from 'react'
// import axios from 'axios'
import mongoose, { Schema, Document, Model } from 'mongoose';

// function Films() {
//   return (
//     <div>Films</div>
//   )
// }

// export default Films
async function Films() {
    // const api_key =
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7b80a4dcee06d29bb7cc319e2ef94706')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await Films()
   
    return <main></main>
  }

  // export async function loadPosts() {
  //   // Call an external API endpoint to get posts
  //   const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7b80a4dcee06d29bb7cc319e2ef94706')
  //   const data = await res.json()
   
  //   return data
  // }