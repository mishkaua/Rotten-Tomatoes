import '@/styles/globals.css'
import React from 'react'
import SideBar from '../../../components/SideBar'


export default function App({ Component: any, PageProps}){
    return (
        <SideBar>
            <Component {...pageProps}/>
        </SideBar>
    )
}