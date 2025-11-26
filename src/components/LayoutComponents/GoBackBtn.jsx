export default function GoBackBtn() {
    return (
        <>
            <button
                className="btn bg-base-200 hover:brightness-80 transition duration-100 ease-linear border-neutral-content 
                    border-3 text-neutral-content p-2 h-11.5 w-11.5 md:h-12 md:w-12 2xl:h-14.5 2xl:w-14.5 fixed 2xl:top-32 lg:top-29 top-23.5 lg:left-3 left-2.5 rounded-lg z-2"
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
                    aria-label="Torna indietro"
                >
                    <path d="M10 16l-6-6 6-6" />
                    <path d="M20 21v-7a4 4 0 0 0-4-4H5" />
                </svg>
            </button>
        </>
    )
}