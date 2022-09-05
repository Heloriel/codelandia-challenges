import ReactTypingEffect from "react-typing-effect";

export const Slider = () => {
  return (
    <section className="flex w-full h-[500px]">
      <div className="w-full max-h-full bg-no-repeat bg-fixed bg-cover bg-center bg-[url(/assets/images/sliderbg.jpg)]">
        <div className="bg-black/50 flex flex-1 flex-col h-full">
          <div className="flex flex-col flex-1 w-full md:max-w-[50%] h-full justify-center p-6 lg:p-24">
            <div className="mb-4">
              <span className="font-bold font-montserrat text-2xl md:text-3xl text-white">A melhor loja de Jordan</span>
            </div>
            <div className="font-montserrat text-base md:text-lg text-white leading-loose flex w-full">
              <ReactTypingEffect cursor=" " speed={30} typingDelay={0} eraseSpeed={10} eraseDelay={99999} text={"O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
