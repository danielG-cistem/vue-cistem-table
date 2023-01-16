# **Esquema de Versionamiento**

A continuación se describirá la convención establecida para el nombramiento del producto, en diferentes facetas de su ciclo de vida.

La convención consiste en una combinación de **versionamiento por numeración** y **versionamiento por estabilidad**.

> **NOTA**: Tenga en cuenta que estas convenciones no pertenecen estrictamente a algún estándar oficial, sino que es el resultado de diferentes investigaciones. Usted mismo puede implementar sus propias convenciones en sus proyectos. Aquí se plasma de la forma en que a continuación lo leerá.

## **Versionado por Numeración**

Este modelo, consiste en distinguir la madurez del proyecto, por medio de una numeración dividida en tres segmentos y separados por un punto.

Forma del versionado:

- **X.Y.Z** 

Donde:

- **X**: Corresponde a la versión mayor o principal del software. Este número cambia cuando se implementan un conjunto amplio de características nuevas. También puede cambiar cuando se implementa una característica **(nueva o ya existente del software)** que no es compatible con la versión anterior de la aplicación.

    > **NOTA**: Si el número de este segmento es modificado, tanto **Y** como **Z**, se reiniciarán en cero (ejem: **3.0.0**).

- **Y**: Corresponde a la versión menor del software. Este número cambia cuando se integran una caracteristica nueva y este sigue siendo compatible con la versión anterior. También puede cambiar cuando se han llevado a cabo refactorizaciones.

    > **NOTA**: Si el número de este segmento es modificado, **X** sigue consevando su número, pero **Z** se reinicía en cero. (ejem: **3.1.0**)

- **Z**: Corresponde a una versión de corrección. Este número cambia cuando se solucionan errores de la aplicación.

    > **NOTA**: Si el número de este segmento es modificado, tanto **X** como **Y**, seguiran conservando su número. (ejem: **3.1.4**)

Resultado final:

- **"1.1.5"** o **"v1.1.5"** (agregar el prefijo "v", es opcional).

## **Versionado por Estabilidad**

Este modelo, consiste en distinguir la madurez del proyecto, por medio de una etiqueta que describa a grandes rasgos la madurez del proyecto.

Etiquetas de estabilidad:

- **Alpha**: Se aplica cuando el software aún es inestable o esta en una etapa inicial. Aquí hay muchos errores y esta abierto a mejorar. En esta fase, el producto aún no puede ser usado.

- **Beta**: Se aplica cuando el software es considerado **"relativamente estable"** a comparación de la versión **Alpha**. Sigue teniendo errores y segue siendo abierto a mejorar pero además el producto si puede ser usado. Algo a saber, es que las características que aquí se vean, pueden llegar o no al producto final.

- **RC**: Significa **Release Candidate** y es una versión mejorada del **Beta**. Se aplica cuando el software esta proximo a liberarse, pero antes de hacerlo, pasa por una revisión para refinar algunos detalles, aunque muy mínimos. En este punto, el producto si puede ser usado.

- **Stable**: Se aplica cuando el producto es considerado **"estable"** o listo para liberarse a producción. En este punto, el producto debe ser completamente funcional para lo usuarios finales.

Resultado final:

- **1.1.5-alpha**.
- **1.1.5-beta**.
- **1.1.5-rc**.
- **1.1.5-stable**.

## **Versionamiento Final**

Después de explicar las convenciones, solo resta decir, que la forma final en la que se recomienda nombrar el producto, se vería de la siguiente manera:

- Si se encuentra con un **X.Y.Z-alpha**, esto indica que esa versión es inestable y que no es recomendable usarse.

- Si se encuentra con un **X.Y.Z-beta**, es indica que esa versión puede usarse, pero puede mejorarse.

- Si se encuentra con un **X.Y.Z-rc**, es indica que esa versión puede usarse, que esta proximo a ser liberado y que puede mejorarse.

- Si se encuentra con un **X.Y.Z-stable**, es indica que esa versión es completamente usable. Si se desea descargar ficheros del proyecto, se recomienda que se descargue una versión con la etiqueta "stable".

---
© 2015 Cistem Innovación ® | Casa de Software. All Rights Reserved.
Soluciones de Cistem Innovación ® Casa de Software.
