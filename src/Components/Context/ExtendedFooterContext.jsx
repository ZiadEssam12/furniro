import { createContext, useState } from "react";

export const ExtendedFooterContext = createContext();

export default function ExtendedFooterProvider({ children }) {
  const [ExtendedFooter, setExtendedFooter] = useState(true);
  return (
    <ExtendedFooterContext.Provider
      value={{ ExtendedFooter, setExtendedFooter }}
    >
      {children}
    </ExtendedFooterContext.Provider>
  );
}
