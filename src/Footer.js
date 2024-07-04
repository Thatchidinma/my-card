import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareXTwitter, faInstagramSquare, faGithubSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <div className=' bg-[#161619]  py-8 flex justify-center gap-5 lg:gap-12'>
      <a href="https://twitter.com/Thatchidinma" target="blank" className='hover:text-black'>
        <FontAwesomeIcon icon={faSquareXTwitter}  className="w-8 h-8 p-1" />
      </a>
      <a href='https://web.facebook.com/Lizzmckingpin' target="blank" className='hover:text-blue-400'>
      <FontAwesomeIcon icon={faFacebookSquare}  className="w-8 h-8 p-1" />
      </a>
      <a href='https://www.instagram.com/thatchidinma/' target="blank" className= 'hover:text-pink-600'>
      <FontAwesomeIcon icon={faInstagramSquare}  className="w-8 h-8 p-1" />
      </a>
      <a href='https://github.com/Thatchidinma'target="blank" className='hover:text-blue-400'>
      <FontAwesomeIcon icon={faGithubSquare}  className="w-8 h-8 p-1" />
      </a>
    </div>
  );
}
