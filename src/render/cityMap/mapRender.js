import { mapOptions, state } from '../../options';
import { closeInfoWindow } from '../marker/infoWindow';
import { goBack, onZoomChangeEvent } from './mapEvents';

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

  google.maps.event.addListener(map, 'zoom_changed', () => {
    closeInfoWindow();
    onZoomChangeEvent(map, options.minZoom);
  });
  google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
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
