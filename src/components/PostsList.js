import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){
    
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return(
    <>
    { isPosting ? <Modal onClose = {onStopPosting}>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    </Modal> : false};
    <ul className={classes.posts}>
      <Post author= {enteredAuthor} body={enteredBody}/>
      <Post author= "Raj" body="Node.js is Great!"/>
      <Post author= "Rishav" body="Web-dev is awesome. Great Course!"/>
    </ul>
    </>
    );
}

export default PostsList;