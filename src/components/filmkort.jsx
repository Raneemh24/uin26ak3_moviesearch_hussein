import { Link } from "react-router-dom"

export default function FilmKort({ film }){
  return (
    <article>
      <Link to={"/" + film.Title} state={{ film }}>
        <figure>
        <img src={film.Poster} alt={film.Title} />
        </figure>
        <header>
          <h2>{film.Title}</h2>
            <time>{film.Year}</time>
        </header>
      </Link>
    </article>
  )
}
