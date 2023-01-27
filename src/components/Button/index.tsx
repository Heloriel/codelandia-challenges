import clsx from "clsx";

interface IButtonProps {
  children: React.ReactNode;
  alternate?: boolean;
  className?: string;
}

export const Button = ({children, alternate, className = ""}: IButtonProps) => {
  return (
    <button className={
        clsx('rounded font-bold border-2 uppercase transition-colors',
          {
            'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': !alternate,
            'bg-neutral-900 border-white hover:bg-stone-900': alternate},
            className)
      }>
      {children}
    </button>
  )
}
