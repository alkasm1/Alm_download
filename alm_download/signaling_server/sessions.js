export const sessions = new Map();

export function createSession(a, b) {
  const id = crypto.randomUUID();
  sessions.set(id, { a, b });
  return id;
}

export function getSession(id) {
  return sessions.get(id);
}
