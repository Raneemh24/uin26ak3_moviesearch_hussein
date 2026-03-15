import { Link } from "react-router-dom"

export default function FilmKort({ film }){

  const kortStyle = {
    background: "white",
    width: "195px",
    border: "1px solid #ccc",
    padding: "12px",
    margin: "0 auto 8px"
  }

  return (
    <article style={kortStyle}>
      <Link to={"/" + film.Title} state={{ film }}>
        <figure>
        <img src={film.Poster} alt={film.Title} style={{width: "100%"}} />
        </figure>
        <header>
          <h2 style={{fontSize: "13px", margin: "6px 0"}}>{film.Title}</h2>
            <time style={{color: "gray", fontSize: "12px"}}>{film.Year}</time>
        </header>
      </Link>
    </article>
  )
}
