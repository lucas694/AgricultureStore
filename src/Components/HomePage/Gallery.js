import "./Gallery.css"
import CardImg1 from "../../Assets/HomePage/GalleryImg1.jpg"
import CardImg2 from "../../Assets/HomePage/CardImg2.jpg"
import CardImg3 from "../../Assets/HomePage/CardImg3.jpg"

const Gallery = () => {
  return(
    <div className={"GalleryContainer"}>
      <div className={"GalleryCard"}>
        <img src={CardImg1} className={"GalleryCardImg"} alt={"a"}/>
        <div className={"GalleryCardText"}>
          <span>Organic Juice</span>
        </div>
      </div>
      <div className={"GalleryCard"}>
        <img src={CardImg2} className={"GalleryCardImg"} alt={"a"}/>
        <div className={"GalleryCardText"}>
          <span>Organic Juice</span>
        </div>
      </div>
      <div className={"GalleryCard"}>
        <img src={CardImg3} className={"GalleryCardImg"} alt={"a"}/>
        <div className={"GalleryCardText"}>
          <span>Organic Juice</span>
        </div>
      </div>

    </div>
  )
}; export default Gallery;