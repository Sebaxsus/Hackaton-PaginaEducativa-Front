//TODO: Here We make a Clerk Logic for...  Tokes Auths For Go to others Pages... 
import { useNavigate } from "react-router";

// Clerk Imports
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Auth = ({ children }) => {
    const navigate = useNavigate()
    return (
        <>
            <SignedIn>
                {children}
            </SignedIn>
            <SignedOut>
                <div className="flex flex-col gap-6 justify-center items-center w-full h-[100vh] font-Limelight ">
                    <section className="flex flex-col gap-6 justify-center items-center w-4/5 h-4/5 font-Limelight rounded-lg border border-[var(--Text-color)] bg-[var(--Secondary-Color)]">
                        <h1>
                            Debe autenticarse para acceder a este contenido
                        </h1>
                        <figure className="w-1/2 h-1/2 aspect-square text-center flex flex-col items-center p-6">
                            <img src="https://http.cat/401" alt="Imagen de un gato afuera de una puerta" className="h-[-webkit-fill-available] aspect-square"/>
                            <figcaption>Imagen de un gato afuera de una puerta</figcaption>
                        </figure>
                        <button onClick={() => { navigate("/") }} className="btn-text">
                            Volver al Home
                        </button>
                    </section>
                </div>
            </SignedOut>
        </>
    )
}

export default Auth