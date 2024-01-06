import React from "react";

export default function Films(){
    return(
        <div className="w-full">
            <header className="w-full h-[12vh] border-b-[0.1px] border-gray-300/60  flex justify-between items-center">
                <article>
                    <h1 className="text-white text-2xl">Films</h1>
                </article>
            </header>
            <main className="w-full flex items-center text-white ">
            <div className="w-full">
                <table className="table-fixed w-full">
                    <thead className="h-[10vh]">
                        <tr className="w-full ">
                            <th className=" w-[100px] text-sm">ID</th>
                            <th className="h-full w-[150px]">
                                <article className="flex w-[90%] h-full gap-3">
                                    <p className="text-sm">FILMS</p>     
                                </article>
                            </th>
                            <th className="text-sm w-[120px]">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">POPULARITE</p>     
                                </article>
                            </th>
                            <th className="w-[150px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">SYNOPSIS</p>     
                                </article>
                            </th>
                            <th className="w-[120px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">DATE DE CREATION</p>     
                                </article>
                            </th>
                            <th className="w-[100px] text-sm">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">ACTION</p>     
                                </article>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-[10vh] bg-[#151f30]">
                            <td className="text-center">23</td>
                            <td className="text-center">
                                <article className="flex w-[90%] h-full  gap-3">
                                    <p className="text-sm">BERLIN (2023)</p>     
                                </article>
                            </td>
                            <td className="">Alex Pina</td>
                            <td className="truncate">En pleine gloire, Berlin réunit une équipe à Paris pour réaliser l'un de ses projets les plus ambitieux : dérober 44 millions d'euros de bijoux, en une nuit.</td>
                            <td className="">2 janvier 2024</td>
                            <td className="text-center">
                                <div className="flex gap-5">
                                    <button className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye w-[20px] text-[#ffc210]" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
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