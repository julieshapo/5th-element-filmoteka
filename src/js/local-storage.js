export function getWatchedLS() {
  return JSON.parse(localStorage.getItem('watched'));
}

export function getQueueLS() {
  return JSON.parse(localStorage.getItem('queue'));
}

export function setWatchedLS(array) {
  localStorage.setItem('watched', JSON.stringify(array));
}

export function setQueueLS(array) {
  localStorage.setItem('queue', JSON.stringify(array));
}