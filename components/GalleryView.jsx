import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";

const GalleryView = ({ data, img, onView, next, prev }) => {
  return (
    <div className="view">
      <GalleryBig data={data} img={img} />
      <GalleryList
        data={data}
        onView={onView}
        img={img}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default GalleryView;
