import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = () => {
  return (
    <div className="flex w-full h-16 rounded overflow-hidden bg-[rgba(255,255,255,.2)]">
      <div className="flex p-6 items-center justify-center">
        <MagnifyingGlass size={24} className="text-white" />
      </div>
      <div className="flex-1">
        <input
          type="text"
          name="search"
          id="mainSearch"
          className="w-full h-full text-white opacity-100 bg-transparent flex-1 focus:outline-none pr-5"
        />
      </div>
    </div>
  );
};
