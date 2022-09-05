interface IDiscountProps {
  value: string;
}

export const Discount = (props: IDiscountProps) => {
  return (
    <section className="flex w-full h-[60px] bg-zinc-900 justify-center items-center">
      <span className="font-montserrat text-white">{`Ganhe R$ ${props.value} de desconto no frete.`}</span>
    </section>
  );
};
