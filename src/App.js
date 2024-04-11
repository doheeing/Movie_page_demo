import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Navbar/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import MoviePage from "./pages/Movies/MoviePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

//홈페이지 /
// 영화 전체 보여주는 페이지 /movies
//영화 디테일 보여주는 페이지 /movies/:id
// 추천영화 /movies/:id/recommadation
// 리뷰 /movies/:id/reviews

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Homepage />} />
          <Route path="/movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
