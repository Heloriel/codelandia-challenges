import { AiFillStar, AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';
import { Button } from './components/Button';

function App() {
  return (
    <main>
      <div className="bg-filter">
        <div className="wrapper">
          <div>
            <h3 className="font-bold mb-9">ESTÁ DISPONÍVEL AGORA!</h3>
            <h1 className="text-8xl font-bold">LOKI</h1>
          </div>
          <div className="lower">
            <div className="w-[350px] h-[267px]">
              <img src="/assets/capa.png" alt="" className="rounded-xl object-cover h-full" />
            </div>
            <div className="flex flex-col w-2/3">
                <div>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </div>
                <div className="flex w-full justify-between my-8">
                  <span className="flex gap-x-2 items-center text-2xl font-bold"><AiOutlineClockCircle /> 51min</span>
                  <div className="flex">
                    <AiFillStar size={32} fill='#FFA800' />
                    <AiFillStar size={32} fill='#FFA800' />
                    <AiFillStar size={32} fill='#FFA800' />
                    <AiFillStar size={32} fill='#FFA800' />
                    <AiOutlineStar size={32} />
                  </div>
                  <span className="text-2xl font-bold">2021</span>
                </div>
                <div>
                  <Button className='mr-8'>Assistir Agora</Button>
                  <Button alternate>Trailer</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
