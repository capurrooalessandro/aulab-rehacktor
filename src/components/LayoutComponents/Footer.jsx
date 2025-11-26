import { IconContext } from "react-icons";
import { SiReact, SiTailwindcss, SiJavascript, SiDaisyui, SiSupabase, SiVite } from "react-icons/si";

export default function Footer() {
    return (
        <footer aria-label="Footer" className="footer lg:footer-horizontal bg-base-100 text-neutral-content text-center items-center px-7 py-12 2xl:text-[22.5px] text-[18px]">
            <aside className="grid-flow-col items-center lg:justify-self-start justify-self-center" aria-label="Copyright">
                <p>
                    Copyright © 2025 Capurro Alessandro - all rights reserved.
                </p>
            </aside>

            <nav
                aria-label="Linguaggi e tecnologie usati"
                className="flex lg:flex-wrap lg:flex-row flex-col items-center lg:justify-end justify-self-center gap-3 lg:justify-self-end"
            >
                Powered by:
                <a className="inline-flex items-center lg:my-0 my-3" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener">
                    <SiJavascript 
                        className="2xl:size-10 lg:size-7 size-10 hover:fill-[#FFD600] hover:bg-black transition-all ease-in-out duration-250" 
                        aria-label="JavaScript"  
                    />
                </a>
                <a className="inline-flex items-center lg:mb-0 mb-3" href="https://react.dev/" target="_blank" rel="noopener">
                    <SiReact 
                        className="2xl:size-11 lg:size-8 size-11 hover:fill-[#61DBFB] transition-all ease-in-out duration-250" 
                        aria-label="ReactJs"  
                    />
                </a>
                <a className="inline-flex items-center lg:mb-0 mb-3" href="https://vite.dev/" target="_blank" rel="noopener">
                    <SiVite 
                        className="2xl:size-10 lg:size-7 size-10 hover:fill-[#9231BE] transition-all ease-in-out duration-250" 
                        aria-label="Vite" 
                    />
                </a>
                <a className="inline-flex items-center lg:mb-0 mb-3" href="https://supabase.com/" target="_blank" rel="noopener">
                    <SiSupabase
                        className="2xl:size-10 lg:size-7 size-11 hover:fill-[#3ECF8E] transition-all ease-in-out duration-250" 
                        aria-label="Supabase"  
                    />
                </a>
                <a className="inline-flex items-center lg:mb-0 mb-3" href="https://tailwindcss.com/" target="_blank" rel="noopener">
                    <SiTailwindcss 
                        className="2xl:size-13 lg:size-9 size-11 hover:fill-[#00BCFF] transition-all ease-in-out duration-250" 
                        aria-label="TailwindCSS" 
                    />
                </a>
                <a className="inline-flex items-center lg:mb-0 mb-3" href="https://daisyui.com/" target="_blank" rel="noopener">
                    <SiDaisyui 
                        className="2xl:size-12 lg:size-8 size-12 hover:fill-[#FFC834] transition-all ease-in-out duration-250" 
                        aria-label="DaisyUI" 
                    />
                </a>
            </nav>
        </footer>
    );
}