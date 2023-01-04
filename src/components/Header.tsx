import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex w-full items-center bg-gray-500 justify-between">
      <div className='flex-1 bg-blue-500'>
        <img src="/assets/logo.png" width={100} height={48.11} />
      </div>
      <div className='flex flex-1 justify-end gap-x-4 bg-red-500'>
        <FiFacebook size={24} />
        <FiInstagram size={24} />
        <FiTwitter size={24} />
        <FiYoutube size={24} />
      </div>
    </header>
  )
}

export default Header