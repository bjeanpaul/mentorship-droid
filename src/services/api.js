const HOSTNAME = 'http://192.168.178.20:8000/mentor';

// TODO: Move this somewhere else.
export function requestForAPI(endpoint, options) {
  return new Request(HOSTNAME + endpoint, options);
}
