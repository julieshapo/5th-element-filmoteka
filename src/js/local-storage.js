export function setWatchedLS(array) {
  localStorage.setItem('watched', JSON.stringify(array));
};

export function setQueueLS(array) {
  localStorage.setItem('queue', JSON.stringify(array));
};