import { useLoaderData } from "react-router";
import SearchHeader from "../components/SearchPageComponents/SearchHeader";
import GameList from "../components/HomeComponents/GameList";
import GoBackBtn from "../components/LayoutComponents/GoBackBtn";

export default function SearchPage() {
    const games = useLoaderData();
    return (
        <>
            <SearchHeader />
            <GoBackBtn />
            <section>
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