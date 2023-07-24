
import image1 from "../../src/assets/image1.jpg"
import image2 from "../../src/assets/image2.jpg"
import image3 from "../../src/assets/image3.jpg"
import image4 from "../../src/assets/image4.jpg"
import image5 from "../../src/assets/image5.jpg"
import image6 from "../../src/assets/image6.jpg"
import image7 from "../../src/assets/image7.jpg"
import image8 from "../../src/assets/image8.jpg"

import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";


const Gallery = () => {

    const Images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    return (
        <div className="container" >
          <h1 className="text-4xl text-center py-16" data-aos="fade-down">Visit our library Gallery</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter="2rem">
            {Images?.map((item, i) => {
              return (
                <img className="masonry__img" src={item} alt="" key={i}
                  style={{width: "100%", display: "block", borderRadius: "10px",}}/>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
};

export default Gallery;