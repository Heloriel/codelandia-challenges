import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [searchString, setSearchString] = useState(searchParams.get("search"));

  return (
    <form
      action="/search/"
      method="GET"
      className="flex w-full h-16 rounded overflow-hidden bg-[rgba(255,255,255,.2)]"
    >
      <div className="flex-1">
        <input
          type="text"
          name="search"
          id="mainSearch"
          className="w-full h-full text-white opacity-100 bg-transparent flex-1 focus:outline-none pl-5"
          value={searchString ? searchString : ""}
          onChange={(event) => setSearchString(event.target.value)}
        />
      </div>
      <div className="flex p-6 items-center justify-center">
        <button type={"submit"}>
          <MagnifyingGlass size={24} className="text-white" />
        </button>
      </div>
    </form>
  );
};
