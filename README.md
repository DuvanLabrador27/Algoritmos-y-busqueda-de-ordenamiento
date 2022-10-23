# ALGORITMOS DE BUSQUEDA Y ORDENAMIENTO :computer:

![version](https://pandorafms.com/blog/wp-content/uploads/2018/05/que-es-un-algoritmo-featured.png) 

## Tabla de Contenido

* [Seleccionar 5 algoritmos de ordenamiento y 3 algoritmos de búsqueda. :memo:](#requerimientos)
* Implementar estos 5 algoritmos en 5 lenguajes de programación :memo:](#objetivos)
* [Probar y medir estos algoritmos en estos lenguajes para conjuntos de datos generados aleatoriamente. :memo:](#diagrama-de-clases)
* [Estado inicial de los datos :memo:](#arquitectura)
* [Algoritmos de búsqueda y ordenamiento disponibles de manera nativa.  :memo:](#herramientas-utilizadas)
* [Recursos :memo:](#recursos)
* [Autores :memo:](#autores)



## Requerimientos 

_Este proyecto cuenta con los siguientes requerimientos:_

* RF-1: Maquetar los contenedores de cada uno de los componentes de la aplicación.
* RF-2: Crear un nuevo proyecto.
* RF-3: Abrir un proyecto anterior.
* RF-4: Visualizar información acerca de la aplicación.
* RF-5: Crear paquetes dentro del proyecto.
* RF-6: Eliminar paquetes dentro del proyecto.
* RF-7: Crear archivos Python.
* RF-8: Eliminar archivos Python.
* RF-9: Crear clases.
* RF-10: Eliminar clases.
* RF-11: Visualizar los paquetes, archivos y clases registradas.
* RF-12: Visualizar la relación de herencia entre clases.
* RF-13: Modificar el contenido de un archivo Python.
* RF-14: Visualizar las instancias creadas.
* RF-15: Crear instancias de las clases.
* RF-16: Eliminar instancias de las clases.
* RF-17: Visualizar el detalle de cada instancia creada.
* RF-18: Visualizar la terminal de comandos.
* RF-19: Ingresar comandos en la terminal.
* RF-20: Limpiar la terminal de comandos.
* RF-21: Reiniciar la terminal de comandos.
* RF-22: Ingresar versión de python.

## Objetivos 

Los objetivos de Blue Py son:

- Objetivo General :100: : Desarrollar un IDE para los estudiantes del programa de Ingeniería de Sistemas de la UFPS el cual facilite el aprendizaje de la Programación Orientada a Objetos  con Python.  

- Objetivos Específicos :dart: : 
	1. _Determinar los requerimientos para el funcionamiento del IDE para la enseñanza de la Programación Orientada a Objetos con Python._
    2. _Definir la arquitectura del proyecto y los aspectos metodológicos del desarrollo del proyecto._
	3. _Desarrollar el IDE Blue Py._
    4. _Formalizar la documentación de Blue Py._


## Arquitectura 

<p align="center">
<img src="https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/blob/main/img/arquitectura.jpg" height="350px">
<img src="https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/blob/main/img/arquitectura_Descomposici%C3%B3n.jpg" height="350px">
</p>

La arquitectura seleccionada para el desarrollo del proyecto es la arquitectura Modelo Vista Control II (MVC II), en esta arquitectura el módulo Modelo proporciona toda la funcionalidad básica y los datos compatibles con una base de datos. 
 
El módulo de vista muestra los datos mientras que el módulo de controlador toma solicitudes de entrada, valida los datos de entrada, inicia el modelo y la vista y su conexión, y distribuye tareas. El Controlador y la Vista se registran con el módulo Modelo.
 
Cada vez que se modifican los datos en el módulo Modelo, se notifican los cambios al módulo Vista y al módulo Controlador. En la arquitectura MVC-II, el módulo View y el módulo Controller están separados.
 
Esto permite la división del trabajo. Además, debido a que la tecnología de la interfaz gráfica se actualiza rápidamente y los requisitos comerciales cambian muy a menudo, es mucho mejor mantener la vista separada del controlador.


## Diagrama de clases

<p align="center"><img src="https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/blob/main/img/BluePy_Model.jpg" height="350px"></p>

* PythonFile: Representa el archivo de python que se creará por medio del IDE, dicho archivo contendrá todas las clases creadas por el usuario.
* PythonClass: Representa la clase de Python creada por el usuario la cual contará con todos los atributos o relaciones (herencia) que este le defina después de su creación. 
* Directory: Representa el directorio principal que el IDE le creará por defecto al usuario al momento de crear un nuevo proyecto, este directorio a su vez almacenará en su interior otros directorios y el archivo donde se almacenarán las clases de Python que hayan sido creadas. 
* Proyecto: Representa el proyecto creado en el IDE por el usuario a su vez contendrá un archivo donde se encontrarán todas las clases y  la ruta del directorio sobre el cual se va a trabajar el cual será el encargado de contener todos los archivos que componen la estructura del proyecto.


## Herramientas Utilizadas 

_Las herramientas utilizadas para el desarrollo del proyecto fueron:_

* [Java](https://www.java.com/es/) - Lenguaje de Programación
* [Python](https://www.python.org) - Lenguaje de Programación
* [Maven](https://maven.apache.org) - Herramienta de Software

<p align="center"><img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" width="74" height="64" > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png" width="64" height="64" margin-right: 20px> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/2560px-Apache_Maven_logo.svg.png" width="180" height="64"></p>


## Estructura 

<p align="center"><img src="https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/blob/main/img/estrucura_proyecto.jpg" height="350px"></p>

## Archivo .jar
[jar](https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/blob/main/dist/blue-py.jar) Archivo ejecutable

## Sitio Web

[sitio web](https://ariasronaldo25.github.io/Blue-Py-site/) Proyecto Blue Py- Ide

 ## Autores 

Los autores del proyecto son los estudiantes de la asignatura de Arquitectura de Software 2022-1 y la entidad educativa Universidad Francisco de Paula Santander.

También puedes mirar la lista de todos los [contribuyentes](https://github.com/Arquitectura-de-Software-UFPS-2022-I/python-poo-gui/graphs/contributors) quienes han participado en este proyecto. 

