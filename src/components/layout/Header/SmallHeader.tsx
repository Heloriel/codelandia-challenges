import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export const SmallHeader = () => {
  return (
    <header className="flex flex-1 flex-row px-4 bg-gradient-to-r from-indigo-600 to-blue-400 h-full min-h-[50px] max-h-[50px] items-center">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-1">
          <Link to={"/"} className="flex text-white items-center">
            <CaretLeft size={32} />
          </Link>
        </div>
        <Link
          to={"/"}
          className="flex flex-1 items-center justify-end px-2 text-white text-2xl font-lexend"
        >
          Codelândia
        </Link>
      </div>
    </header>
  );
};
