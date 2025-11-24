import { Link } from "react-router"
import heroBg from "../../assets/images/bg/hero-image.jpg"
import { useState } from "react"

export default function HomeHeader() {
    const [alert, setAlert] = useState(false);
    const [slug, setSlug] = useState("");
    const isEmpty = !slug.trim();
    const forbiddenChars = /[^A-Za-z0-9\s]/g; //filtro per i caratteri speciali
    
    const handleChange = (e) => {
        const cleanSlug = e.target.value.replace(forbiddenChars, "");
        setAlert(false)
        setSlug(cleanSlug); 
    }

    const handleButton = (e) => {
        if (isEmpty) {
            e.preventDefault();
            setAlert(true);
        }
    }

    return (
        <section aria-label="Header section">
            <header className="hero 2xl:min-h-[70vh] md:min-h-[80vh] min-h-[67vh]" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay backdrop-brightness-67 backdrop-blur-[1.5px]"/>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <div className="font-aldrich lg:max-w-2xl sm:max-w-lg">
                            <h1 className="font-[1000] lg:mb-1.5 mb-2.5 lg:text-[55px] text-[45px] uppercase">Rehacktor</h1>
                            <h2 className="md:mb-5 mb-4 lg:text-[32px]/11 text-[28px]/10">
                                Cerca, scopri e recensisci i tuoi giochi preferiti.
                            </h2>
                        </div>
                        <div className="join">
                            <div>
                                <label className="input md:text-[17px] text-[15px] md:h-13 h-11.5 lg:w-130 sm:w-80 rounded-s outline-none join-item">
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
                                    <input type="search" placeholder="Cerca per titolo" onChange={handleChange}/>
                                </label>
                            </div>
                            <Link to={isEmpty ? `#` : `/search/${slug}`} onClick={(e) => handleButton(e)} className="btn btn-primary md:text-[17px] text-[15px] md:h-13 h-11.5 join-item">Cerca gioco</Link>
                        </div>
                        {alert && (
                            <div className="bg-error/30 text-error text-start rounded-box py-4 px-3 mt-2 mx-4">
                                <p className="text-[16px]">Inserire un titolo per effettuare la ricerca.</p>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </section>
    )
}