'use client'

import React, { Fragment, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import axios from "axios";

export default function Admin() { 
    
    return(<>

        <header className="w-full h-[12vh] border-b-[0.1px] border-gray-300/60  flex justify-between items-center">
                <article>
                    <h1 className="text-white text-2xl">Panel Admin</h1>
                </article>
        </header>
        <main className="flex justify-around mt-8">
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-4">
          <FaRegUserCircle
            style={{
              color: "yellow",
              fontSize: "10rem",
            }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Utilisateurs</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="/admin/utilisateurs">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Go
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-4">
          <FaRegPlayCircle
            style={{
              color: "yellow",
              fontSize: "10rem",
            }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Films</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="/admin/films">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Go
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-4">
          <FaChartLine
            style={{
              color: "yellow",
              fontSize: "10rem",
            }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Statistiques</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="/admin/statistiques">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Go
              </span>
            </a>
          </div>
        </div>
      </main>
    </>)
     
}