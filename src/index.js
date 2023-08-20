import { loadMap } from './render/map';
import { loadCityMap } from './render/cityMap';
import { loadLibraries } from './libs';
import './styles.css';

async function initMap() {
  await loadLibraries();
  // await loadMap();
  await loadCityMap();
}

initMap();
