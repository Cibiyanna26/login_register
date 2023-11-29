import { Login } from "./web_components/Login";
import { ThemeProvider } from "@/components/theme-provider"
import { Register } from "./web_components/Register";
import Home from "./web_components/Home";
import Header from "./web_components/Header";
import { Outlet } from 'react-router-dom/dist';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <Outlet/>
    </ThemeProvider>
    
  ) 
}

export default App
