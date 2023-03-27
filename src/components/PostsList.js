import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList(){
    return(
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author= "Aman" body="React.js is awesome!"/>
      <Post author= "Raj" body="Node.js is Great!"/>
      <Post author= "Rishav" body="Web-dev is awesome. Great Course!"/>
    </ul>
    </>
    );
}

export default PostsList;