import { state } from '../options';

export const delay = async (time) => {
  await new Promise((resolve) => {
    if (state.noAnim) {
      resolve();
    } else {
      setTimeout(() => resolve(), time);
    }
  });
};

export function fitMapToBounds(map, coordinates, address) {
  if (coordinates.length === 1) {
    // fitMapToBoundsWithAddress(map, coordinates, 1, address);
    fitMapToBoundsWithoutAddress(map, coordinates, 0.5);
  } else {
    fitMapToBoundsWithoutAddress(map, coordinates, 0.05);
  }
}

export function fitMapToBoundsWithAddress(
  map,
  address,
  threshold,
  coordinates,
) {
  const geocoder = new google.maps.Geocoder();
  let bounds = new google.maps.LatLngBounds();

  geocoder.geocode({ address }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      // Extend bounds using the city's geometry
      const cityBounds = results[0].geometry.viewport;
      bounds.union(cityBounds);

      // Extend bounds using the coordinates array
      coordinates.forEach(function (coord) {
        bounds.extend(
          new google.maps.LatLng(coord.position.lat, coord.position.lng),
        );
      });

      // Compute the size of the bounding box
      const sw = bounds.getSouthWest();
      const ne = bounds.getNorthEast();
      const latDiff = (ne.lat() - sw.lat()) * threshold;
      const lngDiff = (ne.lng() - sw.lng()) * threshold;
      // If the bounding box is smaller than the threshold, adjust it
      bounds = new google.maps.LatLngBounds(
        { lat: sw.lat() - latDiff, lng: sw.lng() - lngDiff },
        { lat: ne.lat() + latDiff, lng: ne.lng() + lngDiff },
      );

      // Adjust the map view to fit the bounds
      map.fitBounds(bounds);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

export function fitMapToBoundsWithoutAddress(map, coordinates, threshold) {
  let bounds = new google.maps.LatLngBounds();

  coordinates.forEach(function (coord) {
    bounds.extend(
      new google.maps.LatLng(coord.position.lat, coord.position.lng),
    );
  });
  // Compute the size of the bounding box
  const sw = bounds.getSouthWest();
  const ne = bounds.getNorthEast();
  // const latDiff = (ne.lat() - sw.lat()) * threshold;
  // const lngDiff = (ne.lng() - sw.lng()) * threshold;
  // If the bounding box is smaller than the threshold, adjust it
  bounds = new google.maps.LatLngBounds(
    { lat: sw.lat() - threshold, lng: sw.lng() - threshold },
    { lat: ne.lat() + threshold, lng: ne.lng() + threshold },
  );

  // Adjust the map view to fit the bounds
  map.fitBounds(bounds);
}
