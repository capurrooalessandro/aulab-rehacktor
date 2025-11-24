import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../context/UserContext"
import bgProfile from "../../assets/images/bg/profile-bg-image.jpg"
import placeholder from "../../assets/images/icons/upload-placeholder.png"
import supabase from "../../database/supabase"

export default function ProfileSettingsPage() {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const [errorMessageData, setErrorMessageData] = useState(null)
    const [infoMessageData, setInfoMessageData] = useState(null)
    const [infoMessageAvatar, setInfoMessageAvatar] = useState(null)
    const [errorMessageAvatar, setErrorMessageAvatar] = useState(null)

    const { user, profile, getUser } = useContext(UserContext);

    const handleChange = (e) => {
        setFile(() => e.target.files[0]);
    }

    useEffect(() => {
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(() => imageUrl);
        }
    }, [file]);

    const handleAvatarSubmit = async (e) => {
        setErrorMessageAvatar(null);
        setInfoMessageAvatar(null);
        
        e.preventDefault();
        const fileExt = file.name.split(".").pop();
        const fileName = `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from("avatars").upload(fileName, file);
        const { data, error } = await supabase
            .from("profiles")
            .upsert({ id: profile.id, avatar_url: fileName })
            .select();

        if (error) {
            setErrorMessageAvatar("Si è verificato un errore durante il cambio immagine dell'avatar. Riprova.");
            return;
        }

        setInfoMessageAvatar("Cambio immagine avatar in corso...")
        setTimeout(() => setInfoMessageAvatar(null), 3000);
        await getUser();
    };

    const { updateProfile } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm();

    const onSubmit = (data) => {
        setErrorMessageData(null);
        setInfoMessageData(null);

        const { error } = updateProfile(data);

        if (error) {
            setErrorMessageData("Si è verificato un errore durante il salvataggio dei dati. Riprova.");
            return;
        }

        setInfoMessageData("Salvataggio dati in corso...");
        setTimeout(() => setInfoMessageData(null), 3000);
    }

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
            <div className="relative z-10 flex flex-col lg:text-start text-center items-center gap-6 w-full h-full lg:px-10 px-6">
                {
                    user && profile && (
                        <>
                            <header className="flex flex-col justify-center text-center w-full h-[26vh]" aria-label="Header impostazioni">
                                <h1 className="md:text-[45px] text-[40px] font-aldrich text-center uppercase">Impostazioni:</h1>
                            </header>
                            <div className="flex lg:flex-row-reverse flex-col w-full gap-6">
                                <form className="md:self-center w-full" onSubmit={handleAvatarSubmit} aria-label="Form modifica avatar">
                                    <fieldset className="fieldset bg-base-200/40 rounded-box w-full p-4">
                                        <legend className="fieldset-legend text-[1.5rem]">Modifica avatar:</legend>
                                        <h2 className="md:text-[25px] text-[20px] place-self-center">Anteprima immagine:</h2>
                                        <figure className="w-auto grid place-content-center rounded-full overflow-hidden my-3">
                                            <img
                                                src={preview ?? placeholder}
                                                alt="256x256"
                                                className="w-auto lg:max-w-50 max-w-40 rounded-full"
                                            />
                                            <figcaption className="sr-only">
                                                Anteprima avatar
                                            </figcaption>
                                        </figure>
                                        <input
                                            type="file"
                                            className="file-input bg-base-100/50 file-input-lg w-full"
                                            onChange={handleChange}
                                        />
                                        <label className="label md:text-[17px] text-[15.5px]">Formati supportati: PNG, JPG, WEBP</label>
                                        <button
                                            type="submit"
                                            className="btn 2xl:btn-xl lg:btn-lg btn-primary"
                                            disabled={!file}
                                        >
                                            Aggiorna avatar
                                        </button>
                                        {infoMessageAvatar && (
                                            <p className="my-5 p-4 bg-info rounded-box text-center text-[18px]">
                                                {infoMessageAvatar}
                                            </p>
                                        )}
                                        {errorMessageAvatar && (
                                            <p className="my-5 p-4 bg-error rounded-box text-center text-[18px]">
                                                {errorMessageAvatar}
                                            </p>
                                        )}
                                    </fieldset>
                                </form>

                                <form onSubmit={handleSubmit(onSubmit)} className="w-full" aria-label="Form modifica dati">
                                    <fieldset className="fieldset place-content-between bg-base-200/40 h-full rounded-box w-full p-4">
                                        <legend className="fieldset-legend text-[1.5rem]">Modifica dati:</legend>
                                        <div className="flex flex-col lg:items-center lg:justify-center gap-3.5 lg:h-86">

                                            <label className="input bg-base-100/50 lg:input-xl input-lg w-full">
                                                <span className="label">Nome:</span>
                                                <input
                                                    type="text"
                                                    placeholder="Es. Mario"
                                                    defaultValue={profile?.first_name}
                                                    {
                                                    ...register("first_name", { required: true, minLength: 3, maxLength: 14 })
                                                    }
                                                />
                                                {
                                                    errors.first_name && errors.first_name.type === "required" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire un nome!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.first_name && errors.first_name.type === "minLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire un nome compreso tra 3 e 14 caratteri!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.first_name && errors.first_name.type === "maxLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Limite massimo di caratteri raggiunto!
                                                        </p>
                                                    )
                                                }
                                            </label>
                                            <label className="input bg-base-100/50 lg:input-xl input-lg w-full">
                                                <span className="label">Cognome:</span>
                                                <input
                                                    type="text"
                                                    placeholder="Es. Rossi"
                                                    defaultValue={profile?.last_name}
                                                    {
                                                    ...register("last_name", { required: true, minLength: 2, maxLength: 14 })
                                                    }
                                                />
                                                {
                                                    errors.last_name && errors.last_name.type === "required" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire un cognome!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.last_name && errors.last_name.type === "minLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire un cognome compreso tra 2 e 14 caratteri!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.last_name && errors.last_name.type === "maxLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Limite massimo di caratteri raggiunto!
                                                        </p>
                                                    )
                                                }
                                            </label>
                                            <label className="input bg-base-100/50 lg:input-xl input-lg w-full mb-5">
                                                <span className="label">Username:</span>
                                                <input
                                                    type="text"
                                                    placeholder="Es. mariorossi123"
                                                    defaultValue={profile?.username}
                                                    {
                                                    ...register("username", { required: true, minLength: 7, maxLength: 30 })
                                                    }
                                                />
                                                {
                                                    errors.username && errors.username.type === "required" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire il proprio nome utente!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.username && errors.username.type === "minLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Inserire un nome utente compreso tra 7 e 20 caratteri!
                                                        </p>
                                                    )
                                                }
                                                {
                                                    errors.username && errors.username.type === "maxLength" && (
                                                        <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                                            Limite massimo di caratteri raggiunto!
                                                        </p>
                                                    )
                                                }
                                            </label>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={!isDirty || !isValid} className="btn w-full 2xl:btn-xl lg:btn-lg btn-primary">Salva modifiche</button>
                                        </div>
                                        {errorMessageData && (
                                            <p className="my-5 p-4 bg-error rounded-box text-center text-[18px]">
                                                {errorMessageData}
                                            </p>
                                        )}
                                        {infoMessageData && (
                                            <p className="my-5 p-4 bg-info rounded-box text-center text-[18px]">
                                                {infoMessageData}
                                            </p>
                                        )}
                                    </fieldset>
                                </form>
                            </div>
                        </>
                    ) || (
                        <p className="mb-5 p-4 bg-error/40 rounded-box text-[23px]">
                            Accesso negato: impossibile visualizzare le impostazioni profilo,
                            esegui l'accesso al tuo profilo o crea un nuovo account
                        </p>
                    )
                }
            </div>
        </section>
    )
}