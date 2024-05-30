type Props = {
  title: string;
  description: string;
  image: string;
};

export const Card = ({ description, image, title }: Props) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <p className="new">New</p>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <img
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay"></div>
    </div>
  );
};
