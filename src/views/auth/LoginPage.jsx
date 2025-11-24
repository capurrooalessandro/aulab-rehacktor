import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

import bgRegister from "../../assets/images/bg/register-bg-image.jpg"
import LoginPageHeader from "../../components/LoginPageComponents/LoginPageHeader";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const navigateTo = useNavigate();

    const { signIn } = useContext(UserContext)

    const onSubmit = async (userData) => {
        setErrorMessage(null);
        setSuccessMessage(null);
        const { error } = await signIn({
            email: userData.email,
            password: userData.password
        });


        if (error) {
            console.error(error);
            if (error.message === "invalid login credentials") {
                setErrorMessage("Email o password non corretti.");
            } else if (error.message === "Email not confirmed") {
                setErrorMessage("Devi prima confermare il tuo indirizzo email.");
            } else {
                setErrorMessage("Si è verificato un errore durante l'accesso. Riprova.");
            }
            return;
        }
        setSuccessMessage("Accesso effettuato con successo! Verrai reindirizzato alla pagina principale in pochi secondi...");
        setTimeout(() => navigateTo("/"), 1700);
    }

    return (
        <section className="relative flex justify-center items-center min-h-screen lg:py-0 py-10">
            <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${bgRegister})` }} />
            <div className="absolute inset-0 bg-base-300/40 backdrop-blur-[7px] backdrop-brightness-75" />
            <div className="relative z-10 flex lg:flex-row flex-col">
                <LoginPageHeader />
                <form onSubmit={handleSubmit(onSubmit)} className="md:self-center">
                    <fieldset className="fieldset bg-base-200/40 border-base-300 rounded-box md:w-sm w-auto border p-4 lg:mx-0 mx-5">
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
                        <legend className="fieldset-legend text-[1.5rem]">Accedi</legend>
                        <label className="floating-label w-full mb-1">
                            <span>Email</span>
                            <input
                                type="email"
                                className="input bg-base-100/50 input-lg md:w-sm w-full"
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
                        <label className="floating-label w-full">
                            <span>Password</span>
                            <input
                                type="password"
                                className="input bg-base-100/50 input-lg md:w-sm w-full"
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
                        <button type="submit" className="btn btn-primary">Accedi</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}