# Laboratorio 5: Intro to React JS

## Inovación y Emprendimiento con Tecnologías de Información

#### Camilo Andrés Pichimata Cárdenas

##### Septiembre del 2022

## Desarrollo

### Creación de la aplicación React

Para la creación de una **Aplicación React** se desargó e instaló `Node.js` con su sistema de gestión de paquetes `npm` desde su página web `https://nodejs.org/en/`

![](img/NodeJS_Download.png)

Seguido a esto, desde el directorio en el cuál se desea crear el proyecto se ejecuta el siguiente comando con el fin de crear el proyecto:

```
npx create-react-app ieti-lab_5-intro_to_react
```

Esto genera la estructura del proyecto e incluso genera el repositorio git (comando `git init`) con el primer commit listo para cargar los archivos al repositorio:

![](img/npx_create-react-app.png)


### Instalación de SASS

Con el fín de poder implementar los estilos de nuestra aplicación con **SASS** debemos instalar la dependencia, para esto ejecutamos el siguiente comando:

```
npm install -g sass
```

![](img/npm_install_sass.png)

Seguido a esto, para facilitar la compilación de archivos de tipo `.scss` a archivos de tipo `.css` podemos descargar una extensión desde *Visual Studio Code* llamada Live Sass Compiler, esta genera automáticamente los archivos `.css` al guardar el archivo de tipo `.scss`:

![](img/extension-live_sass_compiler.png)


<!-- ### Base de datos para pruebas

Con el fin de verificar el correcto funcionamiento del login se crea una base de datos simulada o API de prueba (Fake REST Api) empleando el módulo de javascript **JSON Server**

Para poder usar el modulo mencionado debemos realizar su instalación, para esto se ejecuta el siguiente comando desde la consola:

```
npm install json-server
```

Seguido a esto creamos un archivo `usersdb.json` -->

### Desarrollo

Para continuar se eliminan los archivos creados por defecto en las carpetas `./src/` y `./public/` con el fin de iniciar un proyecto desde cero y se realizan las implemtnaciones necesarias

