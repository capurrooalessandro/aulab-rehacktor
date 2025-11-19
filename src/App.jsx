import router from "./routing/router"
import { RouterProvider } from "react-router"
import { UserContextProvider } from "./context/UserContext.jsx"

function App() {

	return (
		<UserContextProvider>
			<RouterProvider router={router}/>
		</UserContextProvider>
	)
}

export default App
