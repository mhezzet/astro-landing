import { Card } from "@components/react/card";
import { HorizontalWrapper } from "@components/react/horizontal-wraper";

type Props = {
  cards: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
};

export const ImagesScrollSlider = ({ cards }: Props) => {
  return (
    <HorizontalWrapper height="40rem" direction={1400}>
      <section className="cards">
        {cards.map(card => (
          <Card key={card.id} title={card.title} description={card.description} image={card.image} />
        ))}
      </section>
    </HorizontalWrapper>
  );
};
