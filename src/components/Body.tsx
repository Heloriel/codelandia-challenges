import Button from "./Button"

const Body = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center gap-y-4 flex-[2]">
        <h2 className="text-xl font-bold">HAYAO MIYAZAKI</h2>
        <h1 className="text-6xl font-bold">A VIAGEM DE CHIHIRO</h1>
        <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
        <div>
          <Button text="Assistir agora" url="#" />
          <Button text="Assistir agora" url="#" />
        </div>
      </div>
      <div className="flex flex-[3] items-start justify-center">
        <img src="/assets/image.png" />
      </div>
    </div>
  )
}

export default Body