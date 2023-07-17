function obtenerUsuario(id) {
  let usuario;

  setTimeout(() => {
    if (id === 1) {
      usuario = { id: 1, nombre: "John Doe" };
    }
  }, 2000);
}

const usuario = obtenerUsuario(1);
console.log(usuario);

function obtenerUsuarioPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "John Doe" });
      }
    }, 2000);
  });
}

const usuarioPromise = await obtenerUsuarioPromise(1);
console.log(usuarioPromise);

function obtenerUsuarioCallback(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      return callback({ id: 1, nombre: "John Doe" });
    }
  }, 2000);
}

obtenerUsuarioCallback(1, (usuario) => {
  console.log(usuario);
});
