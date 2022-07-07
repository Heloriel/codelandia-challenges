import { createContext } from "react";

export interface IGlobalContext {
  pageOffset?: number;
  updateContext: Function;
}

export const GlobalContext = createContext<IGlobalContext>({
  pageOffset: 0,
  updateContext: () => {}
});
