import { useContext, useState, useEffect } from "react"
import bgProfile from "../../assets/images/bg/profile-bg-image.jpg"
import defaultIcon from "../../assets/images/icons/avatar.png"
import { UserContext } from "../../context/UserContext"
import supabase from "../../database/supabase"
import { Link } from "react-router"

export default function ProfilePage() {
    const { user, profile } = useContext(UserContext);
    const [userFavorites, setUserFavorites] = useState();
    const [avatar, setAvatar] = useState();
    console.log("Profilo:", profile);
    console.log("Utente", user);

    const downloadAvatar = async () => {
        if (profile) {
            const { data, error } = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
            const url = URL.createObjectURL(data);
            setAvatar(url);
        }
    }

    const getFavourites = async () => {
        let { data: favourites, error } = await supabase
            .from("favourites")
            .select("*")
            .eq("profile_id", profile.id)
        setUserFavorites(favourites);
    }

    useEffect(() => {
        downloadAvatar();
        getFavourites();
    }, [profile])

    return (
        <section
            className="relative flex items-center min-h-screen lg:py-15 py-20"
            aria-label="Profile section"
        >
            <div
                className="absolute inset-0 bg-cover"
                style={{ backgroundImage: `url(${bgProfile})` }}
            />
            <div className="absolute inset-0 backdrop-blur-[7px] backdrop-brightness-75" />
            <div className="relative z-10 flex flex-col justify-between items-center gap-6 w-full px-4">
                {user && profile && (
                    <>
                        <header className="flex flex-col items-center w-full pb-7" aria-label="Header profilo">
                            <h1 className="2xl:text-[55px] md:text-[45px] text-[40px] font-aldrich text-center uppercase lg:mb-[160px] mb-[120px]">Dettagli profilo:</h1>
                            <figure className="w-auto rounded-full overflow-hidden mb-3">
                                <img
                                    src={avatar ?? defaultIcon}
                                    alt={`Avatar di ${profile.username}`}
                                    className="w-auto lg:max-w-50 max-w-40 object-cover"
                                />
                                <figcaption className="sr-only">
                                    {`Avatar di ${profile.username}`}
                                </figcaption>
                            </figure>
                            <h2 className="md:text-[34.5px] text-[30px] font-semibold text-center mb-0">
                                {profile.username}
                            </h2>
                            <h3 className="md:text-[21px] text-[17.5px] font-semibold text-center">
                                <em>Iscritto dal: "{user.created_at.substring(0, 10)}"</em>
                            </h3>
                        </header>

                        <article
                            className="flex lg:flex-row flex-col gap-8 lg:w-[90vw] w-full"
                            aria-label="Informazioni utente"
                        >
                            <div className="card bg-base-100/30 shadow-lg w-full h-70" aria-label="Dati personali">
                                <div className="card-body lg:text-[22px] text-[18px] justify-around items-stretch">
                                    <div>
                                        <h2 className="card-title lg:text-[24px] text-[22px]">Dati personali:</h2>
                                    </div>
                                    <div>
                                        <p>Nome: {profile.first_name}</p>
                                        <p>Cognome: {profile.last_name}</p>
                                        <p>Email: {user.email}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/auth/profile/settings`} className="btn 2xl:btn-xl lg:btn-lg md:btn-md btn-primary 2xl:w-54 lg:w-46 w-full">Modifica profilo</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100/30 shadow-lg w-full h-70">
                                <div className="card-body lg:text-[22px] text-[18px] justify-evenly items-stretch" aria-label="Attività utente">
                                    <div>
                                        <h2 className="card-title lg:text-[24px] text-[22px]">Attività utente:</h2>
                                    </div>
                                    <div>
                                        <p>Giochi preferiti: {userFavorites ? userFavorites.length : "Caricamento in corso..."}</p>
                                        <p>Recensioni pubblicate:</p>
                                    </div>
                                </div>
                            </div>

                        </article>
                    </>
                ) || (
                        <p className="mb-5 p-4 bg-error/40 rounded-box text-[23px]">
                            Accesso negato: impossibile visualizzare la sezione profilo,
                            esegui l'accesso al tuo profilo o crea un nuovo account
                        </p>
                    )
                }
            </div>
        </section>
    )
}