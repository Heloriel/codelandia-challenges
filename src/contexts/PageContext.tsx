import { createContext } from "react";

interface IPageContext {
  page: number;
  setPage: Function;
}

export const PageContext = createContext({} as IPageContext);
