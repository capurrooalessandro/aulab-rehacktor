import GameList from "../components/HomeComponents/GameList";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import { useLoaderData } from "react-router"

export default function Home() {
	const games = useLoaderData();
    const getYear = () => new Date().getFullYear();
	return (
		<>
			<HomeHeader/>
			<section className="pt-18 bg-base-200" aria-label="Card section">
            	<h2 className="font-bold lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] text-center mb-18 px-5">Titoli recenti ({getYear()})</h2>
				<GameList>
					{
						games.map((game) => {
							return (
								<GameList.Card key={game.id} game={game} />
							)
						})
					}
				</GameList>
			</section>
		</>
	)
}