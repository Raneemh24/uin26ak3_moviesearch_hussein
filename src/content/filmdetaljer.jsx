import { useLocation, useParams, Link } from "react-router-dom"

export default function FilmDetaljer() {
  const { movie } = useParams()
  const lokasjon = useLocation()
  const filmData = lokasjon.state.film

  return (
    <main>
    <nav style={{marginBottom: "13px"}}>
        <Link to="/">Tilbake</Link>
      </nav>

      <article>
        <figure>
          <img src={filmData.Poster} style={{width: "238px"}} />
        </figure>

        <section>
          <h1>{filmData.Title}</h1>
            <p>{filmData.Year}</p>
          <p>{filmData.Plot}</p>
        </section>
      </article>
    </main>
  )
}
