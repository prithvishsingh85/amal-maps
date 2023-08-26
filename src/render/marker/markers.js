import icon1 from '../../assets/icon-1.svg';
import icon2 from '../../assets/icon-2.svg';
import icon3 from '../../assets/icon-3.svg';
import icon4 from '../../assets/icon-4.svg';
import icon5 from '../../assets/icon-5.svg';
import {
  BOUNCE_ANIMATION_DURATION,
  MARKER_SIZE,
  MARKER_MAX_SIZE,
  ALWAYS_SHOW_LABELS,
  renderLabel,
  generateMarkerSize,
} from '../../options';
import {
  onMarkerHoverEvent,
  onMarkerHoverOutEvent,
  onMarkerClick,
} from './markerEvents';
import { delay } from '../../utils';
import './marker.css';

let counter = 0;

const icons = [icon3, icon2, icon1, icon4, icon5];

export const renderMarker = async (map, coordinate, options = {}) => {
  const { Marker } = google.maps;

  const { animationDuration } = options;

  const markerSize = options.markerSize ?? MARKER_SIZE;
  const thresholdSize = options.thresholdSize ?? MARKER_MAX_SIZE;
  const labelMultiplier = options.labelMultiplier ?? 1;

  const params = {
    map,
    // collisionBehavior: google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
    title: coordinate.title,
    position: coordinate.position,
    icon: {
      url: icons[counter],
      // url: 'https://i.gifer.com/NXRX.gif',
      ...generateMarkerSize(markerSize),
    },
  };

  counter = (counter + 1) % icons.length;

  params.animation = google.maps.Animation.BOUNCE;

  const marker = new Marker(params);
  await delay(animationDuration ?? BOUNCE_ANIMATION_DURATION);
  marker.setAnimation(null);

  if (ALWAYS_SHOW_LABELS) {
    await delay(50);
    marker.setLabel(renderLabel(coordinate.title, false, labelMultiplier));
  }

  google.maps.event.addListener(
    marker,
    'mouseover',
    onMarkerHoverEvent.bind(
      null,
      marker,
      coordinate,
      markerSize,
      thresholdSize,
      labelMultiplier,
    ),
  );
  google.maps.event.addListener(
    marker,
    'mouseout',
    onMarkerHoverOutEvent.bind(
      null,
      marker,
      coordinate,
      thresholdSize,
      markerSize,
      labelMultiplier,
    ),
  );

  google.maps.event.addListener(
    marker,
    'click',
    onMarkerClick.bind(null, map, marker, coordinate),
  );
  return marker;
};
