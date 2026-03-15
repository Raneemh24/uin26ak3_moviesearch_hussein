import { BrowserRouter, Routes, Route } from "react-router-dom"
import Forside from "./components/forside"
import FilmDetaljer from "./components/filmdetaljer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/:movie" element={<FilmDetaljer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
