import { useEffect, useState, useRef } from "react";

export function WebSocketDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    //@ts-ignore
    webSocket.current = new WebSocket(`${window.ENV.WS_PROTOCOL}//${window.ENV.HOST}/web-socket`);
    webSocket.current.onmessage = (message) => {
      setMessages((prev: any) => [...prev, message.data]);
    };
    return () => webSocket.current?.close();
  }, []);

  return (
    <div>
    <p>
      <button
        type="button"
        className="button w-100p m-b-1rem"
        onClick={() => {
          webSocket.current?.send("hello");
        }}
      >
        Send message
      </button>
    </p>
    <ul>
      {messages.map((message, idx) => (
          <li key={idx}>{message}</li>
        ))}
    </ul>
    </div>
  );
}
