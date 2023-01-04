import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between mb-20">
      <div className='flex-1'>
        <img src="/assets/logo.svg" width={100} height={48.11} />
      </div>
      <div className='flex flex-1 justify-end gap-x-4'>
        <FiFacebook size={24} />
        <FiInstagram size={24} />
        <FiTwitter size={24} />
        <FiYoutube size={24} />
      </div>
    </header>
  )
}

export default Header