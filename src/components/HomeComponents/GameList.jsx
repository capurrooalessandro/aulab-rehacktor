import GameCard from "./GameCard"

export default function GameList({ children }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4.5 md:gap-5.5 2xl:gap-7 bg-base-300 lg:py-15 py-12 2xl:px-16 xl:px-10 px-8">
                {children}
            </div>
        </>
    )
}

GameList.Card = GameCard;