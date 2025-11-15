import GameCard from "./GameCard"

export default function GameList({ children }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-5 bg-base-300 lg:py-15 py-12 px-5">
                {children}
            </div>
        </>
    )
}

GameList.Card = GameCard;