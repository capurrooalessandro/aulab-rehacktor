import { useContext } from "react";
import { NavLink, useNavigate } from "react-router"
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
    const { user, signOut } = useContext(UserContext);
    const navigateTo = useNavigate();

    const handleLogout = async () => {
        await navigateTo("/");
        signOut();
    }

    return (
        <header className="sticky top-0 z-50" aria-label="Navbar">
            <nav
                className="navbar bg-base-100 shadow-sm relative lg:px-6.5 px-3 lg:py-6.5 py-5.5"
                role="navigation"
                aria-label="Primary"
            >
                <section className="navbar-start">
                    <NavLink className="font-medium text-[22.5px] inline-flex font-aldrich uppercase pt-1.5" to="/">
                        Rehacktor
                    </NavLink>
                </section>
                <section className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user && (
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-link avatar p-0">
                                        <div className="w-10 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#7C7C7C"
                                                viewBox="0 0 600 600"
                                                aria-label="Apri menù utente"
                                            >
                                                <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
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
                                        <li>
                                            <a>Impostazioni</a>
                                        </li>
                                        <li onClick={handleLogout}>
                                            <a>Logout</a>
                                        </li>
                                    </ul>
                                </>
                            ) || (
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-base-300 rounded-lg lg:p-2 p-1.5">
                                        <div className="w-8 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-label="Apri menù a tendina"
                                            >
                                                <path d="M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S6.1,10,5,10z M19,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S20.1,10,19,10z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex="-1"
                                        className="menu text-[15.3px] dropdown-content bg-base-200 rounded-[4px] z-1 mt-1 w-46 p-2 shadow">
                                        <li>
                                            <NavLink to={`/auth/register`}>Registrazione</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/auth/login`}>Accedi</NavLink>
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </section>
            </nav>
        </header>
    );
}
