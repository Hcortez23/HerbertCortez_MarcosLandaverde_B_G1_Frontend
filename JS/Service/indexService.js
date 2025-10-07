const API_URL = "http://localhost:8080/api/Peliculas";

export async function getPeliculas(){
    const res = await fetch(`${API_URL}/getPeliculas`);
    return res.json();
}

export async function createPeliculas(data) { 
    await fetch(`${API_URL}/newPelicula`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function updatePeliculas(id, data) {
    await fetch(`${API_URL}/updatePelicula/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deletePeliculas(id){
    await fetch(`${API_URL}/deletePelicula/${id}`, {
        method: "DELETE"
    });
}

