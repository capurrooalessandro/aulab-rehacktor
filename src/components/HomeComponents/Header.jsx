import heroBg from "../../assets/images/hero-image.jpg"

export default function HomeHeader() {
    return (
        <section>
            <header className="hero min-h-[70vh]" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay backdrop-brightness-67"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <div className="font-aldrich lg:max-w-xl sm:max-w-lg">
                            <h1 className="font-[1000] mb-0 sm:text-[45px] text-[40px] uppercase">Rehacktor</h1>
                            <p className="md:mb-5 mb-4 sm:text-[28px] text-[24.5px]">
                                Il portale dove i videogiochi incontrano la community.
                            </p>
                        </div>
                        {/*<div className="join">
                            <label className="input md:text-[17px] text-[15px] md:h-13 h-11.5 lg:w-130 sm:w-80 rounded-s">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Cerca per titolo" />
                            </label>
                            <button className="btn btn-primary md:text-[17px] text-[15px] md:h-13 h-11.5 join-item">Cerca gioco</button>
                        </div>*/}
                    </div>
                </div>
            </header>
        </section>
    )
}