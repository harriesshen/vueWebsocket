import { ref, reactive, inject, toRefs } from "vue";
//ref
export const socketService = () => {
  const ws = new WebSocket("ws://localhost:3000");
  ws.onopen = () => {
    console.log("open connection");
  };

  ws.onclose = () => {
    console.log("close connection");
  };

  ws.onmessage = (msg) => {
    const { addMsg } = inject("addMsg");
    console.log("wsMSG", msg);
    addMsg(msg);
  };
  const closeWs = () => {
    ws.close();
  };
  const SendMessage = (msg) => {
    ws.send(msg);
  };
  return { closeWs, SendMessage };
};
