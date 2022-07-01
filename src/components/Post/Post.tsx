import { format } from "date-fns";
import { Heart } from "phosphor-react";
import pt_BR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface IPostProps {
  title: string;
  slug: string;
  children: string;
  date: string;
}

export const Post = (props: IPostProps) => {
  const formatedDate = format(new Date(props.date), "dd' de 'MMM', 'yyyy", {
    locale: pt_BR
  });

  return (
    <Link
      to={props.slug}
      className="flex flex-col w-full bg-white max-h=[259px] min-h-[163px] rounded shadow-post p-6 mb-12"
    >
      <div className="flex w-full flex-row justify-between mb-6">
        <span className="text-base text-zinc-500 font-lexend">{formatedDate}</span>
        <span>
          <Heart size={24} />
        </span>
      </div>
      <div className="mb-2">
        <h1 className="font-lexend text-2xl">{props.title}</h1>
      </div>
      <div>
        <span className="flex text-lg text-zinc-500 font-lexend text-justify w-full">
          {props.children}
        </span>
      </div>
    </Link>
  );
};
