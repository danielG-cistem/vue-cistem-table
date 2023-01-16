# __Convención de Commits__

A continuación muestro las practicas o convenciones utilizadas para la descripción de los commits de este proyecto. Si tienes la intención de hacer aportes al proyecto, procura leer estas convenciones y seguirlas como tal.

De esta forma, mantendremos la organización y legibilidad de commits en este repositiorio.

## __Estructura__

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
Explicación de estructura:

- __```<type>:```__ Prefijo que indica el tipo de solución implementado para el commit.

- __```<scope>:```__ Opcional. Indica el ambito o módulo sobre el que se esta implementando la solución.

- __```<description>:```__ Indica una descripción breve sobre la solución.

- __```[optional body]:```__ Opcional. Indica información más detallada sobre la solución.

- __```[optional footer(s)]:```__ Opcional. Si existe un cambio que afecta a la lógica del proyecto, es requerido que se coloque en el pie de la confirmación dicha advertencia en lo que se soluciona el problema.

## __Prefijos para Soluciones__

- __feat:__ Utilice "feat", cuando se esta confirmando una nueva característica en el proyecto, es decir, algo que no se ha creado antes ("feat", proviene de "feature").

- __fix:__ Utilice "fix", cuando necesite indicar la corrección de una falla (bug) dentro del proyecto.

- __docs:__ Utilice "docs", cuando la solución sea para determinar cambios en la documentación del proyecto.

- __style:__ Utilice "style", cuando la solución sea para indicar cambios únicamente sobre el estilo de interfaz del proyecto. Si la solución involucra "lógica + estilos", consideré mejor registrar el commit como un "feat" o "refactor" según parezca.

- __refactor:__ Utilice "refactor", cuando necesite indicar modificaciones y cambios en pro de optimizar y mejorar el diseño y/o arquitectura de la aplicación.

- __test:__ Utilice "test", cuando necesite indicar cambios o creación de pruebas en el proyecto (unitarias, integración, funcionales, aceptación, etc).

- __chore:__ Utilice "chore", cuando necesite indicar cambios o creación de archivos que no afecten a las funcionalidades programáticas principales del sistema.

> NOTA:
> 
> Los prefijos aquí vistos son generales en si. Eres libre de asignar y crear tus propios prefijos.
> 
> La intención principal de las convenciones, es mantener un orden al momento de crear commits.

## __Referencias__

Las convenciones que aquí se describen, son basadas del sitio __[Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)__.
