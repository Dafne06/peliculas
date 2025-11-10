# PELICULAS

Aplicación móvil progresiva (PWA) desarrollada con **Ionic** y **Angular**, que permite consultar, buscar y visualizar información sobre películas.  
El proyecto está diseñado para funcionar tanto como aplicación web (instalable en el navegador) como app móvil.

---

Descripción general

PelículasApp creada  para ver la cartelera y peliculas recientes tomadas de una base de datos (TMBD).  
Incluye funciones como:
- Visualización de películas con sus detalles (título, año, sinopsis, imagen).
- Búsqueda por nombre.
- Sección destacada o recomendada.
- Soporte de peliculas favoritas filtrada por generos y busqueda de peliculas.
- Integración con **Firebase Hosting** para despliegue.

El propósito de este proyecto es demostrar el uso de tecnologías modernas en el desarrollo de aplicaciones híbridas multiplataforma.


 Tecnologías y dependencias utilizadas

| Tecnología / Librería | Descripción |
|-------------------------------------|
| **Ionic 7** | Framework para desarrollo de apps híbridas con Angular. |
| **Angular 16** | Framework de desarrollo front-end basado en TypeScript. |
| **Firebase Hosting** | Servicio utilizado para alojar la app como PWA. |
| **Node.js** | Entorno de ejecución para el desarrollo con npm. |

Instrucciones para instalación y ejecución local

1️. Clonar el repositorio
Abre una terminal y ejecuta los siguientes comandos:
git clone https://github.com/TU_USUARIO/peliculasApp.git

cd peliculasApp

2️. Instalar dependencias
Asegúrate de tener instalado Node.js y npm.
Luego, dentro del proyecto, ejecuta:
npm install

3️. Ejecutar en modo desarrollo
Para correr la aplicación en el navegador, usa:
ionic serve
Esto abrirá la aplicación en la dirección:
http://localhost:8100
