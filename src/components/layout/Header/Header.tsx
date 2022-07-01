import { SearchBar } from "../../SearchBar/SearchBar";

export const Header = () => {
  return (
    <header className="flex flex-1 flex-col bg-gradient-to-r from-indigo-600 to-blue-400 h-[250px] max-h-[250px] items-center">
      <div className="w-2/3">
        <div className="flex flex-row justify-between py-11">
          <span className="text-white text-2xl font-lexend">Codelândia</span>
          <span className="text-white text-2xl font-lexend">blog</span>
        </div>
        <div className="flex w-full py-8">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
