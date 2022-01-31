import { useEffect, useState, useRef } from "react";

export function WebSocketDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  const [webSocketIsConnected, setWebSocketIsConnected] = useState(false);

  const openConnection = () => {
    setWebSocketIsConnected(true);
    setMessages([]);

    webSocket.current = new WebSocket(
      //@ts-ignore
      `${window.ENV.WS_PROTOCOL}//${window.ENV.HOST}/web-socket`
    );
    webSocket.current.onmessage = (message) => {
      setMessages((prev: any) => [...prev, message.data]);
      if (message.data == "connection closed") closeConnection();
    };
  };

  const closeConnection = () => {
    setWebSocketIsConnected(false);
    webSocket.current?.close(1000);
  };

  useEffect(() => {
    return () => webSocket.current?.close(1000);
  }, []);

  return (
    <div className="flex flex-direction-column">
      <p>
        <button
          type="button"
          className="button w-100p m-b-1rem"
          onClick={() => openConnection()}
          disabled={webSocketIsConnected}
        >
          {webSocketIsConnected
            ? "...WebSocket is connected"
            : "Open WebSocket Connection"}
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
