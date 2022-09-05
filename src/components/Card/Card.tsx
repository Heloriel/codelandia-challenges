type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface IPropsCard {
  color: Color;
  children: string;
  title: string;
}

export default function Card({ color, children, title }: IPropsCard) {
  return (
    <div className="flex flex-col md:max-w-[340px] min-w-[340px] shadow-lg rounded overflow-hidden">
      <div className="h-[222px]" style={{ backgroundColor: color }}></div>
      <div className="flex flex-col w-full min-h-[200px] p-8">
        <span className="font-merriweather font-bold text-2xl mb-6 text-zinc-900">{title}</span>
        <span className="font-lato leading-relaxed text-zinc-600 text-lg">{children}</span>
      </div>
    </div>
  );
}
