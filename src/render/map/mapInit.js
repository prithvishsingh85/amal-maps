import { getCoordinates } from '../../options';
import { renderMap, panMap, zoomMap } from './mapRender';
import { renderMarker } from '../marker/markers';
import { renderRoute } from '../route/direction';
import { delay } from '../../utils';

export async function loadMap() {
  const coordinates = getCoordinates();

  const map = renderMap({
    center: coordinates[0].position,
  });
  await delay(1000);

  zoomMap(8);

  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    if (index > 0) {
      renderRoute(map, coordinates[index - 1].position, coordinate.position);
    }
    panMap(coordinate.position);
    await delay(700);

    zoomMap(9);
    renderMarker(map, coordinate);

    await delay(1200);
  }

  return map;
}
