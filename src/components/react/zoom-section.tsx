import { useRef } from "react";
import hover3d from "../../libs/hover";

export const ZoomSection = ({ images }: { images: string[] }) => {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <section className="zoom-section-container" ref={hero}>
      <div className="zoom-section">
        <div
          className="image"
          style={{
            height: "39rem",
            width: "100%",
          }}
        >
          <img
            src={images[0]}
            alt="bulb tree"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: hover.transform,
              scale: 1.2,
              background: "var(--color-bg)",
              width: "100%",
              height: "100%",
            }}
          />

          <img
            src={images[1]}
            alt="monkey"
            className="monkey"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              objectPosition: "50% 0%",
              transform: hover2.transform,
              transition: hover2.transition,
            }}
          />

          <img
            src={images[2]}
            alt="smoke"
            className="smoke"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: hover3.transform,
              transition: hover3.transition,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ZoomSection;
