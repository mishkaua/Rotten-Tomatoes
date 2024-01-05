import React from 'react'
import * as VscIcons from "react-icons/vsc";

export const SidebarData = [
    {
        title: 'Accounts',
        path: '/Admin/Accounts',
        icon: <VscIcons.VscAccount />
    },
    {
        title: 'Films',
        path: '/Admin/Films',
        icon: <VscIcons.VscDebugStart />
    },
    {
        title: 'Statistics',
        path: '/Admin/FilmsStats',
        icon: <VscIcons.VscGraph />
    },
]
