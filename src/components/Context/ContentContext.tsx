import { createContext}  from "react"
import { ContentContextType } from "../Types/Types";


export const ThemeContext = createContext<ContentContextType|null>(null);

