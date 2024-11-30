import s from "./CamperGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const CamperGallery = ({ gallery }) => {
  return (
    <ul className={s.ul}>
      {gallery.map((item) => (
        <ImageCard key={item.thumb} item={item} />
      ))}
    </ul>
  );
};

export default CamperGallery;
