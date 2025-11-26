import { useEffect, useState } from "react"
import supabase from "../../database/supabase";

export default function UserSection({ game, profile }) {
    const [isFavourite, setIsFavourite] = useState(false);
    const [description, setDescription] = useState();
    const [gameReviews, setGameReviews] = useState();
    const [checkReview, setCheckReview] = useState(false);

    const dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }

    const postDate = new Date().toLocaleString("it-IT", dateOptions);

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const addGame = async () => {
        const { data, error } = await supabase
            .from("favourites")
            .insert([{ profile_id: profile.id, game_id: game.id, game_name: game.name }])
            .select();
        setIsFavourite(true);
    }

    const removeGame = async () => {
        const { error } = await supabase
            .from("favourites")
            .delete()
            .eq("profile_id", profile.id)
            .eq("game_id", game.id);
        setIsFavourite(false);
    }

    const getReviews = async () => {
        let { data: reviews, error } = await supabase
            .from("reviews")
            .select("*")
            .eq("game_id", game.id)
        setGameReviews(reviews);
    }

    const addReview = async () => {
        const { data, error } = await supabase
            .from("reviews")
            .insert(
                [{
                    game_id: game.id,
                    game_name: game.name,
                    description,
                    profile_id: profile.id,
                    profile_username: profile.username,
                    posted_at: postDate
                }]
            )
            .select()
        setDescription("");
        setCheckReview(!checkReview)
    }

    const getFavourite = async () => {
        let { data: favourites, error } = await supabase
            .from("favourites")
            .select("*")
            .eq("profile_id", profile.id)
            .eq("game_id", game.id);
        if (favourites.length > 0) {
            setIsFavourite(true);
        }
    }

    useEffect(() => {
        getFavourite();
        getReviews();
    }, [checkReview])

    return (
        <>
            <article className="card bg-base-100/30 lg:mb-5 backdrop-blur-sm text-base-content 2xl:size-90 flex flex-col self-center w-full lg:w-80 lg:h-76 h-50 shrink-0 text-center" aria-label="Rating card">
                <div className="card-body items-stretch justify-between lg:p-6 p-4 lg:py-4 py-2.5">
                    <h2 className="font-bold lg:text-[22px] text-[19px]">Altro:</h2>
                    <div className="rating self-center">
                        {
                            !isFavourite && (
                                <div
                                    className="mask mask-heart cursor-pointer bg-red-400 brightness-50 hover:brightness-65 active:2xl:size-18 2xl:size-18 active:md:size-16 md:size-16 size-14 transition-all ease-in-out duration-250"
                                    aria-label="Aggiungi ai preferiti"
                                    aria-current="true"
                                    onClick={addGame}
                                />
                            ) || (
                                <div
                                    className="mask mask-heart cursor-pointer bg-red-400 brightness-100 hover:brightness-85 2xl:size-20 md:size-18 size-16 active:2xl:size-20 active:md:size-18 transition-all ease-in-out duration-250"
                                    aria-label="Rimuovi dai preferiti"
                                    aria-current="true"
                                    onClick={removeGame}
                                />
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
                <ul className="list text-start">
                    {
                        gameReviews && gameReviews.length > 0 ? (
                            gameReviews.map((review) => (
                                <li key={review.id} className="mx-3 mt-5 bg-base-300 rounded-box lg:py-3 py-2.5 lg:px-4 px-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="xs:text-[22px] text-[16.5px] font-semibold wrap-anywhere">
                                            {review.profile_username}
                                        </p>

                                        <em className="xs:text-[16px] text-[13.5px] opacity-70">
                                            {review.posted_at}
                                        </em>
                                    </div>
                                    <p className="mt-2 xs:text-[18px] text-[14.5px] wrap-anywhere">
                                        {review.description}
                                    </p>
                                </li>
                            ))
                        ) : (
                            <li className="font-medium lg:text-[19px] text-[16px] px-4 min-h-40 text-center flex flex-col justify-center self-center whitespace-pre-line">
                                Nessuna recensione trovata, lascia la tua recensione per primo!
                            </li>
                        )
                    }
                </ul>

                <div className="w-full px-4 flex flex-col my-8">
                    <textarea
                        className="textarea w-full min-h-26 lg:text-[19px] text-[16px] max-h-52 mb-2.5 p-3"
                        placeholder="Lascia una recensione o commento!"
                        onChange={handleDescription}
                        value={description}
                    />
                    <button
                        className="btn 2xl:btn-xl lg:btn-lg md:btn-md btn-primary w-full"
                        onClick={addReview}
                    >
                        Pubblica la tua recensione!
                    </button>
                </div>
            </aside>
        </>
    )
}