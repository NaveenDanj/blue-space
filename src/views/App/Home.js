import React from 'react'
import Header from '../../components/Global/Header'
import ChatHeader from '../../components/Global/ChatHeader'
import AddBookmarkSection from '../../components/Global/AddBookmarkSection'
import ChatBody from '../../components/Global/ChatBody'

function Home() {
  return (
    <div>
        <Header />
        <ChatHeader />
        <AddBookmarkSection />
        <ChatBody />
    </div>
  )
}

export default Home