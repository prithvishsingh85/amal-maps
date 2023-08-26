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
