import './App.css'

import {BrowserRouter} from "react-router";
import {AppRouter} from "./router.tsx";
import {Navbar} from "./context/commons/components/navbar/Navbar.tsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </>
  )
}

export default App
