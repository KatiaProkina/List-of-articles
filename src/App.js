import React, { useMemo, useState } from "react";
import MyModal from "./components/MyModal/MyModal";
import PostForm from "./components/PosrForm";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";


import  "./styles/App.css"
function App() {
  const [posts, setPosts] = useState([
    {id:1, title : 'Первый пост', body: 'Текст поста'},
    {id:2, title : 'Второй пост' , body: 'Текст поста'},
    {id:3, title : 'Третий пост', body: 'Текст поста'},
  ])

  const[filter,setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false)
 
  const sortedPosts = useMemo(()=>{
    console.log('ОТБРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ')
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    
      return posts

  },[filter.sort, posts])

  const sortedAndSearchPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query,sortedPosts])
 
  const createPost = (newPost) =>{
        setPosts([...posts,newPost])
        setModal(false)
  }
  //Получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !==post.id))

  }


  return (
    <div className="App">
      <MyButton style = {{marginTop:'30px'}}onClick={()=> setModal(true)}>
        Создать пост
        </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create = {createPost}/>
      </MyModal>
      
     <hr style={{margin: '15px 0'}}/>
    <PostFilter filter={filter} setFilter={setFilter}/>
       <PostList remove = {removePost} posts={sortedAndSearchPosts} title={'Посты про jS'}/>

    </div>
  );
}

export default App;
