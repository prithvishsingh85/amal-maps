import { getCoordinates, baseStyles } from '../../options';
import { renderMap, panMap, zoomMap } from './mapRender';
import { renderRoute } from '../route/direction';
import { delay } from '../../utils';

export async function loadCityMap() {
  const coordinates = getCoordinates();

  const map = renderMap({
    center: coordinates[0].position,
    zoom: 15,
    mapId: 'fc8b09cecfb6decb',
    styles: baseStyles,
    tilt: 45,
    minZoom: 12, // minimum zoom level
    maxZoom: 100, // maximum zoom level
    mapTypeId: google.maps.MapTypeId.TERRAIN,
  });
  await delay(2000);
  setTimeout(animate.bind(null, map, 0, 1, 0), 50);
  return;

  zoomMap(8);

  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    if (index > 0) {
      renderRoute(map, coordinates[index - 1].position, coordinate.position);
    }
    panMap(coordinate.position);
    await delay(700);

    zoomMap(9);
    renderMarker(coordinate);

    await delay(1200);
  }
}

const MAX_ROTATION = 10;
const MIN_ROTATION = -10;
const STEP_ROTATION = 0.5;
const ANIMATION_COUNT = 2;

const animate = (map, value, dir, count) => {
  if (count > ANIMATION_COUNT) return;
  const nextValue = value + dir * STEP_ROTATION;
  map.moveCamera({
    heading: nextValue,
  });

  let nextDir = dir;
  if (
    (dir > 0 && nextValue >= MAX_ROTATION) ||
    (dir < 0 && nextValue <= MIN_ROTATION)
  ) {
    nextDir = -dir;
    count += 1;
  }
  setTimeout(animate.bind(null, map, nextValue, nextDir, count), 50);
};
