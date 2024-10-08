import { useEffect, useState } from "react"

import { createConnection } from "../../utils/chat"

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:3333")

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [roomId, serverUrl])

  return (
    <>
      <label>
        Server URL: <input onChange={(e) => setServerUrl(e.target.value)} value={serverUrl} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  )
}

const Chat = () => {
  const [roomId, setRoomId] = useState("general")
  const [show, setShow] = useState(false)
  return (
    <>
      <label>
        {`Choose the chat room: `}
        <select onChange={(e) => setRoomId(e.target.value)} value={roomId}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>{show ? "Close chat" : "Open chat"}</button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  )
}

export default Chat
