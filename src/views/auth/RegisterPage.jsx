import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

import bgRegister from "../../assets/images/bg/register-bg-image.jpg"
import RegisterPageHeader from "../../components/RegisterPageComponents/RegisterPageHeader";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const navigateTo = useNavigate();

    const { signUp } = useContext(UserContext)

    const onSubmit = async (userData) => {
        setErrorMessage(null);
        setSuccessMessage(null);
        const { error } = await signUp({
            email: userData.email,
            password: userData.password,
            options: {
                data: {
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    username: userData.username
                }
            }
        })

        console.error(error);
        if (error) {  
            if (error.code === "user_already_exists" || error.message === "User already registered") {
                setErrorMessage("Nome utente già registrato. Inserire un nome utente valido o effettuare l'accesso.");
            } else {
                setErrorMessage("Si è verificato un errore durante la registrazione. Riprova.");
            }
            return;
        }
        setSuccessMessage("Registrazione avvenuta con successo! Verrai reindirizzato alla pagina principale tra pochi secondi...");
        setTimeout(() => navigateTo("/"), 1700);
    }

    return (
        <section className="relative flex justify-center items-center min-h-screen lg:py-0 py-10">
            <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${bgRegister})` }} />
            <div className="absolute inset-0 bg-base-300/40 backdrop-blur-[7px] backdrop-brightness-75" />
            <div className="relative z-10 flex lg:flex-row flex-col">
                <RegisterPageHeader />
                <form onSubmit={handleSubmit(onSubmit)} className="md:self-center">
                    <fieldset className="fieldset bg-base-200/40 border-base-300 rounded-box md:w-md w-auto border p-4 lg:mx-0 mx-5">
                        {errorMessage && (
                            <p className="mb-5 p-4 bg-error rounded-box text-[18px]">
                                {errorMessage}
                            </p>
                        )}
                        {successMessage && (
                            <p className="mb-5 p-4 bg-success rounded-box text-[18px]">
                                {successMessage}
                            </p>
                        )}
                        <legend className="fieldset-legend text-[1.5rem]">Registrazione</legend>
                        <div className="flex flex-row mb-1">
                            <label className="floating-label w-full me-1.5">
                                <span>Nome</span>
                                <input
                                    type="text"
                                    name="Name"
                                    className="input bg-base-100/50 input-lg w-full"
                                    placeholder="Mario"
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
                            <label className="floating-label w-full">
                                <span>Cognome</span>
                                <input
                                    type="text"
                                    className="input bg-base-100/50 input-lg w-full"
                                    placeholder="Rossi"
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
                        </div>
                        <label className="floating-label mb-1">
                            <span>Nome utente</span>
                            <input
                                type="text"
                                className="input bg-base-100/50 input-lg md:w-md w-full"
                                placeholder="mariorossi123"
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
                        <label className="floating-label mb-1">
                            <span>Email</span>
                            <input
                                type="email"
                                className="input bg-base-100/50 input-lg md:w-md w-full"
                                placeholder="mario.rossi@email.com"
                                {
                                ...register("email", { required: true, minLength: 7, maxLength: 50 })
                                }
                            />
                            {
                                errors.email && errors.email.type === "required" && (
                                    <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                        Inserire un indirizzo di posta elettronica!
                                    </p>
                                )
                            }
                            {
                                errors.email && errors.email.type === "minLength" && (
                                    <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                        L'indirizzo di posta elettronica dev'essere compreso tra 7 e 30 caratteri!
                                    </p>
                                )
                            }
                            {
                                errors.email && errors.email.type === "maxLength" && (
                                    <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                        Limite massimo di caratteri raggiunto!
                                    </p>
                                )
                            }
                        </label>
                        <label className="floating-label">
                            <span>Password</span>
                            <input
                                type="password"
                                className="input bg-base-100/50 input-lg md:w-md w-full"
                                placeholder="Inserire una password"
                                {
                                ...register("password", { required: true, minLength: 6 })
                                }
                            />
                            {
                                errors.password && errors.password.type === "required" && (
                                    <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                        Inserire la propria password!
                                    </p>
                                )
                            }
                            {
                                errors.password && errors.password.type === "minLength" && (
                                    <p className={`mt-3 p-2 bg-error rounded-box text-[13.5px]`}>
                                        La password dev'essere lunga almeno 6 caratteri!
                                    </p>
                                )
                            }
                        </label>
                        <hr className="my-2.5 border-zinc-500" />
                        <button type="submit" className="btn btn-primary">Crea account</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}