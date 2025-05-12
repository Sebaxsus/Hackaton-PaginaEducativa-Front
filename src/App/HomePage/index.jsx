const HomePage = () => {
  return (
    <article className="p-4 flex flex-col gap-5 justify-center items-center">
      <header className="">
        <h2>Bienvenido a tu pagina Educativa</h2>
      </header>
      <article className="p-2 grid grid-cols-3 grid-rows-2 gap-5 size-4/5 justify-items-center">
        {/* 
          Creo un array de el constructor new Array(5),
          Este array va a tener un tamaño de 5 (0-5 = 6)
        */}
        {Array.from(new Array(5)).map((_,i) => {
          if (i === 0) return (
            <section className="bg-amber-800 [grid-area:1/1/1/3] w-full lg:h-[200px] md:h-[150px] sm:h-[100px] rounded-2xl hover:scale-105 hover:bg-amber-800/70">
            </section>
          ) 
          return (
            <section className="bg-amber-500 rounded-2xl w-full hover:scale-105 hover:bg-amber-500/70">
            </section>
          )
        })}
        
      </article>

    </article>
  );
};

export default HomePage;
