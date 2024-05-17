const TextItem = ({ item, img, onView }) => {
  const { title } = item;
  const { id, desc } = img;
  return (
    <li className={item.id === id ? "on" : ""} onClick={() => onView(item.id)}>
      <strong>{title}</strong>
      <span>{desc}</span>
    </li>
  );
};

export default TextItem;
