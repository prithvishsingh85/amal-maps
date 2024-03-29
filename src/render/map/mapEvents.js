import { state } from '../../options';
import { closeInfoWindow } from '../marker/infoWindow';

export const onZoomChangeEvent = (map) => {
  if (map.getZoom() === 13) {
    map.setMap(state.map);
  }
  closeInfoWindow();
};

export const onDragEvent = (map) => {
  closeInfoWindow();
};
