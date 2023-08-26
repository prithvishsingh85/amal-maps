import {
  MARKER_ANIMATION_STEP,
  renderLabel,
  generateMarkerSize,
  state,
} from '../../options';
import { loadCityMap } from '../cityMap';
import { closeInfoWindowAfterTime, openInfoWindow } from './infoWindow';

export const onMarkerHoverEvent = (
  marker,
  coordinate,
  size,
  thresholdSize,
  multiplier,
) => {
  if (coordinate.info) {
    openInfoWindow(marker.getMap(), marker, coordinate);
  } else {
    marker.setLabel(renderLabel(coordinate.title, true, multiplier));
  }

  const icon = marker.getIcon();

  requestAnimationFrame(
    scaleUp.bind(null, marker, icon, size, thresholdSize, multiplier),
  );
};

const scaleUp = (marker, icon, value, thresholdSize, multiplier) => {
  marker.setIcon({
    ...icon,
    ...generateMarkerSize(value),
  });
  if (value < thresholdSize) {
    requestAnimationFrame(
      scaleUp.bind(
        null,
        marker,
        icon,
        Math.min(thresholdSize, value + MARKER_ANIMATION_STEP),
        thresholdSize,
        multiplier,
      ),
    );
  }
};

export const onMarkerHoverOutEvent = (
  marker,
  coordinate,
  size,
  thresholdSize,
  multiplier,
) => {
  if (coordinate.info) {
    closeInfoWindowAfterTime(500);
  } else {
    marker.setLabel(renderLabel(coordinate.title, false, multiplier));
  }

  const icon = marker.getIcon();
  requestAnimationFrame(
    scaleDown.bind(null, marker, icon, size, thresholdSize, multiplier),
  );
};

const scaleDown = (marker, icon, value, thresholdSize, multiplier) => {
  marker.setIcon({
    ...icon,
    ...generateMarkerSize(value),
  });
  if (value > thresholdSize) {
    requestAnimationFrame(
      scaleDown.bind(
        null,
        marker,
        icon,
        Math.max(thresholdSize, value - MARKER_ANIMATION_STEP * 2),
        thresholdSize,
        multiplier,
      ),
    );
  }
};

export const onMarkerClick = (map, marker, coordinate) => {
  if (coordinate.cityCoordinates?.length) {
    state.map = map;
    loadCityMap(marker, coordinate.cityCoordinates);
  } else if (coordinate.info?.url) {
    const infoWindow = getInfoWindow(coordinate);
    infoWindow.open({
      anchor: marker,
      map,
    });
    openInfoWindow(map, marker, coordinate);
    // window.open(coordinate.link.url, '_blank');
  }
};
