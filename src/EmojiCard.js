import React, {useRef} from 'react';
import Picker from 'emoji-picker-react';
import "./App.css"

const EmojiCard = ({show, getEmoji, animationShow}) => {
  const sectionRef = useRef()

  const onEmojiClick = (event, emojiObject) => {
    getEmoji(emojiObject);
  };

  return (
    <section 
      ref={sectionRef}
      className={`emoji-card ${animationShow}`}
      style={{ display: show ? "block":"none" }}
    >
      <Picker 
        onEmojiClick={onEmojiClick}
        pickerStyle={{ 
          boxShadow: "0 2px 4px rgb(143, 142, 142)" ,
          fontFamily: "ubuntu"
        }}
        preload={true}
      />
    </section>
  );
};

export default EmojiCard;
