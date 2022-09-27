import React, { useState } from 'react'
const reactStomp = require ('react-stomp') //fix for missing dev types/react-stomp
const { SockJsClient } = reactStomp

const WebsocketHandler = () => {

  //https://auth0.com/docs/libraries/auth0-react#call-an-api -> integrating auth0 for calling
    const SOCKET_URL = "http://localhost:8080/ws-message"

    const [message, setMessage] = useState("template");

    let onConnected = () => {
      console.log("Connected!!")
    }

    let onMessageReceived = (msg: any) => {
      setMessage(msg?.message);
    }

    //server side documentation
    //https://github.com/trinopoty/socket.io-server-java
    return (
      <div>
        <SockJsClient
          url={SOCKET_URL}
          topics={["/dating/messages"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg: any) => onMessageReceived(msg)}
          debug={false}
        />
        <div>{`New message: ${message}`}</div>
      </div>
    );
  }

  export default WebsocketHandler;