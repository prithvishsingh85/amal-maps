import { baseStyles, coordinates } from "./options";
import {
  renderMap,
  renderMarker,
  panMap,
  zoomMap,
  setStyle,
  renderRoute,
} from "./render";
import { loadLibraries } from "./libs";
import { delay } from "./utils";
import "./styles.css";

async function initMap() {
  await loadLibraries();

  const map = renderMap({
    zoom: 4,
    center: coordinates[0].position,
    // mapId: "fc8b09cecfb6decb",
    styles: baseStyles,
  });
  setStyle(baseStyles);
  await delay(1000);
  zoomMap(8);
  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    if (index > 0) {
      renderRoute(map, coordinates[index - 1].position, coordinate.position);
    }
    await delay(500);
    renderMarker(coordinate);
    // panMap(coordinate.position);

    await delay(500);
  }
}

initMap();
