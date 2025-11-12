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
            lg:hover:[&>div>p]:translate-0 lg:[&>div>p]:duration-300 [&>div>p]:duration-25 
            [&>div>p]:ease-in-out [&>div>p]:-translate-y-[2.1px] hover:[&>div>p]:translate-y-0 

            [&>div>h2]:transition lg:[&>div>h2]:-translate-[1.9px] lg:hover:[&>div>h2]:translate-0 
            [&>div>h2]:duration-250 [&>div>h2]:ease-in-out [&>div>h2]:-translate-y-[2.1px] 
            hover:[&>div>h2]:translate-y-0 

            [&>figure>*]:transition [&>figure>*]:duration-350 [&>figure>*]:ease-in-out [&>figure>img]:brightness-68 
            [&>figure>img]:scale-130 hover:[&>figure>img]:scale-135 hover:[&>figure>img]:brightness-32

            h-60 md:mx-auto sm:mx-20 mx-5"
        >
            <figure>
                <img
                    src={`${game.background_image}`}
                    alt={`${game.name}`}
                    className="aspect-video bg-cover"
                />
            </figure>
            <div className="card-body gap-[5.5px] px-5 py-5 wrap-anywhere">
                <h2 className="card-title">{game.name}</h2>
                <p className="my-0">
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
                    className="rating"
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
                    <p className="my-auto">
                        Data di rilascio: {game.tba ? "TBA" : game.released}
                    </p>
                    <button className="btn btn-primary lg:w-25 md:w-21 w-full">Dettagli</button>
                </div>
            </div>
        </article>
    )
}