import { delay } from "../utils";

export const renderRoute = (map, start, end) => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    draggable: false,
    polylineOptions: {
      strokeColor: "#aa2764",
    },
  });
  directionsRenderer.setMap(map);

  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING",
    provideRouteAlternatives: false,
  };
  directionsService.route(request, async function (result, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(result);
      //   const path = result.routes[0].overview_path;
      //   const length = path.length;
      //   const step = Math.ceil(Math.sqrt(length));
      //   for (let index = 0; index < length; index += step) {
      //     const origin = path[index];
      //     const destination = path[index + step - 1] ?? path[length - 1];

      //     directionsService.route(
      //       {
      //         origin,
      //         destination,
      //         travelMode: "DRIVING",
      //         provideRouteAlternatives: false,
      //       },
      //       function (res, s) {
      //         directionsRenderer.setDirections(res);
      //       }
      //     );
      //     await delay(100);
      //   }
    }
  });
};
