function App() {
  return (
    <main className="flex flex-row w-full h-screen">
      <div className="hidden md:flex flex-1">
        <div className="flex w-full bg-slate-50 justify-center items-center">
          <img src="/assets/images/undraw_About_us_page_re_2jfm 1.png" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="text-start md:w-[350px]">
          <div className="mb-2">
            <span className="font-merriweather text-base">Bem vindo de volta</span>
          </div>
          <div className="mb-9">
            <span className="font-merriweather font-bold text-2xl">Faça login na sua conta</span>
          </div>
          <form action="">
            <div className="mb-3">
              <span className="font-lato">E-mail</span>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" className="border border-zinc-200 rounded-[5px] w-full h-[50px] px-5" placeholder="E-mail" />
            </div>
            <div className="mb-3">
              <span className="font-lato">Senha</span>
            </div>
            <div>
              <input type="password" name="" id="" className="border border-zinc-200 rounded-[5px] w-full h-[50px] p-5" placeholder="Senha" />
            </div>
            <div className="flex w-full mt-7 mb-7">
              <div className="flex-1">
                <input type="checkbox" id="checkbox" className="mr-3" />
                <label htmlFor="checkbox">Lembre de mim </label>
              </div>
              <div className="flex-1 text-end">
                <a href="" className="text-blue-500">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full rounded-[5px] bg-green-500 h-[50px] text-white font-lato font-bold">Entrar</button>
            </div>
            <div>
              <button className="w-full rounded-[5px] bg-gray-900 h-[50px] text-white font-lato font-bold flex items-center justify-center">
                <img src="/assets/google.svg" className="inline mr-3" />
                <span>Ou faça login com o Google</span>
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <span className="mr-1">Não tem uma conta?</span>{" "}
            <a href="" className="text-blue-500">
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
