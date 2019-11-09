import React, { useEffect } from 'react'

import RaisedButton  from "material-ui/RaisedButton"

import MessageDisplayBox from '@/components/MessageDisplayBox'

import UserList from '@/components/UserList'

import Main from '@/components/Game/Main'
const ChatRoom = props => {
  const { actions, socket, uid, userlist } = props

  useEffect(() => {
    socket.on('enterUser', username =>  actions.updateMessages({ type: 'ENTER_MESSAGE', username }))
    socket.on('leaveUser', username => actions.updateMessages({ type: 'LEAVE_MESSAGE', username}))
    socket.on('updateUserList', userlist => actions.updateUserList(userlist))

  }, [])


  const handleLeaveChatRoom = () => {
    socket.emit('leave', uid)
    actions.leaveChatRoom()
    location.reload()
  }

  

  return(
    <div>
      <div className="chatroom-container">
        <div className="chatroom-left-block">
          <div className="chatroom-userlist">
            <UserList userlist={userlist} />
          </div>
        </div>
        <div className="chatroom-right-block">
          <div className="chatroom-otherfn">
            <RaisedButton
              className="chatroom-otherfn-leave"
              label="Dejar "
              primary={true}
              onClick={handleLeaveChatRoom}
            />
          </div>
            <div className="chatroom-messages">
              <MessageDisplayBox {...props} />
              <Main/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ChatRoom