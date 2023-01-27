import { AiFillStar, AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { Button } from "./components/Button";

function App() {
  return (
    <main>
      <div className="bg-filter">
        <div className="wrapper pt-16">
          <div>
            <h3 className="font-bold mb-9">ESTÁ DISPONÍVEL AGORA!</h3>
            <h1 className="text-8xl font-bold">LOKI</h1>
          </div>
          <div className="flex w-full px-4 md:px-12">
            <div className="w-[350px] h-[267px] hidden md:block">
              <img src="/assets/capa.png" alt="" className="rounded-xl object-cover h-full" />
            </div>
            <div className="flex flex-col w-full">
              <div className="hidden md:block">Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </div>
              <div className="flex flex-col gap-y-4 md:flex-row w-full justify-between my-8">
                <span className="flex gap-x-2 items-center text-2xl font-bold">
                  <AiOutlineClockCircle /> 51min
                </span>
                <div className="flex">
                  <AiFillStar size={32} fill="#FFA800" />
                  <AiFillStar size={32} fill="#FFA800" />
                  <AiFillStar size={32} fill="#FFA800" />
                  <AiFillStar size={32} fill="#FFA800" />
                  <AiOutlineStar size={32} />
                </div>
                <span className="text-2xl font-bold">2021</span>
              </div>
              <div className="hidden md:flex w-full gap-x-4">
                <Button className="py-4 px-7">Assistir Agora</Button>
                <Button className="py-4 px-7" alternate>Trailer</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full h-2/5 bg-zinc-900 rounded-t-3xl px-8">
          <div className="flex w-full gap-x-4 border-b border-neutral-700 py-8">
                <Button className="flex-1 px-0 py-2 text-sm">Assistir Agora</Button>
                <Button className="flex-1 px-0 py-2 text-sm" alternate>Trailer</Button>
          </div>
          <div className="my-8">Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </div>
        </div>
      </div>
    </main>
  );
}

export default App;
