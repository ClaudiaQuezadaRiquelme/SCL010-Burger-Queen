# [Burger Clown Queens](https://burguerqueen-ff21a.firebaseapp.com/)

## Presentación

Burger Clown Queens es una aplicación diseñada para la gestión de pedidos de vuestra hamburguesería. Permite visualizar el menú, ver el total del pedido mientras se va conformando, cambiar algún elemento del pedido antes de confirmar y enviar a cocina para su preparación. Tiene la potencialidad de ordenar los pedidos por tiempo de espera hasta antes de ser entregados, para mantener el compromiso y la experiencia de que nunca queden clientes esperando demasiado tiempo para recibir su orden.

<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1570127782/initial-front_hlok5m.png">

En una primera vista al cargar la aplicación, podemos observar un resumen de los pedidos en espera y opciones para tomar una orden nueva, ver pedidos en curso y en cocina y visualizar un historial completo de órdenes entregadas.

<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1570127785/actual-orders_ehwyqi.png">

Si elegimos **ver órdenes en curso**, veremos las órdenes recién ingresadas en cocina y las que están listas para ser entregadas.

<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1570127781/delivered-orders_tus40e.png">

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

Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana, y por $500 pueden agregarle queso o huevo.

Finalmente podemos hacer seguimiento de las órdenes al visualizarlas en cocina o listas para entregar:

<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1570127782/kitchen-orders_nygcy3.png">

<img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1570127781/delivered-orders_tus40e.png">



## Diseño

Realizamos un primer [mockup inicial](https://www.figma.com/file/rd51lFkSuCjGBF55BKS9Gv/BurgerQueen%2FClauNig?node-id=0%3A1) con su correspondiente [prototipo](https://xd.adobe.com/view/d23228ec-1036-4764-5326-bfdacce879e9-a403/), el cual fue bien acogido por posibles usuarios: se destacó el flujo comprensible, se entiende para qué sirve la aplicación y aporte de sugerencias.


## Criterios de aceptación del proyecto

Los requerimientos de desarrollo del producto incluyen 3 historias de usuario que sintetizan la interacción con la aplicación en un entorno de restaurante. 

#### [HU1] Mesero/a debe poder tomar orden de una persona
Yo como mesero/a debería poder tomar la orden de un cliente, saber cuanto cobrar y enviar órdenes a cocina.

##### Definición de terminado
Para considerar una historia de usuario como terminada, debe poderse:
  * Anotar nombre de cliente
  * Agregar productos al pedido
  * Eliminar productos
  * Ver resumen y el total de la compra
  * Enviar pedido a cocina (guardar en alguna base de datos)
  * Se ve y funciona bien en una tablet

#### [HU2] Jefe de cocina debe poder ver ordenes
Yo como cocinero/a debería poder ver las órdenes de los clientes y marcar cuales están listas.

##### Definición de terminado
En una próxima iteración el producto ejecutará las funciones de:
  * Ver los pedidos ordenados según van llegando
  * Marcar los pedidos que se han terminado
  * Ver el tiempo que tomó el pedido

#### [HU3] Mesero/a debe poder ver órdenes listas para servir y entregarlas a los clientes
Yo como mesero/a debería poder ver las órdenes que estén listas para servir a los clientes.

#### Definición de terminado
  * Ver listado de órdenes terminadas
  * Marcar pedidos que han sido entregados
 
##[Deploy del Proyecto](https://burguerqueen-ff21a.firebaseapp.com/)
