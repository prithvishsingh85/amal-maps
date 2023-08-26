import { getCoordinates, MARKER_DROP_ANIMATION } from '../../../options';
import { renderMap, panMap, zoomMap } from '../mapRender';
import { renderMarker } from '../../marker/markers';
import {
  renderRoute,
  renderRouteWithWayPoints,
  WAYPOINTS,
} from '../../route/direction';
import { delay } from '../../../utils';

export async function loadMap() {
  const coordinates = getCoordinates();

  const timeBetweenAnimation = MARKER_DROP_ANIMATION / coordinates.length;

  // let panningLng = coordinates[0].position.lng;
  // const lngMoveStep =
  //   (Math.abs(coordinates[coordinates.length - 1].position.lng) -
  //     Math.abs(panningLng)) /
  //   coordinates.length;

  const map = renderMap({
    center: { lat: 34.8283, lng: -98.5795 },
    // center: coordinates[0].position,
  });
  // await delay(1000);

  // zoomMap(8);

  // renderCoordinates(map, coordinates);

  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    if (index % WAYPOINTS === 0) {
      renderRouteWithWayPoints(map, coordinates, index);
    }

    // panningLng -= lngMoveStep;
    // panMap({
    //   lat: 39.8283,
    //   lng: panningLng,
    // });
    // await delay(100);

    // zoomMap(9);
    renderMarker(map, coordinate);

    await delay(timeBetweenAnimation);
  }

  return map;
}
