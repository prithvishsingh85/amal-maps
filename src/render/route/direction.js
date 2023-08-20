export const renderRoute = (map, start, end) => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    draggable: false,
    preserveViewport: true,
    polylineOptions: {
      strokeColor: '#aa2764',
    },
  });
  directionsRenderer.setMap(map);

  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
    provideRouteAlternatives: false,
  };
  directionsService.route(request, async function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
};
