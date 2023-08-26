import { getCoordinates, MARKER_DROP_ANIMATION, CENTER } from '../../options';
import { removeBackButton } from '../backButton';
import { renderMap } from './mapRender';
import { renderMarker } from '../marker/markers';
import { renderRouteWithWayPoints, WAYPOINTS } from '../route/direction';
import { delay } from '../../utils';

export async function loadMap() {
  const coordinates = getCoordinates();

  removeBackButton();

  const timeBetweenAnimation = MARKER_DROP_ANIMATION / coordinates.length;

  const map = renderMap({
    center: CENTER,
  });

  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];

    renderRouteWithWayPoints(map, coordinates, index);

    renderMarker(map, coordinate);

    await delay(timeBetweenAnimation);
  }

  return map;
}
