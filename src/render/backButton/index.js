import { state } from '../../options';
import { loadMap } from '../map';

export const addBackButton = () => {
  const container = document.getElementById('map-back-button');
  if (!container) return;
  container.addEventListener('click', goBack);
  setTimeout(() => container.classList.add('show'), 1000);
};

export const removeBackButton = () => {
  const container = document.getElementById('map-back-button');
  if (!container) return;
  container.removeEventListener('click', goBack);
  container.classList.remove('show');
};

export const goBack = async () => {
  state.noAnim = true;
  await loadMap();
  state.noAnim = false;
};
