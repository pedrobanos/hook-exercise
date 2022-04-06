import { Routes,Route, Navigate } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostList from './views/Posts/PostList';
import PostDetail from './views/Posts/PostDetail';
import { getCommentDetails, getPostDetails } from './Services/RoutesServices';
import CommentList from './views/Comments/CommentsList';
import CommentDetail from './views/Comments/CommentDetail';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList/>} />
        <Route path="/comments" element={<CommentList/>} />
        <Route path="/posts/:id" element={<PostDetail fetchFn={getPostDetails}/>} />
        <Route path="/comments/:id" element={<CommentDetail fetchFn={getCommentDetails}/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </div>
  );
}

export default App;
