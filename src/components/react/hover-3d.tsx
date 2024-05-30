import type { GetImageResult } from "astro";
import { useCallback, useEffect, useRef, useState } from "react";

const heroElement = document.getElementById("hero");

const x = 30,
  y = -40,
  z = 30;

interface IHover3DImage {
  image: GetImageResult;
}

export const Hover3DImage: React.FC<IHover3DImage> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coord, setCoord] = useState({ xCoord: 0, yCoord: 0 });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    if (!heroElement) return;

    const { offsetWidth: width, offsetHeight: height } = heroElement;

    const { clientX, clientY } = event;
    const xCoord = (clientX - width / 2) / width;
    const yCoord = (clientY - height / 2) / height;

    setCoord({ xCoord, yCoord });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!heroElement) return;

    heroElement.addEventListener("mousemove", handleMouseMove);
    heroElement.addEventListener("mouseenter", handleMouseEnter);
    heroElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroElement?.removeEventListener("mousemove", handleMouseMove);
      heroElement?.removeEventListener("mouseenter", handleMouseEnter);
      heroElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const xTransform = isHovered ? coord.xCoord * x : 0;
  const yTransform = isHovered ? coord.yCoord * y : 0;
  const zTransform = isHovered ? z : 0;

  return (
    <div className="image-content" style={{ display: isImageLoaded ? "flex" : "none" }}>
      <div
        className="image"
        onLoad={() => setIsImageLoaded(true)}
        style={{
          transform: `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px)`,
        }}
      >
        <img src={image.src} alt="hero" />
      </div>
    </div>
  );
};
