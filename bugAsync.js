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

// With a promise
function obtenerUsuarioPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "John Doe" });
      } else {
        reject("Wrong user id");
      }
    }, 2000);
  });
}

const usuarioPromise = await obtenerUsuarioPromise(1);
console.log(usuarioPromise);

// With a callback
function obtenerUsuarioCallback(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      return callback({ id: 1, nombre: "John Doe" });
    } else {
      return callback("Wrong user id");
    }
  }, 2000);
}

obtenerUsuarioCallback(1, (usuario) => {
  console.log(usuario);
});
