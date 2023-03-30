export const watched = getWatchedLS() || [];
export const queue = getQueueLS() || [];

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

export function addToWatched(id) {
  if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLS(watched);
}

export function addToQueue(id) {
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setWatchedLS(queue);
}
