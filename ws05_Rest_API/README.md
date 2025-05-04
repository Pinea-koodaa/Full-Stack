# Music REST API

Tässä projektissa rakensin yksinkertaisen REST API:n musiikkitietokantaa varten Node.js:llä, Expressillä ja Mongoose-kirjastolla. Tietokanta sisältää biisejä ja niiden tietoja, kuten nimi, artisti, albumi ja julkaisuvuosi. MongoDB:ssä säilytetään kaikki data, ja testaukset tein Postmanilla.

## Käynnistys

1. Asenna riippuvuudet komennolla  
   `npm install`
2. Käynnistä palvelin  
   `node app.js`
3. API toimii oletuksena osoitteessa:  
   `http://localhost:3000`

---

## Reitit ja toiminnot

### 1. GET `/api/getall`

**Hakee kaikki biisit tietokannasta.**  
**Vastaus:**
```json
[
  {
    "_id": "681696696b07c3ca8526ef2d",
    "title": "Timantit on ikuisia",
    "artist": "Cheek",
    "album": "Kuka muu muka",
    "year": 2013
  },
  {
    "_id": "6816990c825cec3c02de1bfc",
    "title": "Taivas lyö tulta",
    "artist": "Teräsbetoni",
    "album": "Metallitotuus",
    "year": 2005
  }
]
```

---

### 2. GET `/api/:id`

**Hakee yhden biisin ID:n perusteella.**  
**Esimerkki:**  
`GET /api/681696696b07c3ca8526ef2d`  
**Vastaus:**
```json
{
  "_id": "681696696b07c3ca8526ef2d",
  "title": "Timantit on ikuisia",
  "artist": "Cheek",
  "album": "Kuka muu muka",
  "year": 2013
}
```

---

### 3. POST `/api/add`

**Lisää uuden biisin tietokantaan.**  
**Lähetä JSON-data näin:**
```json
{
  "title": "Taivas lyö tulta",
  "artist": "Teräsbetoni",
  "album": "Metallitotuus",
  "year": 2005
}
```
**Vastaus:**
```json
{
  "_id": "6816990c825cec3c02de1bfc",
  "title": "Taivas lyö tulta",
  "artist": "Teräsbetoni",
  "album": "Metallitotuus",
  "year": 2005,
  "__v": 0
}
```

---

### 4. PUT `/api/update/:id`

**Päivittää biisin tiedot ID:n perusteella.**  
**Esimerkki:**  
`PUT /api/update/6816990c825cec3c02de1bfc`  
**Body:**
```json
{
  "year": 2006
}
```
**Vastaus:** Päivitetty dokumentti JSON-muodossa.

---

### 5. DELETE `/api/delete/:id`

**Poistaa biisin ID:n perusteella.**  
**Esimerkki:**  
`DELETE /api/delete/681696696b07c3ca8526ef2d`  
**Vastaus:**
```json
{ "message": "Deleted successfully" }
```

---

## Virheiden käsittely

API palauttaa järkevät virheilmoitukset mm. seuraavissa tapauksissa:

- Virheellinen ID → 404 Not Found
- Puutteellinen syötedata → 400 Bad Request
- Tietokantavirhe → 500 Internal Server Error

---

## Riippuvuudet

- express  
- mongoose  
- body-parser

---

## Testaus

Testasin kaikki reitit Postmanilla. Käytin sekä onnistuneita pyyntöjä että virhetilanteita varmistaakseni, että homma toimii kuten pitää.
