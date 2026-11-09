# Luis José Deluquez — Portfolio

Portafolio web profesional de **Luis José Deluquez Sánchez**, desarrollador full-stack en Barranquilla, Colombia.

## Sitio

La web está en la carpeta `portfolio/` de este repositorio para conservar intacto el proyecto original. Es un sitio estático, sin frameworks ni dependencias de ejecución.

- `portfolio/index.html`: experiencia y proyectos, con opción español/inglés.
- `portfolio/styles.css`: identidad visual, diseño responsive, estilos accesibles.
- `portfolio/main.js`: traducciones, menú móvil, año dinámico.
- `portfolio/cv.html`: hoja de vida para visualizar, imprimir o guardar como PDF.
- `portfolio/favicon.svg`: marca vectorial.

## Ejecutar localmente

Abre `portfolio/index.html` en tu navegador. Para desarrollo local también puedes ejecutar:

```bash
python -m http.server 8000
```

Y visitar `http://localhost:8000/portfolio/`.

## Despliegue

El despliegue principal usa GitHub Pages con el workflow `.github/workflows/deploy-portfolio-pages.yml`, que publica el directorio `portfolio/` al enviar cambios a `main` (también admite ejecución manual).

Para activar el sitio una sola vez: entra en **Settings → Pages** del repositorio, selecciona **Source: GitHub Actions** y guarda la configuración. Después ejecuta el workflow desde **Actions → Deploy portfolio to GitHub Pages → Run workflow** si no se publica automáticamente.

URL oficial: **https://luisjose713.github.io/SoftDevCode/**.

## Contenido y privacidad

La información profesional procede de la hoja de vida del autor. Los proyectos de empresas se describen a alto nivel; no se incluye código interno, secretos, configuraciones ni datos de clientes.

© 2026 Luis José Deluquez Sánchez.
