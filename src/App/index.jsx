import "./base.css";
import ButtonTheme from "../Components/Layout/ButtonTheme";
import { useThemeLayout } from "../Hooks/Layout";
import Typewriter from "../Components/Typewriter";
import { useNavigate } from "react-router";

// Clerk Imports
import { SignInButton, SignIn } from "@clerk/clerk-react";

const App = () => {
  const [theme, switchTheme] = useThemeLayout();
  const navigate = useNavigate();
  return (
    <>
      <header className="w-[97.5%] h-auto bg-[var(--Secondary-Color))] m-[1.25%] rounded-2xl flex flex-col gap-[5rem]">
        <section className="w-[100%] h-20 p-10 border-b-1 flex items-center justify-between">
          <h1 className="font-Limelight text-4xl font-extrabold w-150">
            <Typewriter text="Welcome to Classroom" />
          </h1>
          <nav className="nav-home">
            <ul className="font-PoiretOne flex flex-row gap-[5rem] font-semibold text-lg">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Features">Features</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <ButtonTheme toggle={switchTheme} value={theme} />
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] h-auto pb-[3rem]">
          <div className="w-[50%] text-center">
            <h2 className="font-Limelight text-7xl text-[var(--Tertiary-Color)]">
              Transform Your Learning Experience Sign Up Now!!!
            </h2>
            <h3 className="--font-PoiretOne text-xl pt-6">
              Join our learning community by filling out our quick and easy
              registration form. Whether you're a student ready to start a
              course or a teacher sharing valuable feedback, this form helps us
              create a better classroom experience for everyone. Get started now
              and be part of an interactive, organized, and smarter way to
              learn!
            </h3>
          </div>
          <section className="opt-home font-SyneMono pt-10 flex flex-row gap-1 items-center justify-around w-200">
            <div>
              <h3>Have Account?</h3>
              <button
                className="btn-text"
                onClick={() => {
                  navigate("/log-in");
                }}
              >
                Log In
              </button>
            </div>
            <div>
              <h3>Don´t?</h3>
              <button
                className="btn-text"
                onClick={() => {
                  navigate("/sing-up");
                }}
              >
                Get Started
              </button>
            </div>
          </section>
        </section>
      </header>

      <main className="flex flex-col justify-center items-center gap-y-20 h-auto w-[97.5%] m-[1.25%] gap-y-[10rem]">
        <section
          id="Home"
          className="w-[85%] h-auto flex flex-col items-baseline justify-center gap-20"
        >
          <h2 className="font-Limelight text-5xl font-extrabold w-200">
            Start Your Learning Journey Today!
          </h2>
          <p className="font-PoiretOne text-2xl self-end">
            "Empower your future with a classroom designed for flexibility,
            engagement, and growth"
          </p>
          <h3 className="font-SyneMono text-4xl self-center w-300 text-center ">
            Join a new kind of digital classroom where students and teachers
            connect, share, and grow. Fill out our quick form to get started and
            become part of an innovative learning experience.
          </h3>
        </section>
        <section
          id="Features"
          className="features w-[85%] h-150 grid grid-cols-3 grid-rows-2 gap-[2rem]"
        >
          <div className="items"></div>
          <div className="items col-span-2"></div>
          <div className="items col-span-2"></div>
          <div className="items"></div>
        </section>
      </main>
    </>
  );
};

export default App;
