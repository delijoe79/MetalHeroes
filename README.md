# Metal Heroes Sheet Forge

Editable web app version of the `Metal Heroes and the Fate of Rock` character sheet, Rocker gig grid, and Freak gig grid.

## Features

- Editable Metal Journal character sheet sections.
- Rocker and Freak gig-grid tabs using the original extracted page art.
- Editable node fields for main boxes, lower boxes, and circle markers.
- Browser autosave with portable JSON export/import.
- Static files only, so it works on GitHub Pages.

## GitHub Pages

This folder is ready to publish as a static GitHub Pages site.

1. Create or open a GitHub repository.
2. Upload everything in this folder, including `assets`, `index.html`, `app.js`, `gig-layouts.js`, `styles.css`, `.nojekyll`, and this README.
3. In GitHub, open `Settings > Pages`.
4. Set `Source` to deploy from the `main` branch and `/root`.
5. Open the published Pages URL after GitHub finishes building.

No build step is required.

If the gig-grid artwork does not appear online, confirm that the full `assets/gig-grids` folder was uploaded. The app expects files such as `assets/gig-grids/freak/page-4.png` and `assets/gig-grids/rocker/page-4.png` to exist in the same published folder as `app.js`.

## Local Preview

You can open `index.html` directly in a browser, or serve the folder locally:

```powershell
cd path\to\metal-heroes-sheet-forge
python -m http.server 8000
```

Then open `http://localhost:8000`.
