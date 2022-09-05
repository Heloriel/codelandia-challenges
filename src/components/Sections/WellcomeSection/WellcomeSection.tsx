export default function WellcomeSection() {
  return (
    <section className="grid grid-flow-col md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 w-full min-h-[648px] bg-main-purple pt-14 md:pt-0">
      <div className="h-full flex flex-1 flex-col justify-center md:p-28 p-5">
        <span className="font-merriweather text-4xl leading-snug mb-[18px] text-zinc-900">Lorem ipsum dolor sit amet</span>
        <span className="font-lato text-lg mb-11 text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</span>
        <a href="#" className="flex bg-indigo-500 text-white font-lato font-bold rounded h-12 w-40 items-center justify-center drop-shadow-md text-lg hover:bg-indigo-700 transition-colors">
          Botão
        </a>
      </div>
      <div className="flex flex-1 h-full justify-center items-center p-8">
        <img src="/assets/images/presente.png" />
      </div>
    </section>
  );
}
