import TextList from "./TextList";

const GalleryText = ({ data, img, onView }) => {
  return (
    <div className="text">
      <TextList data={data} img={img} onView={onView} />
    </div>
  );
};

export default GalleryText;
