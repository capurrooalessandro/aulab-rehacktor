import { createBrowserRouter } from "react-router"
import { getAllGamesLoader, getAllGenres, getGameDetails, getSearchedGames, getSelectedGenre } from "./loaders"
import routes from "./routes"
import Layout from "../components/Layouts/Layout"
import Home from "../views/Home"
import DetailPage from "../views/DetailPage"
import SearchPage from "../views/SearchPage"
import GenrePage from "../views/GenrePage"

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
            },
        ]
    },
    {
        path: routes.detail,
        Component: DetailPage,
        loader: getGameDetails
    }
])

export default router;