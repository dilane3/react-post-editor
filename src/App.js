import React, {useRef, useState } from 'react';
import EmojiCard from './components/EmojiCard';
import "./App.css"
import Post from './components/Post';
import Modal from './components/modal';

const image = require("./boules2.png")

const App = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const [showModal, setShowModal] = useState({
    status: false,
    file: null
  })
  const [post, setPost] = useState("")
  const [img, setImage] = useState(null)
  const [posts, setPosts] = useState([])
  const inputFileRef = useRef()

  const updatePost = (event) => {
    setPost(event.target.value)
  }

  const addEmoji = (emoji) => {
    let messageEditor = document.querySelector('.text-editor');

    console.log(messageEditor.selectionStart);
    messageEditor.setRangeText(`${emoji.emoji}`, messageEditor.selectionStart, messageEditor.selectionEnd, "end");

    setPost(messageEditor.value);

    messageEditor.focus();
  }

  const handleImagePreview = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleSelectImage = (e) => {
    handleImagePreview(e.target.files[0])
  }

  const createPost = () => {
    if (post.length > 0) {
      const postsClone = [...posts]

      const id = postsClone.length === 0 ? 1:postsClone[postsClone.length-1].id

      const newPost = {
        id,
        content: post,
        file: img ? img:null,
        date: Date.now()
      }


      postsClone.push(newPost)

      setPosts(postsClone)

      setPost("")
      setImage(null)
    }
  }

  const displayModalImage = (file, status) => {
    setShowModal({file, status})
  }

  return (
    <main className="container-fluid">
      <article className="container">
        <section className="container-top">
          <div className="container-img">
            <img src={image} alt="" />
          </div>

          <textarea 
            className="text-editor" 
            placeholder="Write a post..."
            value={post}
            onChange={updatePost}
          >
          </textarea>
        </section>
        <div className="container-text" style={{display: img ? "block":"none"}}>
          <div className="images">
            {
              img && <img src={img} />
            }

            <span className="delete-image" onClick={() => setImage(null)}>&times;</span>
          </div>
        </div>

        <div className="icon-section">
          <div>
            <i className="bi bi-emoji-smile" onClick={() => {setShowEmoji(!showEmoji)}}></i>
            <i className="bi bi-image" onClick={() => inputFileRef.current.click()}></i>

            <input 
              ref={inputFileRef} 
              type="file" 
              hidden 
              accept="image/*" 
              onChange={handleSelectImage}  
            />
          </div>

          <button className="btn-publier" onClick={() => createPost()}>Publier</button>

          <EmojiCard 
            show={showEmoji} 
            animationShow="emoji-card-show"
            getEmoji={addEmoji}
          />
        </div>
      </article>

      {
        posts.reverse().map(post => {
          return <Post key={post.id} post={post} onShowImage={(file) => displayModalImage(file, true)} />
        })
      }

      {
        showModal.status && (
          <Modal show={showModal.status} file={showModal.file} onCloseModal={() => displayModalImage(null, false)} />
        )
      }
    </main>
  );
};

export default App;
