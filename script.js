function createPost(name, message, imageURL, index) {
    return `
        <div class="publicacion">
            <img src="${imageURL}" alt="${name}">
            <h2>${name}</h2>
            <p>Esta es mi publicación número ${index}. Esto es una prueba de generación de relleno por medio de funciones de ciclos.</p>
        </div>
    `;
}

// contenedor de publicaciones
const publicacionesContainer = document.getElementById('publicaciones-container');

// Generardor de las 826 publicaciones
for (let i = 1; i <= 826; i++) {
    const name = `Personaje ${i}`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;

    // creacion de publicación
    const postHTML = createPost(name, '', imageURL, i);
    publicacionesContainer.innerHTML += postHTML;
}