import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./common/navigationbar";
import HomePage from "./components/home/homePage";
import LetterBoxPage from "./components/letterbox/letterboxpage";
import MyPage from "./components/mypage/mypage";
import StorePage from "./components/store/storepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ paddingBottom: "100px" }}>
          {/* 하단 바 공간 확보 */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="letterbox" element={<LetterBoxPage />} />
          </Routes>
          <NavigationBar /> {/* 항상 화면 하단에 표시 */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
