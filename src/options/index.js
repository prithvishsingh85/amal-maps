import COORDINATES from './coordinates.json';

const MAX = 0;
export const getCoordinates = () => {
  return COORDINATES.slice(0, MAX || COORDINATES.length);
};

export const state = {
  map: null,
  infoWindow: null,
  noAnim: false,
};

/* Map Options */
export const CENTER = { lat: 34.8283, lng: -98.5795 };
export const MARKER_DROP_ANIMATION = 4000;
export const mapOptions = {
  zoom: 5,
  mapId: 'fc8b09cecfb6decb',
  tilt: 0,
  minZoom: 4, // minimum zoom level
  maxZoom: 12, // maximum zoom level
};

/* Route Options */
export const ROUTE_COLOR = '#aa2764';
export const WAYPOINTS = 3;

/* Marker Options */
export const BOUNCE_ANIMATION_DURATION = 700;
export const MARKER_SIZE = 30;
export const MARKER_MAX_SIZE = 50; // change css too for label
export const MARKER_ANIMATION_STEP = 8;
export const FONT_SIZE_MAX = '18px';
export const ALWAYS_SHOW_LABELS = false;

export const renderLabel = (text, isLarge, multiplier = 1) => {
  if (!ALWAYS_SHOW_LABELS && !isLarge) return null;
  return {
    text,
    fontFamily: 'Syne, sans-serif',
    fontWeight: '700',
    className: isLarge
      ? `marker-label-large-${multiplier}`
      : `marker-label-${multiplier}`,
    fontSize: isLarge ? `22px` : `20px`,
  };
};

export const generateMarkerSize = (size) => ({
  size: new google.maps.Size(size * 2, size),
  scaledSize: new google.maps.Size(size, size),
  origin: new google.maps.Point(-size, 0), // origin
});
