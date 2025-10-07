import  { 
    getPeliculas,
    createPelicula,
    deletePeliculas
} from  "../Service/indexService";

document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.querySelector("#table tbody"); 
    const form = document.getElementById("form-control"); 
    const btnAgregar = document.getElementById("btnAgregar"); 

    init(); 

    
   

    form.addEventListener(btnAgregar, async (e)=>{
        e.preventDefault(); 
        const data = {
            Titulo: form.title.value.trim(),
            Director: form.director.value.trim(),
            Genero: form.genero.value.trim(),
            Ano_Estreno: form.AnoEstreno.value.trim(),
            Duracion_Min: form.duracionMin.value.trim(),
            Fecha_Creacion: form.fecha.value.trim()     
        };

        try{
            await createPelicula(data);
            await getPeliculas(); 
        } catch (err) {
            console.error("Error: ", err);
        }
    });

    async function loadPeliculas() {
        try {
            const peliculas = await getPeliculas();
            tableBody.innerHTML = "";

            if(!peliculas || peliculas.length == 0) {
                tableBody.innerHTML = ' <td colspan="5">Actualmente no hay registros</td>';
                return; 
            }

            peliculas.forEach((pelis)=>{
                const tr = document.createElement("tr"); 
                tr.innerHTML = `
                    <td>${pelis.id_Pelicula}</td>
                    <td>${pelis.Titulo}</td>
                    <td>${pelis.Director}</td>
                    <td>${pelis.Genero}</td>
                    <td>${pelis.Ano_Estreno}</td>
                    <td>${pelis.Duracion_Min}</td>
                    <td>${pelis.Fecha_Creacion}</td>
                    <td><button type="button" class="btnAcciones btn btn-primary">Actualizar</button><button type="button" class="btnAcciones btn btn-danger">Eliminar</button</td>
                    
                `;

            
               

               
                tr.querySelector(".btn-danger").addEventListener("click", ()=>{
                    if(confirm("¿Desea eliminar esta pelicula?")) {
                        deletePeliculas(pelis.id_Pelicula).then(loadPeliculas);
                    }
                });

                tableBody.appendChild(tr); 
            });
        } catch (err) {
            console.error("Error cargando peliculas : ", err);
        }
    }

    function init() {
        loadPeliculas();
    }
});