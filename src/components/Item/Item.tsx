interface IItemProps {
  id: string;
}

export const Item = (props: IItemProps) => {
  return (
    <a href="#" className="bg-zinc-300 flex min-w-full min-h-full justify-center items-center">
      <img src={`/assets/images/items/${props.id}.png`} className="w-full h-auto object-contain group-hover:scale-110 transition-transform" />
    </a>
  );
};
