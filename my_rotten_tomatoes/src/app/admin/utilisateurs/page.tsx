import React from "react";

export default function Utilisateurs(){
    return(
        <div className="w-full">
            <header className="w-full h-[12vh] border-b-[0.1px] border-gray-300/20 flex justify-between items-center">
                <article>
                    <h1 className="text-white text-2xl">Utilisateurs</h1>
                </article>
            </header>
            <main className="w-full flex items-center text-white ">
            <div className="w-full">
                <table className="table-fixed w-full">
                    <thead className="h-[10vh]">
                        <tr className="w-full ">
                            <th className=" w-[100px] text-sm">ID</th>
                            <th className="h-full w-[250px] ">
                                <article className="flex w-[90%] h-full gap-3">
                                    <p className="text-sm">INFORMATIONS PERSONNELLES</p>     
                                </article>
                            </th>
                            <th className="text-sm w-[220px]">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">NOM D'UTILISATEUR </p>     
                                </article>
                            </th>
                            <th className="w-[150px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">COMMENTAIRES </p>     
                                </article>
                            </th>
                            <th className="w-[120px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">FAVORIS</p>     
                                </article>
                            </th>
                            <th className="w-[120px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">STATUS</p>     
                                </article>
                            </th>
                            <th className="w-[120px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">ACTIONS</p>     
                                </article>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-[10vh] bg-[#151f30]">
                            <td className="text-center">23</td>
                            <td className="h-full flex w-full ">
                                <article className="flex w-[90%] mt-3 gap-3">
                                    <figure className=" bg-slate-200 box-shadow-xl rounded-xl flex justify-center items-center w-[50px] h-[50px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle w-[30px]" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                    </figure>
                                    <figure>
                                        <p className="font-bold">nom</p>
                                        <p className="text-sm">email@email.com</p>
                                    </figure>
                                </article>
                            </td>
                            <td className="text-center">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">TEST </p>     
                                </article>
                            </td>
                            <td className="">4</td>
                            <td className="">8</td>
                            <td className="">Admin</td>
                            <td className="text-center">
                                <div className="flex gap-5">
                                    <button className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-file-lock w-[20px] text-[#2aa36c]" viewBox="0 0 16 16">
                                            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
                                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
                                        </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-vector-pen w-[20px] text-[#2e7ae2]" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                        <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash text-[#d35152]" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                    </svg>
                                </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                
            </div>
              

            </main>
        </div>
    )
}