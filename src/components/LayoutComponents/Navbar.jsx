import { useState } from "react"
import { NavLink } from "react-router"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <nav
                className="navbar bg-base-100 shadow-sm relative lg:px-6.5 px-3 lg:py-3.5 py-4.5"
                role="navigation"
                aria-label="Primary"
            >
                <section className="navbar-start">
                    <NavLink className="font-medium text-2xl hidden lg:inline-flex" to="/">
                        Rehacktor
                    </NavLink>
                    <button
                        type="button"
                        className="btn btn-link text-white px-1 lg:hidden"
                        aria-controls="mobile-nav"
                        aria-expanded={open}
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeWidth="2" d="M4 4L22 22M22 4L4 22" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h24m-24 8h24m-24 8h21" />
                            </svg>
                        )}
                    </button>
                </section>
                <section className="navbar-center">
                    <NavLink className="font-medium text-2xl lg:hidden inline-flex" to="/">
                        Rehacktor
                    </NavLink>
                    <ul className="menu menu-horizontal text-[18px] px-1 hidden lg:flex">
                        <li className="px-1">
                            <NavLink
                                to="/"
                                className="aria-[current=page]:bg-neutral-600 hover:bg-neutral-700"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </section>
                <section className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-link avatar p-0">
                            <div className="w-10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7C7C7C" viewBox="0 0 600 600">
                                    <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"/>
                                </svg>
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu text-[15.3px] dropdown-content bg-base-200 rounded-[4px] z-1 mt-1 w-46 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profilo
                                </a>
                            </li>
                            <li><a>Impostazioni</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </section>
                <section
                    id="mobile-nav"
                    className={`lg:hidden absolute inset-x-0 top-full ${open ? "block" : "hidden"}`}
                >
                    <ul className="menu w-full bg-base-100 border-t border-t-base-200 shadow p-3 text-[16px]">
                        <li>
                            <NavLink
                                to="/"
                                className="flex justify-center aria-[current=page]:bg-neutral-600 hover:bg-neutral-700"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}
