import { getMap } from "./map";
import { delay } from "../utils";

const BOUNCE_ANIMATION_DURATION = 600;

export const renderMarker = async (coordinate, options) => {
  const { Marker } = google.maps;
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    size: new google.maps.Size(300, 300),
    // origin: new google.maps.Point(0, 0),
    // anchor: new google.maps.Point(0, 32),
  };
  const marker = new Marker({
    map: getMap(),
    animation: google.maps.Animation.BOUNCE,
    ...coordinate,
    icon: {
      url: coordinate.icon,
      scaledSize: new google.maps.Size(100, 100),
    },
    ...options,
  });
  await delay(BOUNCE_ANIMATION_DURATION);
  marker.setAnimation(null);
  return marker;
};
