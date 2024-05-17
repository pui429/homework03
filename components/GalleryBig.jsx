const GalleryBig = ({ data, img }) => {
  const { id, title, imgurl } = img;
  return (
    <div className="bimg">
      <div className="title">
        <h2>{title}</h2>
        <p>
          {id} / {data.length}
        </p>
      </div>
      <p>
        <img src={imgurl} alt={title} />
      </p>
    </div>
  );
};

export default GalleryBig;
