import "./base.css";
import ButtonTheme from "../Components/Layout/ButtonTheme";
import { useThemeLayout } from "../Hooks/Layout";
import Typewriter from "../Components/Typewriter";

const App = () => {
  const [switchTheme] = useThemeLayout();

  return (
    <>
      <header className="w-[97.5%] h-150 bg-[var(--Secondary-Color))] m-[1.25%] rounded-2xl">
        <section className="w-[100%] h-10 p-10 border-b-1 flex items-center justify-between">
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
            </ul>
          </nav>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] h-120">
          <div className="w-[50%] text-center">
            <h2 className="font-Limelight text-7xl text-[var(--Primary-Color)]">
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
              <button className="btn-text">Sign In</button>
            </div>
            <div>
              <h3>Don´t?</h3>
              <button className="btn-text">Create Account</button>
            </div>
          </section>
        </section>
      </header>
      <ButtonTheme toggle={switchTheme} />
      <main className="flex flex-col justify-center items-center h-300 w-[97.5%] m-[1.25%]">
        <section
          id="Home"
          className="w-[85%] h-50 flex flex-col items-baseline justify-center gap-20"
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
        <section id="Features"></section>
      </main>
    </>
  );
};

export default App;
