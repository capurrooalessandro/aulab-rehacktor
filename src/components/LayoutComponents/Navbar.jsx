import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router"
import defaultIcon from "../../assets/images/icons/avatar.png"
import { UserContext } from "../../context/UserContext";
import supabase from "../../database/supabase";

export default function Navbar() {
    const { user, profile, signOut } = useContext(UserContext);
    const [avatar, setAvatar] = useState();
    const navigateTo = useNavigate();

    const downloadAvatar = async () => {
        if (profile) {
            const { data, error } = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
            const url = URL.createObjectURL(data);
            setAvatar(url);
        }
    }

    const handleLogout = async () => {
        await navigateTo("/");
        signOut();
    }

    useEffect(() => {
        downloadAvatar();
    }, [profile])

    return (
        <header className="sticky top-0 z-50" aria-label="Navbar">
            <nav
                className="navbar bg-base-100 shadow-sm relative lg:px-6.5 px-3 2xl:py-8.5 lg:py-7.5 py-5.5"
                role="navigation"
                aria-label="Primary"
            >
                <section className="navbar-start">
                    <NavLink className="font-medium 2xl:text-[28.5px] lg:text-[24.5px] text-[22.5px] inline-flex font-aldrich uppercase pt-1.5" to="/">
                        Rehacktor
                    </NavLink>
                </section>
                <section className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user && (
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-link avatar p-0">
                                        <div className="2xl:w-15 w-12 rounded-full">
                                            <img
                                                src={avatar ? avatar : defaultIcon}
                                                alt="Avatar utente"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex="-1"
                                        className="menu dropdown-content 2xl:text-[19.5px] lg:text-[17.5px] text-[15.5px] bg-base-200 rounded-[8px] z-1 mt-1 2xl:w-60 w-50 p-2.5 shadow">
                                        <li className="mb-1">
                                            <NavLink className="aria-[current]:bg-[#2E333A]" end to={`/auth/profile`}>
                                                Profilo
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="aria-[current]:bg-[#2E333A]" to={`/auth/profile/settings`}>
                                            Impostazioni
                                            </NavLink>
                                        </li>
                                        <hr className="my-2 border-zinc-500" />
                                        <li onClick={handleLogout}>
                                            <a className="btn btn-primary 2xl:text-[19.5px] lg:text-[17.5px] text-[15.5px]">Logout</a>
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
                                        className="menu 2xl:text-[19.5px] lg:text-[17.5px] text-[15.5px] dropdown-content bg-base-200 rounded-[4px] z-1 mt-1 2xl:w-60 w-50 p-2 shadow">
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
