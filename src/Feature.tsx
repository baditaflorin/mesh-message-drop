import { useState } from "react";
import { useSharedMessages } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

export function Feature({ room, config }: { room: YRoom | null; config: MeshConfig }) {
  const drop = useSharedMessages(room);
  const [body, setBody] = useState("");
  const send = () => {
    if (drop.send(body)) setBody("");
  };
  return (
    <main className="feature-placeholder">
      <p className="eyebrow">Quiet room chat</p>
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <div className="composer">
        <label htmlFor="message-body">Your message</label>
        <textarea
          id="message-body"
          value={body}
          maxLength={1000}
          placeholder="Leave a thought for the room"
          onChange={(event) => setBody(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              send();
            }
          }}
        />
        <button type="button" onClick={send} disabled={!body.trim()}>
          Drop message
        </button>
      </div>
      <p className="feature-status" aria-live="polite">
        {drop.messages.length} shared {drop.messages.length === 1 ? "message" : "messages"}
      </p>
      <ol className="shared-list" aria-label="Shared messages">
        {drop.messages.map((message) => (
          <li key={message.id}>
            <strong>{message.body}</strong>
            <span>from {message.authorId}</span>
            {message.authorId === room?.peerId ? (
              <button type="button" onClick={() => drop.remove(message.id)}>
                Remove
              </button>
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
}
