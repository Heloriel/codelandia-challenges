import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
