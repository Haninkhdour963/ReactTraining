import "./Article.css";

// const myData = {
//   name: "Heno Nice girl",
//   email: "heno999@gmail.com",
//   address: "Amman"
// };

// function Article({name1,email2,address2}) {
//   return (
//     <div className="article-container">
//       <h1>Name: {name1}</h1>
//       <h3>Email: {email2}</h3>
//       <h3>Address: {address2}</h3>
//       <button
//         className={myData.email === "heno999@gmail.com" ? "btnStyle" : "btnStyle2"}
//       >
//         Go To My Article
//       </button>
//     </div>
//   );
// }
function Article({ name, email, address,content="no content",children }) {

  return (
    <div className="article-container">
      <h1>Name: {name="hanoon"}</h1>
      <h3>Email: {email="hi@gmail.com"}</h3>
      <h3>Address: {address="Hebron"}</h3>
      <h3>children: {children}</h3>
      <br/>
        <h1>Name: {name="khdour"}</h1>
      <h3>Email: {email="hay@gmail.com"}</h3>
      <h3>Address: {address="Hebron"}</h3>
      <button
        className={email === "heno999@gmail.com" ? "btnStyle" : "btnStyle2"}
      >
        Go To My Article
      </button>
      <p>content:{content}</p>
        <p>{children}</p>
    </div>
  );
}

// Usage example (somewhere else in your app):
<Article name="Heno Nice girl" email="heno999@gmail.com" address="Amman" />



export default Article;
