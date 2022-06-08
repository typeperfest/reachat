import Feed from '../Pages/Feed'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import NewUser from '../Pages/NewUser'

export const publicRoutes = [
    {path: "/login", exact: true, element: <Login/>},
    {path: "/registration", exact: true, element: <NewUser/>}
]

export const privateRoutes = [
    {path: "/feed", exact: true, element: <Feed/>},
    {path: "/profile", exact: true, element: <Profile/>}
]