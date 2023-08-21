import {
  MARKER_SIZE,
  MARKER_MAX_SIZE,
  MARKER_ANIMATION_STEP,
  FONT_SIZE_MAX,
  labelOptions,
} from '../../options';
import { loadCityMap } from '../cityMap';
import { renderLabel } from './markers';

export const onMarkerHoverEvent = (marker, coordinate) => {
  const label = marker.getLabel();
  marker.setLabel({
    ...renderLabel(coordinate.title, coordinate.label),
    fontSize: FONT_SIZE_MAX,
    className: 'marker-label-large',
  });

  const icon = marker.getIcon();

  requestAnimationFrame(scaleUp.bind(null, marker, icon, MARKER_SIZE));
};

const scaleUp = (marker, icon, value) => {
  marker.setIcon({
    ...icon,
    scaledSize: new google.maps.Size(value, value), // scaled size
    size: new google.maps.Size(value, value),
  });
  if (value < MARKER_MAX_SIZE) {
    requestAnimationFrame(
      scaleUp.bind(
        null,
        marker,
        icon,
        Math.min(MARKER_MAX_SIZE, value + MARKER_ANIMATION_STEP),
      ),
    );
  }
};

export const onMarkerHoverOutEvent = (marker, coordinate) => {
  const label = marker.getLabel();
  // marker.setLabel({
  //   ...label,
  //   ...labelOptions,
  //   className: 'marker-label',
  // });
  marker.setLabel(null);

  const icon = marker.getIcon();
  requestAnimationFrame(scaleDown.bind(null, marker, icon, MARKER_MAX_SIZE));
};

const scaleDown = (marker, icon, value) => {
  marker.setIcon({
    ...icon,
    scaledSize: new google.maps.Size(value, value), // scaled size
    size: new google.maps.Size(value, value),
  });
  if (value > MARKER_SIZE) {
    requestAnimationFrame(
      scaleDown.bind(
        null,
        marker,
        icon,
        Math.max(MARKER_SIZE, value - MARKER_ANIMATION_STEP * 2),
      ),
    );
  }
};

export const onMarkerClick = (marker, coordinate) => {
  loadCityMap(marker);
};
