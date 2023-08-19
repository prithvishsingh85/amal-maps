let mapElement;

export const getMap = () => {
  return mapElement;
};

export const renderMap = (options) => {
  const { Map } = google.maps;

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    // mapId: "fc8b09cecfb6decb",
    ...options,
  });
  mapElement = map;
  return map;
};

export const setStyle = (styles) => {
  //   mapElement.setMapStyle(styles);
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
