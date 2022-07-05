import { createContext } from "react";

const GlobalContext = createContext({
  searchStringState: "",
  update: (data: any) => {}
});

export default GlobalContext;
