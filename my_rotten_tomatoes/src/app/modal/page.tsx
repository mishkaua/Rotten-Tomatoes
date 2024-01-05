import Images from 'next/image';

// import ReactTooltip from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import React, { createContext } from 'react';





export default function Modal() {
   
    return (
    <main className="w-full bg-slate-200 h-[100vh] items-center justify-center flex ">
        <section className="w-[80%] h-[80%] bg-white shadow-md rounded-lg flex flex-row  ">
            <section className="flex-col flex ">
                <article className="w-[300px] h-[450px] bg-black rounded-t-lg mx-3 mt-3 flex justify-center items-center ">
                    <img src="/images/berlin.jpg" alt="#" />
                </article>
                <article className="w-[300px] h-[100px] bg-black flex items-center mx-3 rounded-b-lg">
                    <img src="/images/netflix.jpg" alt="#" width={50} height={50}/>
                    <button>
                        <p className='text-white'>Disponible en streaming</p>
                        <p className='text-white'><strong>Regarder maintenant</strong></p>
                    </button>
                </article>
            </section> 
            <figure className='w-full ml-10'>
                <section className='flex h-[200px] items-center '>
                    <article className=''>
                        <h1 className='text-center text-3xl'><strong>Berlin(2023)</strong></h1>
                        <p>Drame, Action & Aventure, Crime</p>
                    </article>
                </section>
                <section className='w-full h-[100px] flex gap-5 justify-center '>
                    
                    <button className='h-[50px] w-[50px] bg-black rounded-full flex justify-center items-center group relative  '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                            </svg>
                            <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 mt-3">✨ Marquer comme favori</span>

                    </button>

                    
                    <button  className='h-[50px] w-[50px] bg-black rounded-full flex justify-center items-center group relative'>
                        <svg width="18" height="18" viewBox="0 0 800 766" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M438.632 24.4852L528.861 207.314C535.136 220.03 547.267 228.841 561.302 230.877L763.07 260.196C798.415 265.336 812.516 308.757 786.95 333.672L640.951 475.983C630.805 485.879 626.166 500.146 628.569 514.114L663.029 715.065C669.07 750.259 632.123 777.093 600.517 760.489L420.058 665.62C407.509 659.028 392.507 659.028 379.958 665.62L199.499 760.489C167.893 777.109 130.947 750.259 136.988 715.065L171.448 514.114C173.851 500.146 169.211 485.879 159.065 475.983L13.0663 333.672C-12.499 308.741 1.60196 265.32 36.9461 260.196L238.715 230.877C252.749 228.841 264.881 220.03 271.156 207.314L361.385 24.4852C377.171 -7.53819 422.829 -7.53819 438.632 24.4852Z" fill="white"/>
                        </svg>
                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 mt-3">✨ Notez moi !</span>
                    </button>
                    <button className='h-[50px] w-[50px] bg-black rounded-full flex justify-center items-center group relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chat text-white" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                        <span className="absolute top-10 flex gap-3 scale-0 rounded bg-gray-200 p-2 text-xs text-white group-hover:scale-100 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-plus-circle w-[20px] text-black" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 123 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_5)">
                                <path d="M64.395 1.96898L80.108 38.759L119.961 42.334C121.72 42.486 123.021 44.035 122.868 45.793C122.795 46.65 122.389 47.397 121.789 47.922L121.791 47.923L91.641 74.25L100.558 113.271C100.953 114.994 99.875 116.71 98.152 117.105C97.269 117.308 96.389 117.123 95.686 116.664L61.441 96.191L27.087 116.73C25.571 117.636 23.607 117.142 22.7 115.626C22.259 114.89 22.15 114.046 22.327 113.271H22.324L31.242 74.25L1.09198 47.924C-0.237018 46.761 -0.371018 44.741 0.790982 43.412C1.38198 42.736 2.19598 42.37 3.02598 42.325L42.774 38.759L58.495 1.94898C59.187 0.321978 61.067 -0.435022 62.694 0.256978C63.494 0.596978 64.084 1.22498 64.395 1.96898ZM74.967 43.023L61.441 11.351L47.914 43.023L47.91 43.022C47.462 44.073 46.463 44.848 45.245 44.954L10.939 48.032L36.758 70.577C37.707 71.317 38.196 72.565 37.91 73.817L30.236 107.395L59.742 89.754C60.728 89.137 62.016 89.082 63.084 89.721L92.647 107.395L84.974 73.817L84.977 73.815C84.725 72.706 85.073 71.497 85.989 70.696L111.944 48.032L77.815 44.97C76.607 44.932 75.472 44.208 74.967 43.023Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_23_5">
                                <rect width="122.879" height="117.188" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 123 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_5)">
                                <path d="M64.395 1.96898L80.108 38.759L119.961 42.334C121.72 42.486 123.021 44.035 122.868 45.793C122.795 46.65 122.389 47.397 121.789 47.922L121.791 47.923L91.641 74.25L100.558 113.271C100.953 114.994 99.875 116.71 98.152 117.105C97.269 117.308 96.389 117.123 95.686 116.664L61.441 96.191L27.087 116.73C25.571 117.636 23.607 117.142 22.7 115.626C22.259 114.89 22.15 114.046 22.327 113.271H22.324L31.242 74.25L1.09198 47.924C-0.237018 46.761 -0.371018 44.741 0.790982 43.412C1.38198 42.736 2.19598 42.37 3.02598 42.325L42.774 38.759L58.495 1.94898C59.187 0.321978 61.067 -0.435022 62.694 0.256978C63.494 0.596978 64.084 1.22498 64.395 1.96898ZM74.967 43.023L61.441 11.351L47.914 43.023L47.91 43.022C47.462 44.073 46.463 44.848 45.245 44.954L10.939 48.032L36.758 70.577C37.707 71.317 38.196 72.565 37.91 73.817L30.236 107.395L59.742 89.754C60.728 89.137 62.016 89.082 63.084 89.721L92.647 107.395L84.974 73.817L84.977 73.815C84.725 72.706 85.073 71.497 85.989 70.696L111.944 48.032L77.815 44.97C76.607 44.932 75.472 44.208 74.967 43.023Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_23_5">
                                <rect width="122.879" height="117.188" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 123 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_5)">
                                <path d="M64.395 1.96898L80.108 38.759L119.961 42.334C121.72 42.486 123.021 44.035 122.868 45.793C122.795 46.65 122.389 47.397 121.789 47.922L121.791 47.923L91.641 74.25L100.558 113.271C100.953 114.994 99.875 116.71 98.152 117.105C97.269 117.308 96.389 117.123 95.686 116.664L61.441 96.191L27.087 116.73C25.571 117.636 23.607 117.142 22.7 115.626C22.259 114.89 22.15 114.046 22.327 113.271H22.324L31.242 74.25L1.09198 47.924C-0.237018 46.761 -0.371018 44.741 0.790982 43.412C1.38198 42.736 2.19598 42.37 3.02598 42.325L42.774 38.759L58.495 1.94898C59.187 0.321978 61.067 -0.435022 62.694 0.256978C63.494 0.596978 64.084 1.22498 64.395 1.96898ZM74.967 43.023L61.441 11.351L47.914 43.023L47.91 43.022C47.462 44.073 46.463 44.848 45.245 44.954L10.939 48.032L36.758 70.577C37.707 71.317 38.196 72.565 37.91 73.817L30.236 107.395L59.742 89.754C60.728 89.137 62.016 89.082 63.084 89.721L92.647 107.395L84.974 73.817L84.977 73.815C84.725 72.706 85.073 71.497 85.989 70.696L111.944 48.032L77.815 44.97C76.607 44.932 75.472 44.208 74.967 43.023Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_23_5">
                                <rect width="122.879" height="117.188" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 123 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_5)">
                                <path d="M64.395 1.96898L80.108 38.759L119.961 42.334C121.72 42.486 123.021 44.035 122.868 45.793C122.795 46.65 122.389 47.397 121.789 47.922L121.791 47.923L91.641 74.25L100.558 113.271C100.953 114.994 99.875 116.71 98.152 117.105C97.269 117.308 96.389 117.123 95.686 116.664L61.441 96.191L27.087 116.73C25.571 117.636 23.607 117.142 22.7 115.626C22.259 114.89 22.15 114.046 22.327 113.271H22.324L31.242 74.25L1.09198 47.924C-0.237018 46.761 -0.371018 44.741 0.790982 43.412C1.38198 42.736 2.19598 42.37 3.02598 42.325L42.774 38.759L58.495 1.94898C59.187 0.321978 61.067 -0.435022 62.694 0.256978C63.494 0.596978 64.084 1.22498 64.395 1.96898ZM74.967 43.023L61.441 11.351L47.914 43.023L47.91 43.022C47.462 44.073 46.463 44.848 45.245 44.954L10.939 48.032L36.758 70.577C37.707 71.317 38.196 72.565 37.91 73.817L30.236 107.395L59.742 89.754C60.728 89.137 62.016 89.082 63.084 89.721L92.647 107.395L84.974 73.817L84.977 73.815C84.725 72.706 85.073 71.497 85.989 70.696L111.944 48.032L77.815 44.97C76.607 44.932 75.472 44.208 74.967 43.023Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_23_5">
                                <rect width="122.879" height="117.188" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 123 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_5)">
                                <path d="M64.395 1.96898L80.108 38.759L119.961 42.334C121.72 42.486 123.021 44.035 122.868 45.793C122.795 46.65 122.389 47.397 121.789 47.922L121.791 47.923L91.641 74.25L100.558 113.271C100.953 114.994 99.875 116.71 98.152 117.105C97.269 117.308 96.389 117.123 95.686 116.664L61.441 96.191L27.087 116.73C25.571 117.636 23.607 117.142 22.7 115.626C22.259 114.89 22.15 114.046 22.327 113.271H22.324L31.242 74.25L1.09198 47.924C-0.237018 46.761 -0.371018 44.741 0.790982 43.412C1.38198 42.736 2.19598 42.37 3.02598 42.325L42.774 38.759L58.495 1.94898C59.187 0.321978 61.067 -0.435022 62.694 0.256978C63.494 0.596978 64.084 1.22498 64.395 1.96898ZM74.967 43.023L61.441 11.351L47.914 43.023L47.91 43.022C47.462 44.073 46.463 44.848 45.245 44.954L10.939 48.032L36.758 70.577C37.707 71.317 38.196 72.565 37.91 73.817L30.236 107.395L59.742 89.754C60.728 89.137 62.016 89.082 63.084 89.721L92.647 107.395L84.974 73.817L84.977 73.815C84.725 72.706 85.073 71.497 85.989 70.696L111.944 48.032L77.815 44.97C76.607 44.932 75.472 44.208 74.967 43.023Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_23_5">
                                <rect width="122.879" height="117.188" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>

                    </button>
                </section>
                <section className='w-full h-[100px]'>
                    <p className='italic'>Only two things can brighten a dark day: The first is love. The second is stealing a fortune.</p>
                </section>
                <section>
                    <h1 className='text-xl'><strong>Synopsis</strong></h1>
                    <p>En pleine gloire, Berlin réunit une équipe à Paris pour réaliser l'un de ses projets les plus ambitieux : <br></br>dérober 44 millions d'euros de bijoux, en une nuit.</p>
                    <br></br>
                    <p><strong>Alex Pina</strong></p>
                    <p>Réalisatrice / Réalisateur</p>
                </section>
            </figure>
        </section>

    </main>


    )
  }
  