import Image from 'next/image'

export default function Connexion(){
    return(
        <main className='w-full h-[100vh] overflow-hidden absolute top-0'>
            <Image src="/bgdefault.jpg" width={200} height={200} className='w-full h-[100vh]' alt='photo' />
            <section className='w-full h-[100vh] absolute top-0 flex justify-center items-center'>
                <article className='w-[90%] max-w-[600px] bg-white/60 rounded-lg flex justify-center backdrop-blur-[5px] items-center'>
                    <figure className='w-[90%] h-[90%] mt-8'>
                        <header className='w-full pb-10 flex justify-center '>
                            <h1 className='font-bold text-3xl'>Connexion</h1>
                        </header>
                        <section className='w-full pb-10'>
                            <article className='w-full'>
                                <form className='w-full flex flex-col items-center gap-7'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Name</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="text" name="text" id="text" placeholder='Votre nom' required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Adresse email</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="text" name="text" id="text" placeholder='Votre adresse email' required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Mot de passe</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="password" name="password" id="password" placeholder='Votre mot de passe' required/>
                                    </div>
                                    <div className='flex gap-8'>
                                        <button className="rounded-full border py-3 px-3 text-white bg-red-500">Enregistrer</button>
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