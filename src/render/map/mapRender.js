import { onZoomChangeEvent } from './mapEvents';
import { mapOptions } from '../../options';

let mapElement;

export const getMap = () => {
  return mapElement;
};

export const renderMap = (options) => {
  const { Map } = google.maps;

  const map = new Map(document.getElementById('map'), {
    ...mapOptions,
    ...options,
  });
  mapElement = map;
  google.maps.event.addListener(
    map,
    'zoom_changed',
    onZoomChangeEvent.bind(null, map),
  );

  return map;
};

export const setStyle = (styles) => {
  mapElement.setOptions({
    styles: styles,
  });
};

export const panMap = (position) => {
  mapElement.panTo(position, true);
};

export const zoomMap = (zoom) => {
  mapElement.setZoom(zoom, true);
};
