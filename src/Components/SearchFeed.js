import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { Api } from "./Api";

const SearchFeed = () => {
  const [video, setvideo] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    Api(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideo(data.items)
    );
  }, [searchTerm]);
  return (
    <div className="conatiner">
      <h2 className="p-4 pt-2">
        {searchTerm}
        <span style={{ color: "#f31503" }} className="ps-2">
          Videos
        </span>
      </h2>
      <Videos videos={video} />
    </div>
  );
};

export default SearchFeed;
