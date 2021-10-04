import "./gallery.css";
import Img1 from "./images/gallery-img-1.jpg";
import Img2 from "./images/gallery-img-2.jpg";
import Img3 from "./images/gallery-img-3.jpg";
import Img4 from "./images/gallery-img-4.jpg";
import Img5 from "./images/gallery-img-5.jpg";
import Img6 from "./images/gallery-img-6.jpg";

const Gallery = () => {
  return (
    <section className="section-3">
      <h1 className="section-heading">Gallery</h1>
      <div className="gallery">
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img1} className="food-img" alt="Pancakes" />
          <h3 className="food-name">Pancakes</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img2} className="food-img" alt="Cupcakes" />
          <h3 className="food-name">Cupcakes</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img3} className="food-img" alt="Hummus" />
          <h3 className="food-name">Hummus</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img4} className="food-img" alt="Hamburger" />
          <h3 className="food-name">Hamburger</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img5} className="food-img" alt="Salmon" />
          <h3 className="food-name">Salmon</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
        <a href="/" className="gallery-link" title="Order Now">
          <img src={Img6} className="food-img" alt="Vegetables" />
          <h3 className="food-name">Vegetables</h3>
          <p className="food-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            commodi possimus iure hic excepturi. Corporis!
          </p>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
