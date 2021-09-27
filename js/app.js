//Variables
const resultado = document.getElementById('resultado');
const year = document.getElementById('year');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const precio = document.getElementById('precio');
const color = document.getElementById('color');
const min = document.getElementById('minimo');
const max = document.getElementById('maximo');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;
//Variable para guardar elecciones de Usuario
let datosBusqueda = {
  marca: '',
  year: '',
  puertas: '',
  transmisión: '',
  color: '',
  min: '',
  max: '',
};
//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarCarros(); //Muestra Carros al cargar
  mostrarAños(); //Muestra años en Menú desplegable
});
//Evento para Registrar datos de Usuario
marca.addEventListener('input', (e) => {
  datosBusqueda.marca = e.target.value;

  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

year.addEventListener('input', (e) => {
  datosBusqueda.year = Number(e.target.value);
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

min.addEventListener('input', (e) => {
  datosBusqueda.min = Number(e.target.value);
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

max.addEventListener('input', (e) => {
  datosBusqueda.max = Number(e.target.value);
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

puertas.addEventListener('input', (e) => {
  datosBusqueda.puertas = Number(e.target.value);
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

transmision.addEventListener('input', (e) => {
  datosBusqueda.transmision = e.target.value;
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});

color.addEventListener('input', (e) => {
  datosBusqueda.color = e.target.value;
  // Mandar llamar la función de filtrar Autos
  filtrarAuto();
});
//Funciones
function mostrarCarros(autosEleguidos = autos) {
  limpiarHTML();
  autosEleguidos.forEach((auto) => {
    const divContenedor = document.createElement('DIV');
    const autoHTML = document.createElement('P');
    autoHTML.classList.add('p');
    const imagen = document.createElement('IMG');
    const { marca, year, modelo, transmision, precio, color, puertas } = auto;
    autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS - Transmisión: ${transmision}, Precio: ${precio} - Color: ${color}
        `;
    divContenedor.append(autoHTML);
    imagen.classList.add('enfasis');
    divContenedor.classList.add('mostrar');
    if (modelo === 'Serie 3' && year === 2020) {
      imagen.setAttribute(
        'src',
        'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/55788/f70a855d-2019-bmw-3-series-m-performance-parts-15.jpg?crop=1xw:1.0xh;center,top&resize=980:*'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'A4' && year === 2020) {
      imagen.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/61FzuMXh+zL._UY560_.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Mustang' && year === 2015) {
      imagen.setAttribute(
        'src',
        'https://www.elcarrocolombiano.com/wp-content/uploads/2021/08/20212008-FORD-MUSTANG-ICE-WHITE-EDITION-PORTADA.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'A6' && year === 2020) {
      imagen.setAttribute(
        'src',
        'https://scontent.fccs2-1.fna.fbcdn.net/v/t1.6435-9/p180x540/53786646_2241113072616769_3385324679047675904_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=nplSPnbXzaAAX9iSJD8&_nc_ht=scontent.fccs2-1.fna&oh=1c27f7e7a1ee4b4870c3343298c700be&oe=61747208'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Mustang' && year === 2015) {
      imagen.setAttribute(
        'src',
        'https://img.autocosmos.com/noticias/fotosprinc/NAZ_cc54bb71c1364d31bbb19c7fb334c72f.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Serie 5' && year === 2016) {
      imagen.setAttribute(
        'src',
        'https://cdn.bmwblog.com/wp-content/uploads/2020/05/BMW-530e-xDrive-Individual-G30-LCI-1.png'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Clase C' && year === 2015) {
      imagen.setAttribute(
        'src',
        'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/09/460429-mercedes-clase-c-coupe-frankfurt-2015.jpg?itok=4Pr6oliW'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Camaro' && year === 2018 && color === 'Rojo') {
      imagen.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/71P9jkHrsQL._UY560_.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Mustang' && year === 2019) {
      imagen.setAttribute(
        'src',
        'https://www.wallpaperbetter.com/wallpaper/466/550/487/gourgeous-red-ford-mustang-2K-wallpaper-middle-size.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Challenger' && precio === 40000) {
      imagen.setAttribute(
        'src',
        'https://images.automatrix.com/1/99073/Kz7xgoKBkrz.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Clase C' && precio === 45000) {
      imagen.setAttribute(
        'src',
        'https://cars.usnews.com/pics/size/776x517/images/Auto/izmo/i33960658/2018_mercedes_benz_c_class_angularfront.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'A3' && year === 2017) {
      imagen.setAttribute(
        'src',
        'https://www.quattrodaily.com/wp-content/uploads/2020/05/2020-Audi-A3-Mythos-Black-1.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Challenger' && color === 'Rojo') {
      imagen.setAttribute(
        'src',
        'https://media.ed.edmunds-media.com/dodge/challenger/2020/oem/2020_dodge_challenger_coupe_rt-scat-pack-widebody_fq_oem_1_815.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Serie 5' && year === 2019) {
      imagen.setAttribute(
        'src',
        'https://di-uploads-pod4.dealerinspire.com/perillobmw/uploads/2019/01/2019-BMW-5-Series-Hero.png'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Mustang' && year === 2017) {
      imagen.setAttribute(
        'src',
        'https://i.pinimg.com/564x/6d/61/a0/6d61a02db87f4b162210e6031c04a66f.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Challenger' && year === 2015) {
      imagen.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/71OfeMi8k7L._UY560_.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if ((modelo === 'Serie 3', year === 2018)) {
      imagen.setAttribute(
        'src',
        'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/56879/bmw-serie-3-m-performance-parts.jpg?resize=980:*'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Serie 5' && year === 2017) {
      imagen.setAttribute(
        'src',
        'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/56664/bmw-m340i-xdrive-2019.jpg?resize=980:*'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'Clase C' && year === 2021) {
      imagen.setAttribute(
        'src',
        'https://blogmedia.dealerfire.com/wp-content/uploads/sites/634/2018/05/Color-Options-for-the-2018-Mercedes-Benz-C-Class-b2_o.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    } else if (modelo === 'A4' && year === 2016) {
      imagen.setAttribute(
        'src',
        'https://images.caricos.com/a/audi/2016_audi_a4/images/1280x960/2016_audi_a4_39_1280x960.jpg'
      );
      imagen.classList.add('imagen');
      divContenedor.append(imagen);
    }
    resultado.append(divContenedor);
  });
  //Mostrar Imagenes
  const imagenes = document.querySelectorAll('img');
  const arregloImagenes = Array.from(imagenes);
  const divs = document.querySelectorAll('.mostrar');
  const imageDivs = Array.from(divs);
  let incremento = 0;
  let incremento2 = 0;
  for (let imagen of arregloImagenes) {
    imagen.setAttribute('id', `${incremento}`);
    incremento++;
  }
  for (let mostrados of imageDivs) {
    mostrados.setAttribute('data-id', `${incremento2}`);
    incremento2++;
    mostrados.addEventListener('click', (e) => {
      for (imagen of arregloImagenes) {
        if (e.target.classList.contains('p')) {
          if (mostrados.getAttribute('data-id') === imagen.getAttribute('id')) {
            imagen.classList.toggle('imagen');
            imagen.onclick = showPics;
          }
        }
      }
    });
  }
}
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
function mostrarAños() {
  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement('OPTION');
    opcion.value = i;
    opcion.textContent = i;
    year.append(opcion);
  }
}
//Filtrar en Base Busqueda
function filtrarAuto() {
  const filtrado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMin)
    .filter(filtrarMax)
    .filter(filtrarPuertas)
    .filter(filtraColor)
    .filter(filtrarTransmision);
  if (filtrado.length) {
    mostrarCarros(filtrado);
  } else {
    sinResultados();
  }
}
function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}
function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}
function filtrarMin(auto) {
  if (datosBusqueda.min) {
    return auto.precio >= datosBusqueda.min;
  }
  return auto;
}
function filtrarMax(auto) {
  if (datosBusqueda.max) {
    return auto.precio <= datosBusqueda.max;
  }
  return auto;
}
function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === datosBusqueda.puertas;
  }
  return auto;
}
function filtraColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
}
function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
}
function sinResultados() {
  limpiarHTML();
  const noResultado = document.createElement('DIV');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent =
    'No hay autos que reunan todas esas Características, intenta otras opciones';
  resultado.append(noResultado);
}
//Mostrar Imagen de Carro Agrandada
function showPics(e) {
  //Generate IMG
  const img = document.createElement('IMG');
  img.src = e.target.src;
  console.log(img);
  const overlay = document.createElement('DIV');
  overlay.appendChild(img);
  overlay.classList.add('overlay');
  //Button
  const close = document.createElement('P');
  close.textContent = 'X';
  close.classList.add('close-button');
  overlay.appendChild(close);
  //close when it is push
  close.onclick = function () {
    overlay.remove();
  };
  overlay.onclick = function () {
    overlay.remove();
  };
  //Add to HTMl
  const body = document.querySelector('body');
  body.appendChild(overlay);
}
