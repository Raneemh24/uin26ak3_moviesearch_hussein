const apiNokkel = "2a1cd064"
const url = "https://www.omdbapi.com/"

export async function sokFilmer(tekst) {
  if (tekst == null || tekst.length < 3) {
    return []
  }
  const respons = await fetch(url + "?s=" + tekst + "&apikey=" + apiNokkel)
  const data = await respons.json()
  if (data.Search) {
    return data.Search
  }
  return []
}

export async function hentBondFilmer() {
  const ider = ["tt0062622","tt0056012","tt0058150","tt0061161","tt0064519","tt0065571","tt0067713","tt0070047","tt0071807","tt0075148","tt0079746"]
  const resultat = []
  for (let i = 0; i < ider.length; i++) {
    const respons = await fetch(url + "?i=" + ider[i] + "&apikey=" + apiNokkel)
    const film = await respons.json()
    if (film.Response === "True") {
      resultat.push(film)
    }
  }
  return resultat
}