import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar,Feed,VideoDetail, ChannelDetail,SearchFeed } from "./Components";
function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <div className="container my-3">
          <NavBar />
          </div>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
