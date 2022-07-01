import { Footer } from "../components/layout/Footer/Footer";
import { SmallHeader } from "../components/layout/Header/SmallHeader";

interface IPostPageProps {
  title: string;
  content: string;
  published: Date;
}

export const PostPage = (props: IPostPageProps) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <SmallHeader />
      <div className="flex flex-col flex-1 items-center px-8 md:p-0">
        <section className="bg-white mt-8 w-full md:w-2/3 px-8 py-4 rounded">
          <h1 className="font-bold text-4xl text-center font-lexend">
            Agora é oficial: o Windows 11 está vindo
          </h1>
          <span className="mt-8 block font-lexend font-bold text-sm text-zinc-400">22/06/2022</span>
          <div className="flex-1 font-lexend font-light mt-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor
            est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex
            iaculis.
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
