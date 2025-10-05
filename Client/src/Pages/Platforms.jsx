import React from 'react'

import ContactComponent from '../Component/ContactComponent'

function Platforms() {
  return (
    <div className='table md:w-120 md:h-140 border-2 w-98'>
        <ul className='py-2 px-2'>
            <li className='border-2 font-bold text-3xl px-2 py-4 my-2 mx-2'>
                CONNECT WITH ME
            </li>
            <ContactComponent title={"LinkedIn"} description={"Professional profile"}/>
            <ContactComponent title={"Twitter"} description={"Thoughts and updates"}/>
            <ContactComponent title={"Github"} description={"Code & Projects"}/>
            <ContactComponent title={"Whatsapp"} description={"Quick Chats"}/>

        </ul>

    </div>
  )
}

export default Platforms