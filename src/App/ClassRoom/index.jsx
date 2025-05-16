const ClassRoom = () => {
  return (
    <section className="p-4 grid grid-cols-4 gap-5 justify-center items-center">
      <header className="[grid-area:1/2/2/5] text-center text-2xl bg-[var(--Secondary-Color)] py-4 px-2 rounded-lg">
        <h2>Electromagnetismo</h2>
      </header>
      <section className="[grid-area:1/1/3/2] h-full w-full rounded-md bg-[var(--Secondary-Color)] text-xl">
        <h3 className="py-2 border-b justify-self-center mb-2">Navegacion de cursos</h3>
        <ul className="pl-4">
          <li>
            <details className="marker:[content:'\📚'] cursor-pointer my-4">
              <p>Descripcion para la clase 1</p>
              <summary>Clase 1</summary>
            </details>
          </li>
          <li>
            <details className="marker:[content:'\📚'] cursor-pointer my-4">
              <p>Descripcion para la clase 2</p>
              <summary>Clase 2</summary>
            </details>
          </li>
          <li>
            <details className="marker:[content:'\📚'] cursor-pointer my-4">
              <p>Descripcion para la clase 3</p>
              <summary>Clase 3</summary>
            </details>
          </li>
          <li>
            <details className="marker:[content:'\📚'] cursor-pointer my-4">
              <p>Descripcion para la clase 4</p>
              <summary>Clase 4</summary>
            </details>
          </li>
          <li>
            <details className="marker:[content:'\📚'] cursor-pointer my-4">
              <p>Descripcion para la clase 5</p>
              <summary>Clase 5</summary>
            </details>
          </li>
        </ul>
      </section>    
      <article className="[grid-area:2/2/3/5] p-4 grid grid-cols-4 gap-x-5 gap-y-2 grid-rows-2 items-center size-full justify-items-center">
        {Array.from(new Array(5)).map((_, i) => (
          <section
            key={`BentoClassRoom-${i}`}
            className={
              i === 0 || i === 2
                ? "bg-amber-800 [grid-column:1/4] w-full lg:h-[200px] md:h-[150px] sm:h-[100px] rounded-2xl hover:scale-105 hover:bg-amber-800/70"
                : "bg-amber-500 rounded-2xl w-full lg:h-[200px] md:h-[150px] sm:h-[100px]  hover:scale-105 hover:bg-amber-500/70"
            }
          ></section>
        ))}
      </article>
    </section>
  );
};

export default ClassRoom;
