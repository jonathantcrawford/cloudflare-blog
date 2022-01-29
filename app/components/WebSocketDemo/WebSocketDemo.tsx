import { useEffect, useState, useRef } from "react";





export function WebSocketDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
      webSocket.current = new WebSocket("ws://localhost:8788/web-socket");
      webSocket.current.onmessage = (message) => {
          setMessages((prev: any) => [...prev, message.data]);
      };
      return () => webSocket.current?.close();
  }, []);

  return (
      <p>
          <button
            type="button"
            className="button w-100p m-b-1rem"
            onClick={() => {
              webSocket.current?.send("hello")
            }}
          >
            Send message

          </button>
          <ul>
              {messages.map((message) => <li>{message}</li>)}
            </ul>
      </p>
  )

}

