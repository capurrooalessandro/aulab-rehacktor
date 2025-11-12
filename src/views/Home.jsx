import GameList from "../components/HomeComponents/GameList";
import Header from "../components/HomeComponents/Header";
import { useLoaderData } from "react-router"

export default function Home() {
	const games = useLoaderData();
	return (
		<>
			<Header/>
			<GameList>
				{
					games.map((game) => {
						return (
							<GameList.Card key={game.id} game={game} />
						)
					})
				}
			</GameList>
		</>
	)
}