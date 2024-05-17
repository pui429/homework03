import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GalleryItem from "./GalleryItem";

const GalleryList = ({ data, onView, img, next, prev }) => {
  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} onView={onView} img={img} />
        ))}
      </ul>
      <p className="btn">
        <button>
          <BsChevronLeft onClick={() => prev(img.id)} />
        </button>
        <button onClick={() => next(img.id)}>
          <BsChevronRight />
        </button>
      </p>
    </>
  );
};

export default GalleryList;
