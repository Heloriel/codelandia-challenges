function App() {
  return (
    <main>
      <div className="bg-filter">
        <div className="wrapper">
          <h3 className="font-bold mb-9">ESTÁ DISPONÍVEL AGORA!</h3>
          <h1 className="text-8xl font-bold">LOKI</h1>
          <div className="lower">
            <div className="w-[350px] h-[267px]">
              <img src="/assets/capa.png" alt="" className="rounded-xl object-cover h-full" />
            </div>
            <div className="flex flex-col w-2/3">
                <div>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </div>
                <div className="flex w-full justify-between">
                  <span className="text-2xl font-bold">51</span>
                  <span>5 estrela</span>
                  <span className="text-2xl font-bold">2021</span>
                </div>
                <div>
                  <button>Assistir Agora</button>
                  <button>Trailer</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
