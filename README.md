# STARRYSOUND — Página de inicio (menú QR)

Puerta de entrada a las dos experiencias de realidad aumentada:

- Realidad aumentada (seguimiento de imagen): https://filtrostarrysoundfinal.vercel.app/
- Filtro facial (seguimiento facial): https://filtro-rostro-starrysound.vercel.app/

## Estructura

```
starrysound/
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── img/    logo.svg, orbit.svg, star-*.svg  (extraídos del manual de identidad)
    └── fonts/  trimen-drawing-round.woff2, crayons-regular.woff2
```

## Ver en local (VS Code)

1. Abre la carpeta `starrysound` en VS Code (Archivo > Abrir carpeta).
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Clic derecho en `index.html` > **Open with Live Server**.

## Subir a GitHub

```
git init
git add .
git commit -m "Pagina de inicio STARRYSOUND"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/starrysound.git
git push -u origin main
```

## Desplegar en Vercel

vercel.com > Add New > Project > importar el repositorio > Framework Preset: **Other** > Deploy.
No requiere configuración, build ni backend.

## Sobre las tipografías

Las fuentes salen del PDF del manual, que solo incluye los glifos del muestrario:
sin tildes, sin signos de puntuación y a Crayons le falta la letra T.
Por eso todo el texto va en mayúsculas sin tildes y Crayons solo se usa en las etiquetas de sabores.
Trimen Drawing es una versión "Demo": revisa su licencia antes de publicar.
Para usar las fuentes completas, reemplaza los archivos de `assets/fonts/` conservando el nombre.
