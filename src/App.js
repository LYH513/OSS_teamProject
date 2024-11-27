import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Layout_Components/Header';
import DetailPage from './Pages/DetailPage';
import Mypage from './Pages/MyPage';
import ReviewPage from './Pages/ReviewPage';

//Pages 폴더로부터 컴포넌트를 가져와서 라우터 연결  
function App() {
  return (
    <Routes>  
      <Route element={<Header/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/detail/:postId' element={<DetailPage/>}/>
        <Route path='/review/create' element={<ReviewPage/>}/>
        <Route path='/review/:reviewId' element={<ReviewPage/>}/>
        <Route path='/my' element={<Mypage/>}/>
        <Route path='/review/:reviewId/edit' element={<ReviewPage/>}/>
      </Route>
    </Routes>

  );
}

export default App;
