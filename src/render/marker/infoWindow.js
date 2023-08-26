let currentInfoWindow = null;
let timer = null;

const INFOWINDOW_CLOSE_TIME = 3000;

export const openInfoWindow = (map, marker, coordinate) => {
  const infoWindow = createInfoWindow(coordinate);
  closeInfoWindow();
  currentInfoWindow = infoWindow;
  infoWindow.open({
    anchor: marker,
    map,
  });
  setTimeout(createEventListeners, 200);
};

const createEventListeners = () => {
  const element = document.getElementById('info-window');
  if (element) {
    element.addEventListener('mouseover', stopTimer);
    element.addEventListener('mouseout', () => closeInfoWindowAfterTime());
  }
};

export const createInfoWindow = (coordinate) => {
  const { text, url, linkText } = coordinate.info;
  const contentString = `
    <div id="info-window">
      <div class="info-window-container">
        ${text ? `<p class="info-window-text">${text}<p>` : ''}
        ${
          linkText && url
            ? `<p class="info-window-link">
            <a href="${url}" target="_blank">${linkText}</a>
          </p>`
            : ''
        }
      </div>
    </div>
  `;

  return new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: text,
    disableAutoPan: false,
    pixelOffset: new google.maps.Size(40, 0),
  });
};

export const setInfoWindowOffset = (offset = 40) => {
  currentInfoWindow?.setOptions({
    pixelOffset: new google.maps.Size(offset, 0),
  });
};

const stopTimer = () => {
  clearTimeout(timer);
};

export const closeInfoWindowAfterTime = (time = INFOWINDOW_CLOSE_TIME) => {
  stopTimer();
  timer = setTimeout(closeInfoWindow, time);
};

export const closeInfoWindow = () => {
  stopTimer();
  timer = null;
  currentInfoWindow?.close();
  currentInfoWindow = null;
};
