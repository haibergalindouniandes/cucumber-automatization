# Pruebas automatizadas con Cucumber - Aplicación losestudiantes.com
Este proyecto permite realizar pruebas automatizadas de extremo a extremo de la aplicación web **losestudiantes.com**, haciendo uso del API de Automatización [Cucumber](https://cucumber.io/). A continuación, se explica el detalle: 

## Escenarios de prueba 
El proyecto cuenta con una suite de pruebas principal que tiene como objetivo validar los casos de pruebas que se detallan a continuación:

| Identificador | Escenario | Descripción |
| ----- | ----------- | ----------- |
| PA_01 |  Login fallido  |  Caso de prueba que realiza el login con credenciales erróneas .  |
| PA_02   |  Login exitoso  |  Caso de prueba que realiza el login con credenciales correcta .  |
| PA_03    |  Registro de usuario fallido|   Escenario que realiza el registro de un usuario con información aleatoria e incompleta.    |
| PA_04 |  Registro de usuario exitoso|   Escenario que realiza el registro de un usuario con información aleatoria y que cumple con los tipos de entrada del formulario de registro.    |

## Instalación y configuración
Para utilizar hacer uso del test de pruebas de la aplicación Ghost, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Usando [Node Package Manager](https://www.npmjs.com/), run `npm install` en la carpeta raíz; esto instalara los módulos de [Cucumber](https://cucumber.io/), [Webdriverio](https://webdriver.io/) y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de [faker](https://www.npmjs.com/package/faker). En caso de quiera realizar la instalación independiente de dependencias lo puede realizar ejecutando en la carpeta raíz del proyecto los siguientes comandos:  `npm install cucumber`, `npm install webdriverio` y   `npm install faker`
- Configure las propiedades de la aplicación: La carpeta raíz del repositorio contiene el archivo `wdio.conf.js`, el cual brinda los siguientes parámetros que se pueden modificar: 
<br>* `baseUrl:` Url de la aplicación a probar. Ej: `https://losestudiantes.com/`.


## Ejecución
- Una vez realizada la configuración del archivo `properties.config.js` para lanzar la ejecucón de las pruebas, a través de la terminal ejecute el siguiente comando: `npm test`. 

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta de `./results/screenshots` con los screenshots tomados durante la ejecución de la prueba.