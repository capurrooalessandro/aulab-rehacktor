import { useParams } from "react-router"
import heroBg from "../../assets/images/hero-image.jpg"


export default function SearchHeader() {
    const { slug } = useParams();
    return (
        <section aria-label="Header section">
            <header className="hero md:min-h-[70vh] min-h-[63vh]" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay backdrop-brightness-67 backdrop-blur-[1.5px]"/>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <div className="font-aldrich lg:max-w-2xl sm:max-w-lg">
                            <h1 className="font-semibold mb-0 lg:text-[55px] text-[45px] uppercase">
                                Risultati per: <em className="font-[1000] normal-case">"{slug}"</em>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}