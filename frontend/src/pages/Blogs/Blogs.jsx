import { useState } from "react";
import BlogsCard from "./BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";

let contentLength = 3;

if (window.innerWidth > 768 && window.innerWidth < 1125) {
  contentLength = 6;
}

if (window.innerWidth >= 1125) {
  contentLength = 9;
}

const Blogs = () => {
  const [dataSource, setDataSource] = useState(
    Array.from({ length: contentLength })
  );
  const [hasMore, setHashMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: contentLength })));
    }, 2000);
  };
  return (
    <>
      <div className="max-w-[1216px] m-auto text-white">
        <h2 className="mb-4 ml-6 text-xl font-bold">Latest Post</h2>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="absolute bottom-2">Loading...</h4>}
          // className="flex flex-wrap place-content-between"
          className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly relative"
        >
          {dataSource.map((item, index) => {
            return <BlogsCard key={index} />;
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Blogs;
