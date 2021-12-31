import React, {useState } from 'react';
import EmojiCard from './EmojiCard';
import "./App.css"

const image = require("./boules2.png")

const App = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const [post, setPost] = useState("")
  // const [img, setImage] = useState(null)

  const updatePost = (event) => {
    setPost(event.target.value)
  }

  const addEmoji = (emoji) => {
    // setPost(post + emoji.emoji)
    let messageEditor = document.querySelector('.text-editor');

    console.log(messageEditor.selectionStart);
    messageEditor.setRangeText(`${emoji.emoji}`, messageEditor.selectionStart, messageEditor.selectionEnd, "end");

    setPost(messageEditor.value);

    messageEditor.focus();
  }

  return (
    <article className="container">
      <section className="container-top">
        <div className="container-img">
          <img src={image} alt="" />
        </div>

        <div className="container-text">
          <textarea 
            className="text-editor" 
            placeholder="Write a post"
            value={post}
            onChange={updatePost}
          >
          </textarea>

          {/* <div className="images">
            {
              img && <img src={img} />
            }
            <img src={image} alt="post" />
          </div> */}
        </div>
      </section>

      <div className="icon-section">
        <div>
          <i className="bi bi-emoji-smile" onClick={() => {setShowEmoji(!showEmoji)}}></i>
          <i className="bi bi-image"></i>
        </div>

        <button className="btn-publier">Publier</button>

        <EmojiCard 
          show={showEmoji} 
          animationShow="emoji-card-show"
          getEmoji={addEmoji}
        />
      </div>
    </article>
  );
};

export default App;
