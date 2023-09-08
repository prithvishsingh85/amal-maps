import { goBack } from '../backButton';
import { closeInfoWindow } from '../marker/infoWindow';

export const onZoomChangeEvent = async (map, minZoom) => {
  closeInfoWindow();
  if (map.getZoom() < minZoom + 0.1) {
    goBack();
  }
};

export const onDragEvent = (map) => {
  closeInfoWindow();
};
