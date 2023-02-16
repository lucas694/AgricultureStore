import "./BlogNews.css"
import ButtonDefault from "../Buttons/ButtonDefault";
import CardBlog from "../Cards/CardBlog";
import CardImgGreen from "../../Assets/CardsBlog/CardBlogGreen.png"
import CardImgTomatos from "../../Assets/CardsBlog/CardBlogTomatos.png"


const BlogNews = () => {
  return(
    <div className={"BlogNewsContainer"}>
      <div className={"BlogNewsContent"}>
        <div className={"BlogNewsText"}>
          <h3 className={"BlogNewsSubTitle"}>News</h3>
          <section className={"BlogNewsDesc"}>
            <h1 className={"BlogNewsTitle"}>Discover weekly content about organic food, & more</h1>
            <div>
              <ButtonDefault className={"WhiteBtn"} BtnText={"Shop Now"}/>
            </div>
          </section>
        </div>
        <div className={"BlogNewsCardContent"}>
          <CardBlog date={"25"}
                    img={CardImgGreen}
                    month={"Nov"}
                    user={"Rachi Card"}
                    title={"The Benefits of Vitamin D & How to Get It"}
                    desc={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
          />

          <CardBlog date={"25"}
                    img={CardImgTomatos}
                    month={"Nov"}
                    user={"Rachi Card"}
                    title={"Our Favourite Summertime Tommeto"}
                    desc={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}
          />

        </div>
      </div>
    </div>
  )
};export default BlogNews;