import { createBrowserRouter } from "react-router"
import { getAllGamesLoader, getAllGenres, getGameDetails, getSearchedGames, getSelectedGenre } from "./loaders"

import routes from "./routes"
import Layout from "../components/Layouts/Layout"
import AuthLayout from "../components/Layouts/AuthLayout"

import Home from "../views/Home"
import DetailPage from "../views/DetailPage"
import SearchPage from "../views/SearchPage"
import GenrePage from "../views/GenrePage"

import ProfilePage from "../views/auth/ProfilePage"
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage"
import RegisterPage from "../views/auth/RegisterPage"
import LoginPage from "../views/auth/LoginPage"

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                path: routes.home,
                Component: Home,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getSelectedGenre
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: routes.register,
                Component: RegisterPage
            },
            {
                path: routes.login,
                Component: LoginPage
            },
            {
                path: routes.profile,
                Component: ProfilePage
            },
            {
                path: routes.profileSettings,
                Component: ProfileSettingsPage
            }
        ]
    },
    {
        path: routes.detail,
        Component: DetailPage,
        loader: getGameDetails
    },
    {
        basename: import.meta.env.BASE_URL,
    }
])

export default router;