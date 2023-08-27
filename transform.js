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

// Pass the tech return a function to get all developers that work with that tech
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
