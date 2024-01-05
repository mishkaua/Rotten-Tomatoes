import bgdefault from '../../asset/bgdefault.jpg'
import Image from 'next/image'

export default function Modifemail(){
    return(
        <main className='w-full h-[100vh] overflow-hidden'>
            <Image src={bgdefault} alt='photo' />
            <section className='w-full h-[100vh] absolute top-0 flex justify-center items-center'>
                <article className='w-[90%] max-w-[600px] bg-white/60 rounded-lg flex justify-center backdrop-blur-[5px] items-center'>
                    <figure className='w-[90%] h-[90%] mt-8'>
                        <header className='w-full pb-10 flex justify-center '>
                            <h1 className='font-bold text-3xl'>Modifier l'adresse e-mail</h1>
                        </header>
                        <section className='w-full pb-10'>
                            <article className='w-full'>
                                <form className='w-full flex flex-col items-center gap-7'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Adresse e-mail actuel</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="text" name="text" id="text" placeholder='drkate@exemple.com' required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Nouvel e-mail</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="text" name="text" id="text" placeholder='doctorkate@exemple.com' required/>
                                    </div>
                                    <div className='flex flex-col w-full gap-2'>
                                        <label>Confirmez l'adresse e-mail</label>
                                        <input className='w-full h-[50px] outline-none rounded-lg px-3' type="text" name="text" id="text" placeholder='doctorkate@exemple.com' required/>
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