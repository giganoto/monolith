import { useState } from "react";
import BlogsCard from "./BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 9 }));
  const [hasMore, setHashMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 9 })));
    }, 1000);
  };
  return (
    <>
      <div className="max-w-[1216px] m-auto text-white">
        <h2 className="mb-4 text-xl font-bold">Latest Post</h2>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="flex-nowrap">Loading...</h4>}
          className="flex flex-wrap place-content-between"
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
