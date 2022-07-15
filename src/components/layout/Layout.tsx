import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center flex-1">{props.children}</div>
      <Footer />
    </main>
  );
};
