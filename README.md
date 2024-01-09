# ¿Qué es esto?
Este es un proyecto de freeCodeCamp al que decidí crear una versión de escritorio para practicar con node.js y electron.js

 ![Preview de la aplicación](preview.png)

# Como instalar en local
Para este proyecto se necesita, además de node.js, electron.js
```
npm install electron --save-dev
```

También si quieres hacer tu build se necesita electron-builder

```
npm install electron-builder --save-dev
```

Notese como se usa *--save-dev* en vez de *--save* en ambos ya que no queremos que se guarde en las dependencias finales en el .json, eso haría que la build final los tuviera y aumentaría innecesariamente el tamaño.

Para saber como usarlos vean la documentación de [electron.js](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app) y [electron-builder](https://www.electron.build/index.html)
