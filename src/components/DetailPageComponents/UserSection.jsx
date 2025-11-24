import { useEffect, useState } from "react"
import supabase from "../../database/supabase";

export default function UserSection({ game, profile_id }) {
    const [isFavourite, setIsFavourite] = useState(false);

    const addGame = async () => {
        const { data, error } = await supabase
            .from("favourites")
            .insert([{ profile_id, game_id: game.id, game_name: game.name }])
            .select();
        setIsFavourite(true);
    }

    const removeGame = async () => {
        const { error } = await supabase
            .from("favourites")
            .delete()
            .eq("profile_id", profile_id)
            .eq("game_id", game.id);
        setIsFavourite(false);
    }

    const getFavourite = async () => {
        let { data: favourites, error } = await supabase
            .from("favourites")
            .select("*")
            .eq("profile_id", profile_id)
            .eq("game_id", game.id);
        if (favourites.length > 0) {
            setIsFavourite(true);
        }
    }

    useEffect(() => {
        getFavourite();
    }, [])

    return (
        <>
            <article className="card bg-base-100/30 mb-5 backdrop-blur-sm text-base-content 2xl:size-90 flex flex-col self-center w-full lg:w-80 lg:h-76 h-50 shrink-0 text-center" aria-label="Rating card">
                <div className="card-body items-stretch justify-between lg:p-6 p-4 lg:py-4 py-2.5">
                    <h2 className="font-bold lg:text-[22px] text-[19px]">Altro:</h2>
                    <div>
                        {
                            !isFavourite && (
                                <div className="rating">
                                    <div
                                        className="mask mask-heart cursor-pointer bg-red-400 brightness-50 hover:brightness-65 active:2xl:size-18 2xl:size-18 active:md:size-16 md:size-16 size-14 transition-all ease-in-out duration-250"
                                        aria-label="Aggiungi ai preferiti"
                                        aria-current="true"
                                        onClick={addGame}
                                    />
                                </div>
                            ) || (
                                <>
                                    <div className="rating">
                                        <div
                                            className="mask mask-heart cursor-pointer bg-red-400 brightness-100 hover:brightness-85 2xl:size-20 md:size-18 size-16 active:2xl:size-20 active:md:size-18 transition-all ease-in-out duration-250"
                                            aria-label="Rimuovi dai preferiti"
                                            aria-current="true"
                                            onClick={removeGame}
                                        />
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div>
                        <p className="lg:text-[18px] text-[16px] text-gray-300">
                            {!isFavourite && "Aggiungi ai preferiti" || "Rimuovi dai preferiti"}
                        </p>
                    </div>
                </div>
            </article>
            <aside
                className={`2xl:w-[97%] w-full flex flex-col self-center mx-auto overflow-y-scroll no-scrollbar bg-base-300/60 backdrop-blur-sm rounded-lg`}
                aria-label="Recensioni"
            >
                <h4 className="font-bold lg:text-[22px] text-[19px] sticky top-0 bg-base-100 py-3 px-3.5">
                    Recensioni:
                </h4>

                <p className="font-medium lg:text-[19px] text-[16px] px-4 py-3 whitespace-pre-line">


                </p>
            </aside>
        </>
    )
}