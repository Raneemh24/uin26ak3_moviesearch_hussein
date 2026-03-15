import { useState, useEffect } from "react"
import { hentBondFilmer, sokFilmer } from "../api/filmapi"
import FilmKort from "./filmkort"

export default function Forside() {

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px"
  }

  const inputStyle = {
    padding: "8px",
    width: "300px",
    fontSize: "16px"
  }

  const [filmer, setFilmer] = useState([])
  const [soketekst, setSoketekst] = useState("")

  useEffect(() => {
      hentBondFilmer().then(data => setFilmer(data))
  }, [])

  async function handleSok(e){
    setSoketekst(e.target.value)
    if(e.target.value.length >= 3){
      setFilmer(await sokFilmer(e.target.value))
    } else if (e.target.value === "") {
      setFilmer(await hentBondFilmer())
    }
  }

  return (
    <main>
      <header style={headerStyle}>
        <h1>Film Søk</h1>
        <input
        type="text"
        placeholder="Søk etter film"
        value={soketekst}
        onChange={handleSok}
        style={inputStyle}
        />
      </header>
      <section>
        {filmer.map(film => <FilmKort key={film.imdbID} film={film} />)}
      </section>
    </main>
  )
}
