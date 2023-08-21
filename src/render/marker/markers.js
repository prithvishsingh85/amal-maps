import { getMap } from '../map/mapRender';
import { delay } from '../../utils';
import {
  BOUNCE_ANIMATION_DURATION,
  MARKER_SIZE,
  labelOptions,
} from '../../options/markerOptions';
import './marker.css';
import {
  onMarkerHoverEvent,
  onMarkerHoverOutEvent,
  onMarkerClick,
} from './markerEvents';

const renderIcon = (icon) => {
  return icon
    ? {
        icon: {
          size: new google.maps.Size(MARKER_SIZE, MARKER_SIZE),
          scaledSize: new google.maps.Size(MARKER_SIZE, MARKER_SIZE), // scaled size
          // origin: new google.maps.Point(0, 0), // origin
          // anchor: new google.maps.Point(50, 50), // anchor
          zIndex: 10,
          ...icon,
        },
      }
    : {};
};

const renderInfoWindow = (map, marker, content) => {
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

export const renderLabel = (text, options = {}) => {
  return {
    ...labelOptions,
    text,
    className: 'marker-label',
    ...options,
  };
};

export const renderMarker = async (map, coordinate, options) => {
  const { Marker } = google.maps;

  const params = {
    map,
    collisionBehavior:
      google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
    title: coordinate.title,
    position: coordinate.position,
    ...renderIcon(coordinate.icon),
    ...options,
  };

  if (coordinate.animate) {
    params.animation = google.maps.Animation.BOUNCE;
  }

  const marker = new Marker(params);

  // renderInfoWindow(marker, coordinate.title);

  if (coordinate.animate) {
    await delay(BOUNCE_ANIMATION_DURATION);
    marker.setAnimation(null);
  }

  if (coordinate.label) {
    await delay(50);
    marker.setLabel(renderLabel(coordinate.title, coordinate.label));
  }

  google.maps.event.addListener(
    marker,
    'mouseover',
    onMarkerHoverEvent.bind(null, marker, coordinate),
  );
  google.maps.event.addListener(
    marker,
    'mouseout',
    onMarkerHoverOutEvent.bind(null, marker, coordinate),
  );

  google.maps.event.addListener(
    marker,
    'click',
    onMarkerClick.bind(null, marker, coordinate),
  );
  return marker;
};
