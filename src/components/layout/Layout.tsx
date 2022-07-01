import { Header } from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <main className="flex flex-col h-screen min-h-screen">
      <Header />
      <div className="bg-zinc-100 flex justify-center flex-1">{props.children}</div>
    </main>
  );
};
