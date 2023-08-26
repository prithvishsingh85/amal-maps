import { goBack } from '../backButton';
import { closeInfoWindow } from '../marker/infoWindow';

export const onZoomChangeEvent = async (map) => {
  closeInfoWindow();
  if (map.getZoom() < 12.2) {
    goBack();
  }
};

export const onDragEvent = (map) => {
  closeInfoWindow();
};
