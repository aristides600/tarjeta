const alumnos = [
    {
        nombre: "Sandro",
        apellido: "Perez",
        edad: 20
    },
    {
        nombre: "Marta",
        apellido: "Cari",
        edad: 30
    },
    {
        nombre: "Juan",
        apellido: "Orellano",
        edad: 35
    },
    {
        nombre: "Jose",
        apellido: "Tuzi",
        edad: 24
    },
    {
        nombre: "Esquivel",
        apellido: "Ocampo",
        edad: 35
    },
    {
        nombre: "Esteban",
        apellido: "Larez",
        edad: 46
    },
    {
        nombre: "Pedro",
        apellido: "Verde",
        edad: 24
    },
    {
        nombre: "Julio",
        apellido: "Roca",
        edad: 50
    },

]

let nom = prompt("Ingrese su Nombre: ")
let ape = prompt("Ingrese su Apellido: ")
let ed = prompt("Ingrese su Edad: ")

const alumno = {
    nombre: nom,
    apellido: ape,
    edad: ed
}

alumnos.push(alumno)
console.log(alumnos)

const caja1 = document.getElementById("caja1")
for (const a of alumnos) {
    caja1.innerHTML += `<div class="card">
                            <div class="card-img">
                            <h3>Foto</h3>
                            </div>
                            
                            <h3>Nombre: ${a.nombre}</h3>
                            <h3>Apellido: ${a.apellido}</h3>
                            <h3>Edad: ${a.edad}</h3>
                        </div>`
}