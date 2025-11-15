import { Link } from "react-router"

export default function GameCard({ game }) {
    return (
        <article
            tabIndex={0}
            className="card bg-base-100 image-full touch-hover [&>div>*]:text-neutral-content 

            [&>div>div>*]:opacity-0 hover:[&>div>div>*]:opacity-100 [&>div>div>*]:transition 
            lg:[&>div>div>button]:translate-1 lg:hover:[&>div>div>button]:translate-0 
            [&>div>div>button]:translate-y-1 hover:[&>div>div>button]:translate-y-0
            [&>div>div>*]:duration-250 [&>div>div>*]:ease-in-out lg:[&>div>div>p]:translate-x-0 
            lg:hover:[&>div>div>p]:translate-x-1 [&>div>div>p]:translate-y-1 hover:[&>div>div>p]:translate-y-0
            
            lg:[&>div>div>div]:translate-x-0 
            lg:hover:[&>div>div>div]:translate-x-1 [&>div>div>div]:translate-y-1 hover:[&>div>div>div]:translate-y-0
            
            [&>div>p]:opacity-0 hover:[&>div>p]:opacity-100 [&>div>p]:transition lg:[&>div>p]:-translate-[2.1px] 
            lg:hover:[&>div>p]:translate-0 lg:[&>div>p]:duration-300 [&>div>p]:duration-250 
            [&>div>p]:ease-in-out [&>div>p]:-translate-y-[2.1px] hover:[&>div>p]:translate-y-0 

            [&>div>h2]:transition lg:[&>div>h2]:-translate-[1.9px] lg:hover:[&>div>h2]:translate-0 
            [&>div>h2]:duration-250 [&>div>h2]:ease-in-out [&>div>h2]:-translate-y-[2.1px] 
            hover:[&>div>h2]:translate-y-0 

            [&>figure>*]:transition [&>figure>*]:duration-350 [&>figure>*]:ease-in-out [&>figure>img]:brightness-68 
            [&>figure>img]:scale-130 hover:[&>figure>img]:scale-135 hover:[&>figure>img]:brightness-32 

            w-full md:aspect-16/10 xs:aspect-10/6 aspect-8/6"
        >
            <figure>
                <img
                    src={`${game.background_image}`}
                    alt={`${game.name}`}
                    className="aspect-video bg-cover"
                />
            </figure>
            <div className="card-body gap-[5.5px] md:p-5 p-4.5 wrap-anywhere">
                <h2 className="card-title 2xl:text-[24px] md:text-[20px] text-[19px]">{game.name}</h2>
                <p className="my-0 2xl:text-[17.5px] md:text-[15px] text-[14.5px]">
                    Genere:&nbsp;
                    {
                        game.genres.map((genre, i, arr) => {
                            return (
                                <span key={genre.id}>
                                    {genre.name}
                                    {i < arr.length - 1 ? ", " : ""}
                                </span>
                            )
                        })
                    }
                </p>
                <div
                    className="rating lg:w-30 w-26"
                    role="img"
                    aria-label={`${game.rating} of 5 stars`}
                >
                    {!game.tba &&
                        Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="mask mask-star-2 bg-white aria-current:bg-orange-400 border border-base-content/20"
                                aria-current={i < game.rating - 1 ? "true" : "false"}
                            />
                        ))
                    }
                </div>
                <div className="card-actions md:justify-between justify-center">
                    <p className="my-auto 2xl:text-[17.5px] md:text-[15px] text-[14.5px]">
                        Data di rilascio: {game.tba ? "TBA" : game.released}
                    </p>
                    <Link to={`/detail/${game.id}`} className="btn 2xl:btn-lg btn-md btn-primary 2xl:w-28 lg:w-25 md:w-21 w-full">Dettagli</Link>
                </div>
            </div>
        </article>
    )
}