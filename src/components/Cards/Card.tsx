import Image from 'next/image'
interface CardProps {
  description: string;
  title: string;
  image: string;
}
export function Card({ image, title, description }: CardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Image height={80} width={80} layout="responsive" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
