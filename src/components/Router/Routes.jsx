import React from 'react'
import Feed from '../Pages/Feed'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import NewUser from '../Pages/NewUser'

export const publicRoutes = [
    {path: "/login" exact: true component: Login}
    {path: "/registration" exact: true component: NewUser}
]

export const privateRoutes = [
    {path: "/feed" exact: true component: Login}
    {path: "/profile" exact: true component: NewUser}
]