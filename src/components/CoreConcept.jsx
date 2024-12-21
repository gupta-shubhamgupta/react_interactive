export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Stylized atom" />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
