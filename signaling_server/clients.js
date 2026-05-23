/* path: alm_download/signaling_server/clients.js */

export const clients = new Map();

export function addClient(id, ws) {
  clients.set(id, ws);
}

export function removeClient(id) {
  clients.delete(id);
}

export function getClient(id) {
  return clients.get(id);
}
