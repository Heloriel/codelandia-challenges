export default function ContactSection() {
  return (
    <section className="flex flex-col px-4 py-16 md:p-20 w-full justify-center items-center bg-main-purple">
      <div className="mb-16">
        <span className="font-merriweather text-3xl text-zinc-900">Entre em contato</span>
      </div>
      <form className="flex flex-col md:w-[470px] w-full">
        <div className="mb-4">
          <input type="text" name="" id="" className="w-full rounded-[6px] py-5 px-4 placeholder:font-lato placeholder:text-lg" placeholder="Nome" />
        </div>
        <div className="mb-4">
          <input type="text" name="" id="" className="w-full rounded-[6px] py-5 px-4 placeholder:font-lato placeholder:text-lg" placeholder="E-Mail" />
        </div>
        <div className="mb-4">
          <input type="text" name="" id="" className="w-full rounded-[6px] py-5 px-4 placeholder:font-lato placeholder:text-lg" placeholder="Telefone" />
        </div>
        <div className="mb-8">
          <textarea name="" id="" rows={6} placeholder="Mensagem..." className="w-full rounded-[6px] py-5 px-4 placeholder:font-lato placeholder:text-lg resize-none"></textarea>
        </div>
        <div>
          <a href="#" className="flex bg-indigo-500 text-white font-lato font-bold rounded h-12 items-center justify-center drop-shadow-md text-lg hover:bg-indigo-700 transition-colors">
            Enviar mensagem
          </a>
        </div>
      </form>
    </section>
  );
}
