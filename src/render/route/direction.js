import { ROUTE_COLOR, WAYPOINTS } from '../../options';
import { delay } from '../../utils';

const render = (map, origin, destination, waypoints, callback) => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    draggable: false,
    preserveViewport: true,
    polylineOptions: {
      strokeColor: ROUTE_COLOR,
    },
  });
  directionsRenderer.setMap(map);

  var request = {
    origin,
    destination,
    travelMode: 'DRIVING',
    provideRouteAlternatives: true,
    waypoints,
  };
  directionsService.route(request, async function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
      callback?.();
    }
  });
};

export const renderRouteWithWayPoints = async (map, coordinates, index) => {
  await delay(400);
  if (index % WAYPOINTS !== 0) return;
  const startIndex = index;
  const endIndex = Math.min(coordinates.length - 1, index + WAYPOINTS);

  render(
    map,
    coordinates[startIndex].position,
    coordinates[endIndex].position,
    coordinates.slice(startIndex + 1, endIndex).map((coordinate) => ({
      location: coordinate.position,
    })),
    () => {
      if (index + WAYPOINTS < coordinates.length - 1) {
        // renderRouteWithWayPoints(map, coordinates, index + WAYPOINTS);
      }
    },
  );
};

export const renderRoute = async (map, start, end) => {
  await delay(100);
  return new Promise((resolve) => {
    render(map, start, end, null, resolve);
  });
};
