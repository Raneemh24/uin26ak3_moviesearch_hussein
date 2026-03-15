import { useLocation, useParams, Link } from "react-router-dom"

export default function FilmDetaljer() {
  const { movie } = useParams()
  const lokasjon = useLocation()
  const filmData = lokasjon.state.film

  return (
    <main>
    <nav>
        <Link to="/">Tilbake</Link>
      </nav>

      <article>
        <figure>
          <img src={filmData.Poster} />
        </figure>

        <section>
          <h1>spanTITTEL: <br /> {filmData.Title}</h1>
            <p>ÅR: <br /> {filmData.Year}</p>
          <p>Besrkivelse: <br /> {filmData.Plot}</p>
        </section>
      </article>
    </main>
  )
}
