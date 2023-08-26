import { renderMap } from './mapRender';
import { addBackButton } from '../backButton';
import { renderMarker } from '../marker/markers';
import { delay } from '../../utils';
import { MARKER_SIZE, MARKER_MAX_SIZE } from '../../options';

const START_HEADING = 20;
const MAX_ROTATION = START_HEADING;
const MIN_ROTATION = -50;
const STEP_ROTATION = 1;
const TOTAL_ANIMATION = 2000;
const STEP_TIME = TOTAL_ANIMATION / (START_HEADING - MIN_ROTATION);
const ANIMATION_COUNT = 0;

export async function loadCityMap(srcMarker, coordinates) {
  const map = renderMap({
    center: srcMarker.getPosition(),
    zoom: 13,
    tilt: 60,
    heading: START_HEADING,
    minZoom: 12, // minimum zoom level
    maxZoom: 1000, // maximum zoom level
  });

  addBackButton();

  await delay(500);
  renderCoordinates(map, coordinates);
  await delay(200);
  setTimeout(animate.bind(null, map, 30, -1, 0), 50);
  return map;
}

const renderCoordinates = async (map, coordinates) => {
  await delay(500);
  for (let index = 0; index < coordinates.length; index++) {
    const coordinate = coordinates[index];
    renderMarker(map, coordinate, {
      animationDuration: TOTAL_ANIMATION,
      markerSize: MARKER_SIZE * 2,
      thresholdSize: MARKER_SIZE * 2,
      labelMultiplier: 2,
    });
  }
};

const animate = (map, value, dir, count) => {
  if (count > ANIMATION_COUNT) {
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
  setTimeout(animate.bind(null, map, nextValue, nextDir, count), STEP_TIME);
};
