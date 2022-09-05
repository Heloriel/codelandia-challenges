import Card from "../../Card/Card";

export default function CardsSection() {
  return (
    <section className="flex w-full justify-center items-center md:py-40 px-4 pt-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:gap-y-16 md:gap-x-28 gap-4">
        <Card color="#FF6363" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
        <Card color="#63ECFF" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
        <Card color="#F363FF" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
        <Card color="#63FF73" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
        <Card color="#FFDD63" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
        <Card color="#6663FF" title="Título do Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
        </Card>
      </div>
    </section>
  );
}
