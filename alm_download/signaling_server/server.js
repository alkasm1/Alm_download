import { WebSocketServer } from "ws";
import crypto from "crypto";

const wss = new WebSocketServer({ port: 8080 });
const clients = new Map();

wss.on("connection", (ws) => {
  const id = crypto.randomUUID();
  clients.set(id, ws);

  ws.send(JSON.stringify({ type: "welcome", id }));

  ws.on("message", (msg) => {
    const data = JSON.parse(msg);

    if (data.to) {
      const target = clients.get(data.to);
      if (target) target.send(msg);
    }
  });

  ws.on("close", () => clients.delete(id));
});

console.log("Signaling server running on ws://localhost:8080");
