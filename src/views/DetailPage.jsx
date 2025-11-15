import { useLoaderData } from "react-router";
import DetailSection from "../components/DetailPageComponents/DetailSection";
import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";

export default function DetailPage() {
    const game = useLoaderData()
    return (
        <>
            <Navbar />
            <main>
                <section>
                    <button
                        className="btn btn-base-200 border-neutral-content border-3 text-neutral-content p-2 h-11.5 w-11.5 md:h-12 md:w-12 fixed lg:top-25.5 bottom-2.5 lg:left-3 left-2.5 rounded-lg z-2"
                        aria-label="Torna indietro"
                        onClick={() => history.go(-1)}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="54"
                            height="54"
                            viewBox="0 0 24 24" 
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M10 16l-6-6 6-6" />
                            <path d="M20 21v-7a4 4 0 0 0-4-4H5" />
                        </svg>
                    </button>
                </section>
                <DetailSection game={game} />
            </main>
            <Footer />
        </>
    )
}