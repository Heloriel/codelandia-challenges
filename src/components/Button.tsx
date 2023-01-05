import clsx from "clsx";
import React from "react";

interface IButtonProps {
  text: string;
  url: string;
  outline?: boolean;
  icon?: React.ReactNode;
}

const Button = ({text, url, outline = false, icon}: IButtonProps) => {
  return (
    <a
      href={url}
      className={
        clsx(
          `flex w-full items-center justify-center -skew-x-[27deg] border-2 border-challenge-green px-10 py-2`,
          { 'bg-challenge-green hover:brightness-[0.95]': !outline,
            'hover:bg-challenge-green': outline,
          })}>
      {icon && <span className="inline-block mr-4 skew-x-[27deg]">{icon}</span>}
      <span className="inline-block skew-x-[27deg] text-base uppercase font-medium whitespace-nowrap">{text}</span>
    </a>
  )
}

export default Button