import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex w-full items-center px-6 py-4">
      <div>
        <img src="/assets/logo.svg" width={100} height={48.11} />
      </div>
      <div className='flex flex-1 justify-end gap-x-8'>
        <a href="#">
          <FiFacebook size={24} />
        </a>
        <a href="#">
          <FiInstagram size={24} />
        </a>
        <a href="#">
          <FiTwitter size={24} />
        </a>
        <a href="#">
          <FiYoutube size={24} />
        </a>
      </div>
    </header>
  )
}

export default Header