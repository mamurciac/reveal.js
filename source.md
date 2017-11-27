# ANTIALIASING APLICADO A FIGURAS POLIGONALES

### MICHAEL ANDRÉS MURCIA CONTRERAS

H:

## CONTENIDO

1. Marco Teórico
2. Ilustración del Problema
3. Ilustración de la Solución
4. Antecedentes
5. Demo
6. Conclusiones
7. Bibliografía

H:

## MARCO TEÓRICO

Las bases para el algoritmo de rasterización son:
* Buffer Z también conocido como Buffer Profundo
* Interpolación Profunda

<img style="border: none;box-shadow: none;width: 550px;position: absolute;top: 85%;left: 30%" src="images/ZBuffer.jpg"/>

H:

## ILUSTRACIÓN DEL PROBLEMA

Apreciación de aristas irregulares o bordes escalonados (Jaggies)

<img style="border: none;box-shadow: none;width: 900px;height: 400px;" src="images/BordesEscalonados.jpg"/>

H:

## ILUSTRACIÓN DEL PROBLEMA

Superficies Continuas representados en Pixeles como elementos discretos

<img style="border: none;box-shadow: none;width: 1000px;height: 425px;" src="images/Bloques.jpg"/>

H:

## ILUSTRACIÓN DE LA SOLUCIÓN

SuperSampling: Antialiasing por sobremuestra (En toda la imagen)

<img style="border: none;box-shadow: none;width: 500px;height: 425px;" src="images/Bordes4.png"/>

H:

## ILUSTRACIÓN DE LA SOLUCIÓN

MultiSampling: Antialiasing por sobremuestra (En bordes solamente)

<img style="border: none;box-shadow: none;width: 600px;height: 425px;" src="images/Bordes2.png"/>

H:

## ILUSTRACIÓN DE LA SOLUCIÓN

El Antialiasing hace uso de algoritmos de efecto borroso

<img style="border: none;box-shadow: none;width: 600px;height: 425px;" src="images/Bordes3.png"/>

H:

## ANTECEDENTES

Algoritmo de Bresenham: Trazado de líneas en dispositivos gráficos

<img style="border: none;box-shadow: none;width: 800px;height:600px;position: absolute;top: 90%;left: 20%;" src="images/AlgoritmoBresenham.gif"/>

H:

## ANTECEDENTES

CoverageSampling: Versión de MultiSampling de NVIDIA optimizada

<img style="border: none;box-shadow: none;width: 320px;height:320px;top: 90%;right: -500%;" src="images/CS.png"/>  <img style="border: none;box-shadow: none;width: 320px;height:320px;top: 90%;left: 60%;" src="images/CS16.png"/>

H:

## DEMO
[URL del Script](https://github.com/mamurciac)

<div id='mysketch_id'></div>

H:

## BIBLIOGRAFÍA

<small>Link del Repositorio: <a href="https://github.com/mamurciac/reveal.js">https://github.com/mamurciac/reveal.js</a></small>
<small>Reveal.js's Template forked at <a href="https://github.com/hakimel/reveal.js/">https://github.com/hakimel/reveal.js</a>. By <a href="http://hakim.se">Hakim El Hattab and his contributors</a></small>
<small>Rasterization: a Practical Implementation. Scratchapixel 2.0. Recuperado de <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation">https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation</a></small>
<small>Quagliozzi, E. Z Buffering. PDA - FX. Recuperado de <a href="http://pda-fx.net/pagedoc.php?id=4&lg=EN">http://pda-fx.net/pagedoc.php?id=4&amp;lg=EN</a></small>
<small>23 de Septiembre de 2017. Algoritmo de Bresenham. Wikipedia. Recuperado de <a href="https://es.wikipedia.org/wiki/Algoritmo_de_Bresenham">https://es.wikipedia.org/wiki/Algoritmo_de_Bresenham></a></small>

H: