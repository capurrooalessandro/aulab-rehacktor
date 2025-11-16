import { Outlet, useLoaderData } from "react-router";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";
import Sidebar from "../LayoutComponents/Sidebar";

export default function Layout() {
    const genres = useLoaderData();

    return (
        <>
            <Navbar />
            <main>
                <section className="drawer">
                    <input id="genres-drawer" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content">
                        <label 
                            htmlFor="genres-drawer" 
                            className="btn btn-link text-neutral-content hover:brightness-80 transition
                                duration-100 ease-linear p-0 h-14 w-14 md:h-16 md:w-16 fixed lg:left-1 left-0.5 lg:bottom-1 bottom-0.5 z-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="58"
                                height="58"
                                viewBox="0 0 24 24"
                                fill="#1D232A"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-label="Apri lista"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="9" y1="3" x2="9" y2="21" />
                                <path d="M13 8l4 4-4 4" />
                            </svg>
                        </label>
                        <Outlet />
                    </div>
                    <nav className="drawer-side z-50" aria-label="Lista di generi">
                        <Sidebar genres={genres}/>
                    </nav>
                </section>
            </main>
            <Footer />
        </>
    )
}