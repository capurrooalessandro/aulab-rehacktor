import { NavLink } from "react-router"

export default function Sidebar({ genres }) {
    return (
        <>
            <label htmlFor="genres-drawer" className="drawer-overlay xs:backdrop-blur-xs"></label>
            <ul className="menu bg-base-200 min-h-full xs:w-100 w-screen p-0 text-[16px]">
                <div className="p-6 mb-2 flex justify-between items-center w-full bg-base-100 sticky top-0 z-1">
                    <h2 className="font-bold text-[25px]">Seleziona genere</h2>
                    <label 
                            htmlFor="genres-drawer"
                            className="btn btn-circle shadow-none text-neutral-content border-0 [&>svg]:brightness-100 hover:[&>svg]:brightness-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 25 25"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-label="Chiudi lista" 
                            >
                                <path strokeLinecap="round" strokeWidth="2" d="M4 4L22 22M22 4L4 22" />
                            </svg>
                        </label>
                </div>
                {
                    genres.map((genre) => {
                        return (
                            <li className="px-2 py-1" key={genre.id}>
                                <NavLink className="aria-[current=page]:bg-neutral-600" to={`/genre/${genre.slug}`}>{genre.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}