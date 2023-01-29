import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from "./";
import { Api } from "./Api";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [video, setvideo] = useState([]);

  useEffect(() => {
    Api(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideo(data.items)
    );
  }, [selectedCategory]);
  return (
    <div className="row gx-0">
      <div className="col-2 ps-3" style={{ borderRight: "1px solid #3d3d3d" }}>
        <Sidebar
          selected={selectedCategory}
          setSelected={setselectedCategory}
        />
        <p>Copy right Youtbe India</p>
      </div>
      <div className="conatiner col-10">
        <h2 className="p-4 pt-2">
          {selectedCategory}
          <span style={{ color: "#f31503" }} className="ps-2">
            Videos
          </span>
        </h2>
        <Videos videos={video} />
      </div>
    </div>
  );
};

export default Feed;
