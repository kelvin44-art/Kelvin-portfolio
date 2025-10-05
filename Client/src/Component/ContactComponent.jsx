import github_logo from '../assets/github.png'

function ContactComponent({title, description}) {
  return (
    <li className='contact-box flex items-center gap-3 ml-3 border-2 mr-3 px-2 my-4'>
         <img src={github_logo} alt="" className='logo-boxes h-7 py-1 px-1 border-2'/>
            <div>
                <p className='font-bold text-2xl'>{title}</p>
                 <p>{description}</p>
            </div>
    </li>
  )
}

export default ContactComponent