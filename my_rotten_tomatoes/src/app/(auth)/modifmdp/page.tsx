
"use client"
import bgdefault from '../../../asset/bgdefault.jpg'
import Image from 'next/image'
import React, { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

export default function Modifmdp(){
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [lastPassword, setLastPassword] = useState('')
    // const [loggedIn, setLoggedIn] = useState(false)
    const router = useRouter()
    const userId = localStorage.getItem('userId')

    const changePassword = async () => {
        try {
            const response = await axios.post("/api/user", {password, userId})
            if (response.status === 200) {
                const { userId } = response.data
                alert("Password Changed Successfully")
                localStorage.setItem('userId', userId)
                // setLoggedIn(true)
                // redirect('/inscription')
            }
            else {
                alert("Wrong Password ")
            }
        } catch (err) {
            alert("Try again Later")
        }
    }

    return(
        <main className='w-full h-[100vh] overflow-hidden'>
            <Image src={bgdefault} alt='photo' />
            <section className='w-full h-[100vh] absolute top-0 flex justify-center items-center'>
                <article className='w-[90%] max-w-[600px] bg-white/60 rounded-lg flex justify-center backdrop-blur-[5px] items-center'>
                    <figure className='w-[90%] h-[90%] mt-8'>
                        <header className='w-full pb-10 flex justify-center '>
                            <h1 className='font-bold text-3xl'>Modifier votre mot de passe</h1>
                        </header>
                        <section className='w-full pb-10'>
                            <article className='w-full'>
                                <form className='w-full flex flex-col items-center gap-7'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Mot de passe actuel</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="password" name="password" id="password" placeholder='Mot de passe actuel'value={lastPassword} onChange={(e) => setLastPassword(e.target.value)} required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Nouveau mot de passe</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="password" name="password" id="password" placeholder='Nouveau mot de passe'value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Confirmez le mot de passe</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="password" name="password" id="password" placeholder='Confirmez le mot de passe'value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                                    </div>
                                    <div className='flex gap-8'>
                                        <button className="rounded-full border py-3 px-3 text-white bg-red-500" onClick={changePassword}>Enregistrer</button>
                                        <button className="rounded-full border py-3 px-3 text-white bg-slate-500">Annuler</button>
                                    </div>
                                </form>
                            </article>
                        </section>
                    </figure>
                </article>
            </section>
        </main>
    )
}