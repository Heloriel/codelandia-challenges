interface IButtonProps {
  text: string;
  url: string;
}

const Button = ({text, url}: IButtonProps) => {
  return (
    <a href={url}>{text}</a>
  )
}

export default Button