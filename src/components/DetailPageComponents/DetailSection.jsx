export default function DetailSection({ game }) {
	return (
		<section
			className="hero min-h-screen lg:text-start text-center"
			style={{
				backgroundImage: `url(${game.background_image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			aria-label="Detragli videogioco"
		>
			<div className="hero-overlay backdrop-brightness-64" />
			<div className="hero-content text-neutral-content mx-8 flex-col items-start gap-8 w-full">
				<div className="flex flex-col lg:flex-row gap-8 w-full">
					<header className="font-aldrich flex-1 flex flex-col justify-around gap-4" aria-label="Header section">
						<div>
							<h1 className="font-bold lg:text-[42px] text-[33px] uppercase">
								{game.name} - ({game.released ? game.released.substring(0, 4) : "TBA"})
							</h1>
						</div>

						<div>
							<h2 className="font-medium mb-2 lg:text-[27.5px] text-[18.5px]">
								Sviluppatori:&nbsp;
								{
									game.developers.map((developer, i, arr) => (
										<span key={developer.id}>
											{developer.name}
											{i < arr.length - 1 ? ", " : ""}
										</span>
									))
								}
							</h2>

							<h3 className="font-medium lg:text-[26px] text-[17px]">
								Piattaforme:&nbsp;
								{
									game.platforms.map((el, i, arr) => (
										<span key={el.platform.id}>
											{el.platform.name}
											{i < arr.length - 1 ? ", " : ""}
										</span>
									))
								}
							</h3>
						</div>
					</header>

					<aside className="card bg-base-100/30 backdrop-blur-sm text-base-content w-full lg:w-80 md:h-76 h-auto shrink-0 text-center" aria-label="Rating card">
						<div className="card-body items-stretch justify-between lg:p-6 p-4 lg:py-4 py-2.5">
							<h2 className="font-bold lg:text-[22px] text-[19px]">Rating:</h2>
							<div>
								{
									!game.tba ? (
										<>
											<div className="rating mb-4">
												{game.rating < 2 && (
													<div className="mask mask-star-2 bg-amber-950 md:size-23 size-20" aria-current="true" />
												)}
												{game.rating >= 2 && game.rating < 3 && (
													<div className="mask mask-star-2 bg-orange-400 md:size-23 size-20" aria-current="true" />
												)}
												{game.rating >= 3 && game.rating < 4 && (
													<div className="mask mask-star-2 bg-green-400 md:size-23 size-20" aria-current="true" />
												)}
												{game.rating >= 4 && game.rating < 5 && (
													<div className="mask mask-star-2 bg-yellow-400 md:size-23 size-20" aria-current="true" />
												)}
												{game.rating === 5 && (
													<div className="mask mask-star-2 bg-zinc-400 md:size-23 size-20" aria-current="true" />
												)}
											</div>
											<p className="lg:text-[22px] text-[19px] text-gray-300">
												{game.rating}/5
											</p>
										</>
								) : (
									<p className="text-3xl font-bold">
										TBA
									</p>
								)
								}
							</div>

							<div>
								<p className="lg:text-[18px] text-[16px] text-gray-300">
									Genere:&nbsp;
									{
										game.genres.map((genre, i, arr) => (
											<em key={genre.id}>
												{genre.name}
												{i < arr.length - 1 ? ", " : ""}
											</em>
										))
									}
								</p>
							</div>
						</div>
					</aside>
				</div>
				<article className={`max-w-fit ${game.description_raw.length < 800 ? "h-fit" : "h-70"} my-auto overflow-y-scroll no-scrollbar bg-base-300/60 backdrop-blur-sm rounded-lg`} aria-label="Informazioni">
					<h4 className="font-bold lg:text-[22px] text-[19px] sticky top-0 bg-base-100 py-3 px-3.5">
						Informazioni:
					</h4>
					<div className="font-medium lg:text-[19px] text-[16px] px-4 py-3" dangerouslySetInnerHTML={{ __html: game.description }}/>
				</article>
			</div>
		</section>
	);
}