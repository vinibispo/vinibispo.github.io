interface CardProps {
  description: string;
  title: string;
  image: string;
}
export function Card({ image, title, description }: CardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-80 h-80" src={image} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
