import React from 'react'
import Header from '../../components/Global/Header'
import ChatHeader from '../../components/Global/ChatHeader'
import AddBookmarkSection from '../../components/Global/AddBookmarkSection'
import ChatBody from '../../components/Global/ChatBody'

function Home() {
  return (
    <div>
        <Header />

        <div className='flex'>
                
            <div className=' hidden md:block md:flex-none md:w-48 md:max-w-[100vh]'>
                asd
            </div>

            <div className='grow'>
                <ChatHeader />
                <AddBookmarkSection />
                <ChatBody />
            </div>
        </div>

    </div>
  )
}

export default Home