import { getCoordinates, MARKER_DROP_ANIMATION, CENTER } from '../../options';
import { removeBackButton, removeCityName } from '../backButton';
import { renderMap } from './mapRender';
import { renderMarker } from '../marker/markers';
import { renderRouteWithWayPoints, WAYPOINTS } from '../route/direction';
import { delay, fitMapToBounds } from '../../utils';

export async function loadMap() {
  const coordinates = getCoordinates();

  removeBackButton();
  removeCityName();

  const timeBetweenAnimation = MARKER_DROP_ANIMATION / coordinates.length;

  const map = renderMap({
    center: CENTER,
    // minZoom: 4, // minimum zoom level
    maxZoom: 13, // maximum zoom level
  });
  window.fullMap = map;

  fitMapToBounds(map, coordinates);

  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];

    renderRouteWithWayPoints(map, coordinates, index);

    const options = {};

    if (index === 0) {
      // options.isCurrent = true;
      // options.markerSize = 100;
      // options.thresholdSize = 150;
    }
    renderMarker(map, coordinate, options);

    await delay(timeBetweenAnimation);
  }

  return map;
}
