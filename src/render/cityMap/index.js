import { getCoordinates, baseStyles, cityCoordinates } from '../../options';
import { renderMap, panMap, zoomMap } from './mapRender';
import { renderRoute } from '../route/direction';
import { renderMarker } from '../marker/markers';
import { delay } from '../../utils';

export async function loadCityMap(srcMarker) {
  const coordinates = getCoordinates();

  const map = renderMap({
    center: coordinates[0].position,
    zoom: 17,
    tilt: 60,
    heading: 10,
    minZoom: 12, // minimum zoom level
    maxZoom: 1000, // maximum zoom level
  });
  await delay(2000);
  const childCoordinates = cityCoordinates(coordinates[0].id);
  // renderMarker(map, childCoordinates.coordinates[0]);
  renderCoordinates.bind(map, childCoordinates);
  await delay(1000);
  setTimeout(
    animate.bind(
      null,
      map,
      30,
      -1,
      0,
      renderCoordinates.bind(null, map, childCoordinates),
    ),
    50,
  );

  return map;
}

const renderCoordinates = async (map, childCoordinates) => {
  const { coordinates } = childCoordinates;
  zoomMap(14);
  await delay(500);
  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    if (index > 0) {
      // renderRoute(map, coordinates[index - 1].position, coordinate.position);
    }
    // panMap(coordinate.position);
    // await delay(700);

    renderMarker(map, coordinate);

    // await delay(1200);
  }
};

const MAX_ROTATION = 20;
const MIN_ROTATION = -10;
const STEP_ROTATION = 1;
const STEP_TIME = 60;
const ANIMATION_COUNT = 0;

const animate = (map, value, dir, count, nextFunc) => {
  if (count > ANIMATION_COUNT) {
    // nextFunc();
    return;
  }
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
  setTimeout(
    animate.bind(null, map, nextValue, nextDir, count, nextFunc),
    STEP_TIME,
  );
};
