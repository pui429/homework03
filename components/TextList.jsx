import TextItem from "./TextItem";

const TextList = ({ data, img, onView }) => {
  return (
    <ul className="textlist">
      {data.map((item) => (
        <TextItem key={item.id} item={item} img={img} onView={onView} />
      ))}
    </ul>
  );
};

export default TextList;
