import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <span className="text-gray-500 text-3xl italic mb-8">Ops... nada por aqui!</span>
      <Link
        to={"/"}
        className="bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2 text-white font-bold rounded"
      >
        Página Inicial
      </Link>
    </div>
  );
};
