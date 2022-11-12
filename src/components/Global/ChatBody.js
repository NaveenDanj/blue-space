import React from 'react'
import ChatUserDetails from './ChatBody/ChatUserDetails'

function ChatBody() {
  return (
    <div style={{ overflowY: 'auto' , borderTop : '1px solid rgba(255,255,255,0.1)' , height : 'calc(100vh - 134px)' , borderBottom : '1px solid rgba(255,255,255,0.1)'}} className='bg-[#1A1D21]'>
        <ChatUserDetails />
    </div>
  )
}

export default ChatBody