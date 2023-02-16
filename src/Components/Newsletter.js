import "./Newsletter.css"

const Newsletter = () => {
  return(
    <div className={"NewsletterContainer"}>
      <div className={"NewsletterContent"}>
        <h1 className={"NewsletterTitle"}>Subscribe to our Newsletter</h1>
        <div className={"NewsletterRight"}>
          <input type="text" placeholder={"Your Email Address"} className={"NewsletterInput"}/>
          <button className={"NewsletterBtn"}>Subscribe</button>
        </div>
      </div>
    </div>
  )
};export default Newsletter;