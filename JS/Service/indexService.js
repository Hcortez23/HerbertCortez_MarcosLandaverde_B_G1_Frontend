const API_URL = "http://localhost:8080/api/Peliculas";

export async function getPeliculas(){
    const res = await fetch(`${API_URL}/getAllProducts`);
    return res.json();
}

export async function createPeliculas(data) { 
    await fetch(`${API_URL}/newProduct`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function updatePeliculas(id, data) {
    await fetch(`${API_URL}/updateProduct/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deletePeliculas(id){
    await fetch(`${API_URL}/deleteProduct/${id}`, {
        method: "DELETE"
    });
}

