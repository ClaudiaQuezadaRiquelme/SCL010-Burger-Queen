# Burger Clown Queens

## Presentación

Burger Clown Queens es una aplicación diseñada para la gestión de pedidos de vuestra hamburguesería. Permite visualizar el menú, ver el total del pedido mientras se va conformando, cambiar algún elemento del pedido antes de confirmar y enviar a cocina para su preparación. Internamente ordenará los pedidos por tiempo de espera hasta antes de ser entregados, para mantener el compromiso y la experiencia de que nunca queden clientes esperando demasiado tiempo para recibir su orden.

** PRIMERA VISTA APP. INSERTE PANTALLAZO AQUI **

En una primera vista al cargar la aplicación, podemos observar un resumen de los pedidos en espera y opciones para tomar una orden nueva, ver pedidos en curso y en cocina y visualizar un historial completo de órdenes entregadas.

Si elegimos **ver órdenes en curso**, veremos las órdenes recién ingresadas en cocina y las que están listas para ser entregadas.

** INSERTE IMAGEN DE ÓRDENES EN CURSO AQUÍ **

Para **tomar una orden** elegimos esa opción, ingresamos el nombre del cliente y seleccionamos menú Desayuno o Tradicional. Para mantener la flexibilidad, comprendiendo que los clientes podrían antojarse a las 18:00 de un buen desayuno o darían lo que fuera por una hamburguesa a las 10:00, ambos menús estarán elegibles independiente del horario, permitiendo a quien tome la orden tomar productos fuera de horario mientras sea posible satisfacer el pedido.

El menú desayuno disponible según vuestra hamburguesería es:

> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            | 500  |
> | Cafe con leche            | 700  |
> | Sandwich de jamón y queso | 1000 |
> | Jugo natural              | 700  |
>

Y para el resto del día, el menú tradicional:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos ($500)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>$1500</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>$2500/td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>$500</td>
>       <td>$800</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>Gaseosa</td>
>       <td>$700</td>
>       <td>$1000</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por $500 pueden agregarle queso o huevo.**







## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React, Vue o Angular). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**. Para guiarte con respecto a este tema te recomendamos usar
[Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es), que es
una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan
buenas prácticas. De hecho, usaremos Lighthouse a la hora de evaluar el
proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _angular_, _vue_, _pwa_, _offline-first_, _service-worker_.

## Consideraciones generales

Este proyecto se debe "resolver" den grupos de 3 estudiantes.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto SI está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, la parte de la interfaz no está incluida, por lo cual, deberás de
definir la estructura de carpetas y archivos que consideres necesaria, puedes
guiarte de las convenciones del framework elegido. Por ende, los tests y el
setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Criterios de aceptación del proyecto

### Definición del producto

El product owner del proyecto ha conversado con el cliente y luego de una
reunión con el project manager han logrado crear el siguiente backlog:

#### [Historia de usuario] Mesero/a debe poder tomar orden de una persona
Yo como mesero o mesara debería poder tomar la orden de un cliente para saber
fácilmente cuanto cobrar y que la cocina tenga las órdenes de manera inmediata
y según cuando van llegando.

##### Definición de terminado
  * Anotar nombre de cliente
  * Agregar productos al pedido
  * Eliminar productos
  * Ver resumen y el total de la compra
  * Enviar pedido a cocina (guardar en alguna base de datos)
  * Se ve y funciona bien en una tablet

##### Criterios de aceptación
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

#### [Historia de usuario] Jefe de cocina debe poder ver ordenes
Yo como cocinero o cocinera debería poder ver las órdenes de los clientes y
marcar cuales están listas para saber qué se debe cocinar y avisar al mesero
que una orden está lista.

##### Definición de terminado
  * Ver los pedidos ordenados según van llegando
  * Marcar los pedidos que se han terminado
  * Ver el tiempo que tomó el pedido

##### Criterios de aceptación
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del cocinero o
  cocinera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

#### [Historia de usuario] Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes
Yo como mesero o mesera debería poder ver las órdenes que han sido cocinadas y
están listas para servir a los clientes, para así entregarlas y que el cliente
se vaya feliz con su comida.

#### Definición de terminado
  * Ver listado de órdenes terminadas
  * Marcar pedidos que han sido entregados

##### Criterios de aceptación
  * Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para tener estadísticas de lo que ha hecho Burger queen
  * Debes haber recibido code review de al menos una compañera
  * Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
  * Haces test unitarios y has testeado tu producto por tu cuenta
  * Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

## Primeros pasos

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

3. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

4. Crear proyecto en [Firebase](https://firebase.google.com/)

5. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

6. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

7. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

9. Desplegar:

   ```sh
   firebase deploy
   ```

10. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

***

## Pistas / Tips

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

### Cloud functions

* [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)
