import Link from "next/link";

export default function NavAdmin(){
    return(
        <div className="w-[350px] border-r border-red-500/20 h-[100vh]">
            <article className="w-full h-[12vh] border-b-[0.1px] border-gray-300/20 flex justify-center">
                <figure className="w-[80%] h-full flex items-center">
                    <h1 className="text-white text-xl font-bold">My Rotten Tomatoes</h1>
                </figure>
            </article>
            <article className="w-full h-[12vh] border-b border-gray-300/20 flex justify-center">
                <figure className="flex justify-between items-center w-[80%] h-full">
                    <article className="w-[50px] h-[50px] bg-slate-200 box-shadow-xl rounded-xl flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </article>
                    <div className="flex flex-col text-center">
                        <p className="text-xs text-white">Administrateur</p>
                        <p className="text-white">Chorly JALKH</p>
                    </div>

                    <button className="w-[40px] h-[40px] bg-slate-200 box-shadow-xl rounded-xl flex justify-center items-center hover:bg-red-500 hover:text-white duration-150 ease-in-out group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right " viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 mt-3">Déconnexion</span>
                    </button>
                </figure>
            </article>
            <article className="w-full flex justify-center mt-10">
                <figure className="flex justify-center flex-col w-full">
                    <Link href="/admin/utilisateurs" className="w-full h-[12vh] flex justify-center hover:bg-sky-500">
                        <div className="w-[80%] h-full flex gap-5 items-center cursor-pointer text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people " viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                            </svg>
                            <p className="">Utilisateurs</p>
                        </div>
                    </Link>
                    <Link href="/admin/films" className="w-full h-[12vh] flex justify-center hover:bg-sky-500">
                        <div className="w-[80%] h-full flex gap-5 items-center cursor-pointer text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-film text-white" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
                            </svg>
                        <p className="text-white">Films</p>
                        </div>
                    </Link>
                    <Link href="/admin/statistiques" className="w-full h-[12vh] flex justify-center hover:bg-sky-500 ">
                        <div className="w-[80%] h-full flex gap-5 items-center cursor-pointer text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[25px] h-[25px] text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className="text-white">Statistiques</p>
                        </div>
                    </Link>
                </figure> 


            </article>
          
                       </div>
    )
}