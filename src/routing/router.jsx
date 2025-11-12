import { createBrowserRouter } from "react-router"
import { getAllGamesLoader, getAllGenres } from "./loaders"
import Layout from "../components/Layouts/Layout"
import Home from "../views/Home"
import routes from "./routes"

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
            }
        ]
    }
])

export default router;