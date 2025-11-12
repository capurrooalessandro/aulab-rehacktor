import GameCard from "./GameCard"

export default function GameList({ children }) {
    const getYear = () => new Date().getFullYear();
    return (
        <section className="pt-18 bg-base-200">
            <h2 className="font-bold md:text-[3rem] text-[2.5rem] text-center mb-18 px-5">Titoli recenti ({getYear()})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 bg-base-300 lg:py-15 py-18 px-5">
                {children}
            </div>
        </section>
    )
}

GameList.Card = GameCard;