# practica-javascript
Práctica del modulo de javascript

## Ejercicio 1
### [ejercicio1.js](https://github.com/JoseAlbDR/practica-javascript/blob/main/ejercicio1.js)
```js
const alumno = {
  nombre: "Jose Alberto",
  apellidos: "Delgado Robles",
  bootcamKnowledge: ["html", "css", "javascript", "react", "node.js"],
  busquedaActiva: false,
  socialMedia: [
    {
      name: "github",
      link: "https://github.com/JoseAlbDR",
    },
    {
      name: "linkedin",
      link: "www.linkedin.com/in/jalbertodelgado",
    },
  ],
};
```

## Ejercicio 2 Arreglar bug
### [bug.js](https://github.com/JoseAlbDR/practica-javascript/blob/main/bug.js)
```js
const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }

  const promedio = sumaTotal / numeros.length;
  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
```

## Ejercicio 3 Transformaciones
### [transform.js](https://github.com/JoseAlbDR/practica-javascript/blob/main/transform.js)
```js
const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["JavaScript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },
      { id: 2, nombre: "Proyecto 2" },
    ],
  },
  {
    id: 2,
    nombre: "Maria",
    habilidades: ["Python", "SQL", "Django"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },
      { id: 4, nombre: "Proyecto 4" },
    ],
  },
  {
    id: 3,
    nombre: "Pedro",
    habilidades: ["Java", "Spring", "Hibernate"],
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },
      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

const developerByTech = (tech) => {
  return () =>
    JSON.stringify(
      datos.filter((developer) => developer.habilidades.includes(tech))
    );
};

// Create a function to show all devs that works with JavaScript
const desarrolladoresJavascript = developerByTech("JavaScript");
console.log(desarrolladoresJavascript());

// flatMap to remove one anidation level in array
const showAllProyects = (developers) => {
  return developers.flatMap((developer) =>
    developer.proyectos.map((proyecto) => proyecto.nombre)
  );
};

const nombresProyectos = showAllProyects(datos);
console.log(nombresProyectos);
```
