import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import  "./styles/App.css"
function App() {
  const [posts, setPosts] = useState([
    {id:1, title : 'Javascript', body: 'Description'},
    {id:2, title : 'Javascript-2', body: 'Description'},
    {id:3, title : 'Javascript-3', body: 'Description'},
  ])
  const [posts2, setPosts2] = useState([
    {id:1, title : 'Python', body: 'Description'},
    {id:2, title : 'Python-2', body: 'Description'},
    {id:3, title : 'Python-3', body: 'Description'},
  ])
 
  
  
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Текст поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
     <PostList posts={posts} title={'Посты про jS'}/>
     <PostList posts={posts2} title={'Посты про Python'}/>
    </div>
  );
}

export default App;
