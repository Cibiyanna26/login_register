import { ThemeProvider } from "@/components/theme-provider"
import Header from "./web_components/Header";
import { Outlet } from 'react-router-dom/dist';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <Outlet/>
    </ThemeProvider>
  ) 
}

export default App
