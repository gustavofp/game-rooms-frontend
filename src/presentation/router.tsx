import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeRoomsPage } from "main/factories/pages/rooms";
import { RecoilRoot } from "recoil";
import { makePlayerPage } from "main/factories/pages/player";

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={makePlayerPage({})} />
          <Route path="/rooms" element={makeRoomsPage({})} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
