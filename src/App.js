import React from 'react'
import Image from './img/images.jpg'

import './App.css';

function App() {
  const [comment, setcomment] = React.useState()
  const [allTheComments, setAllTheComments] = React.useState([])

  function TextArea(eventTextArea){
    setcomment(eventTextArea.target.value)
  }

  function ClickButton() {
    const allTheCommentsBefore = [...allTheComments,comment]

      setAllTheComments(allTheCommentsBefore)
  }

  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={TextArea}></textarea>
      <button onClick={ClickButton}>comentar</button>

      <ul>
        {allTheComments.map ( comments => (
          <li key={comments} > {comments} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
