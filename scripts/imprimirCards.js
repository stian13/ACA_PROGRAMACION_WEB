const sectionInformacionMotos = document.querySelector('#informacion-motos-section');
function imprimirInformacionMoto(arrayInfoMoto){
    // contenedor principal
    const containerInfo = document.createElement('div');
    containerInfo.classList.add('conteniner-informacion-motos');

    // 2. Primer div (Botón cerrar e imagen)
    const divTop = document.createElement('div');

    const spanSalir = document.createElement('span');
    spanSalir.classList.add('salir');
    spanSalir.textContent = '✖️';
    spanSalir.addEventListener('click', () => {
        containerInfo.remove(); // Esta línea cierra/elimina la tarjeta de información
        sectionInformacionMotos.classList.remove('section-informacion-motos');
    });
    const img = document.createElement('img');
    img.src = arrayInfoMoto.imagen;
    img.alt = arrayInfoMoto.nombre;
    img.classList.add('cards-moto-img');

    divTop.appendChild(spanSalir);
    divTop.appendChild(img);

    // 3. Segundo div (Título, texto y la lista)
    const divBottom = document.createElement('div');

    const titulo = document.createElement('h3');
    titulo.classList.add('cards-moto-nombre');
    titulo.textContent = arrayInfoMoto.nombre;

    const parrafo = document.createElement('p');
    parrafo.classList.add('cards-moto-descripcion');
    parrafo.textContent = arrayInfoMoto.descripcion;

    const lista = document.createElement('ol');
    lista.classList.add('lista-caracteristicas');

    divBottom.appendChild(titulo);
    divBottom.appendChild(parrafo);
    divBottom.appendChild(lista);

    // 4. Ensamblar todo y agregarlo a tu HTML
    containerInfo.appendChild(divTop);
    containerInfo.appendChild(divBottom);


    
    
    for (let i = 0; i < arrayInfoMoto.listaCaracteristicas.length; i++) {
        const caracteristica = document.createElement('li');
        caracteristica.textContent = arrayInfoMoto.listaCaracteristicas[i];
        lista.appendChild(caracteristica);
    }
    sectionInformacionMotos.appendChild(containerInfo);

}

function imprimirCards(arrayMotos) {
    motosRanked.forEach(arrayMotos => {
    // Creamos el contenedor de la tarjeta
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards-moto-unica');

    // Creamos y configuramos la imagen usando moto.imagen
    const img = document.createElement('img');
    img.src = arrayMotos.imagen; 
    img.alt = arrayMotos.nombre; 
    img.classList.add('img-cards-moto');

    // Creamos y configuramos el título usando moto.nombre
    const title = document.createElement('h3');
    title.classList.add('cards-moto-nombre');
    title.textContent = arrayMotos.nombre; 

    // Ensamblamos la tarjeta
    cardDiv.appendChild(img);
    cardDiv.appendChild(title);

    // Agregamos la tarjeta terminada directamente al contenedor principal
    contenedor.appendChild(cardDiv);

    cardDiv.addEventListener('click', () => {
        console.log(arrayMotos);
        imprimirInformacionMoto(arrayMotos);
        sectionInformacionMotos.classList.add('section-informacion-motos');
    })
});
}   
