import { useState } from "react";
import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import GalleryData from "./GalleryData";
import "./Gallery.scss";

const Gallery = () => {
  const [data, setData] = useState(GalleryData);
  const [img, setImg] = useState(data[0]);
  const [cnt, setCnt] = useState(0);
  const onView = (id) => {
    setImg(data.find((item) => item.id === id));
  };
  const next = (cnt) => {
    if (cnt === 5) return setImg(data.find((item) => item.id === 1));
    return setImg(data.find((item) => item.id === cnt + 1));
  };
  const prev = (cnt) => {
    if (cnt === 1) return setImg(data.find((item) => item.id === 5));
    setImg(data.find((item) => item.id === cnt - 1));
  };
  return (
    <div className="wrap">
      <GalleryView
        data={data}
        img={img}
        onView={onView}
        next={next}
        prev={prev}
      />
      <GalleryText data={data} img={img} onView={onView} />
    </div>
  );
};

export default Gallery;
