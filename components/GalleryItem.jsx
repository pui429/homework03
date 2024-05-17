const GalleryItem = ({ item, onView, img }) => {
  const { id, imgurl, title } = item;
  return (
    <li onClick={() => onView(id)} className={id === img.id ? "on" : ""}>
      <img src={imgurl} alt={title} />
    </li>
  );
};

export default GalleryItem;
