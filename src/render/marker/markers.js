import { getMap } from '../map/mapRender';
import { delay } from '../../utils';
import {
  BOUNCE_ANIMATION_DURATION,
  MARKER_SIZE,
  labelOptions,
} from '../../options/markerOptions';
import './marker.css';
import { onMarkerHoverEvent, onMarkerHoverOutEvent } from './markerEvents';

const renderIcon = (icon) => {
  return icon
    ? {
        size: new google.maps.Size(MARKER_SIZE, MARKER_SIZE),
        scaledSize: new google.maps.Size(MARKER_SIZE, MARKER_SIZE), // scaled size
        // origin: new google.maps.Point(0, 0), // origin
        // anchor: new google.maps.Point(50, 50), // anchor
        zIndex: 10,
        ...icon,
      }
    : {};
};

const renderInfoWindow = (marker, content) => {
  const map = getMap();
  var infoWindow = new google.maps.InfoWindow({
    content: `
    <div style="background-color: #FFDDAA; padding: 10px; border: 1px solid #FF7744;">
        <h4 style="margin: 0;">Custom Styled InfoWindow</h4>
        <p>${content}</p>
    </div>
    `,
  });

  // Always show the InfoWindow above the marker
  infoWindow.open(map, marker);
};

const renderLabel = (text, options = {}) => {
  return {
    ...labelOptions,
    text,
    className: 'marker-label',
    ...options,
  };
};

export const renderMarker = async (coordinate, options) => {
  const { Marker } = google.maps;
  const map = getMap();

  const marker = new Marker({
    map,
    animation: google.maps.Animation.BOUNCE,
    collisionBehavior:
      google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
    ...coordinate,
    icon: renderIcon(coordinate.icon),
    ...options,
  });

  // renderInfoWindow(marker, coordinate.title);

  await delay(BOUNCE_ANIMATION_DURATION);
  marker.setAnimation(null);
  await delay(50);
  marker.setLabel(renderLabel(coordinate.title));
  google.maps.event.addListener(
    marker,
    'mouseover',
    onMarkerHoverEvent.bind(null, marker),
  );
  google.maps.event.addListener(
    marker,
    'mouseout',
    onMarkerHoverOutEvent.bind(null, marker),
  );
  return marker;
};
