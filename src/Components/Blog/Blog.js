import "./Blog.css"
import BlogBanner from "./BlogBanner";
import CardBlog from "../Cards/CardBlog";
// Cards Bg
import CardImgGreen from "../../Assets/CardsBlog/CardBlogGreen.png";
import CardImgTomatos from "../../Assets/CardsBlog/CardBlogTomatos.png";
import CardImgCarrot from "../../Assets/CardsBlog/CardBlogCarrot.png";
import CardImgOrganic from "../../Assets/CardsBlog/CardBlogOrganic.png";
import CardImgFruits from "../../Assets/CardsBlog/CardBlogFruits.png";
import CardImgPlastics from "../../Assets/CardsBlog/CardBlogPlastics.png";

const Blog = () => {
  const CardsBlog = [
    {id:1 , date:"25", img:CardImgGreen, month:"Nov", user:"Rachi Card", title:"The Benefits of Vitamin D & How to Get It", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
    {id:2 , date:"25", img:CardImgTomatos, month:"Nov", user:"Rachi Card", title:"Our Favorite Summertime Tomato", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
    {id:3 , date:"23", img:CardImgCarrot, month:"Dec", user:"Rachi Card", title:"Benefits of Vitamin C & How to Get It", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
    {id:4 , date:"28", img:CardImgOrganic, month:"Jan", user:"Rachi Card", title:"Research More Organic Foods", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
    {id:5 , date:"24", img:CardImgFruits, month:"Nov", user:"Rachi Card", title:"Everyday Fresh Fruites", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
    {id:6 , date:"25", img:CardImgPlastics, month:"Nov", user:"Rachi Card", title:"Don’t Use Plastic Product! it’s Kill Nature", desc:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"},
  ]
  return(
    <div className={"BlogContainer"}>
      <BlogBanner/>
      <div className={"BlogContentCards"}>
        {CardsBlog.map((item) => {
          return(
            <CardBlog key={item.id}
                      date={item.date}
                      img={item.img}
                      month={item.month}
                      user={item.user}
                      title={item.title}
                      desc={item.desc}
            />
          )
        })}
      </div>

    </div>
  )
};export default Blog;