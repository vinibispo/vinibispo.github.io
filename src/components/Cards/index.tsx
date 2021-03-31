import { Card } from "./Card";

const cards = [
  {
    image: "assets/upmedal.png",
    title: "UpMedal",
    description:
      "Um dos responsáveis para converter um site em Angular para ReactJS",
  },
  {
    image: "assets/embalar.png",
    title: "Embalar",
    description:
      "Criei um sistema administrativo para automatizar a gestão de notas fiscais e estoque",
  },
  {
    image: "assets/dtmoney.png",
    title: "DTMoney",
    description: "Um projeto para controlar suas finanças",
  },
];
export function Cards() {
  return (
    <div className="p-10 grid grid-cols-1 bg-white sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 border-white">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}
