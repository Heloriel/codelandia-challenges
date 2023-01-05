import { FiPlay } from "react-icons/fi"
import Button from "./Button"

const Body = () => {
  return (
    <div className="flex flex-wrap-reverse px-6">
      <div className="flex flex-col justify-center gap-y-12 md:flex-[2]">
        <div>
          <h2 className="text-xl font-bold">HAYAO MIYAZAKI</h2>
          <h1 className="text-6xl md:text-7xl font-black">A VIAGEM DE CHIHIRO</h1>
        </div>
        <p className="text-justify">Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
        <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
          <Button text="Assistir agora" url="#" icon={<FiPlay size={22} />} />
          <Button text="assista o trailer" url="#" outline />
        </div>
      </div>
      <div className="flex md:flex-[3] items-start justify-center md:justify-end min-w-[300px]">
        <img src="/assets/image.png" className="image-element" />
      </div>
    </div>
  )
}

export default Body