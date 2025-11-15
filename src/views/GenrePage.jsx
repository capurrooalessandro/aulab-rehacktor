import { useLoaderData } from "react-router";
import GenreHeader from "../components/GenrePageComponents/GenreHeader";
import GameList from "../components/HomeComponents/GameList";
import GoBackBtn from "../components/LayoutComponents/GoBackBtn";

export default function GenrePage() {
    const games = useLoaderData();
    return (
        <>
            <GenreHeader />
            <GoBackBtn/>
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