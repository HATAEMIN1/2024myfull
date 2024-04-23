import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axios';
import ListItem from './BlogComp/ListItem';

function BlogListPage(props) {
  const [blogs, setBlogs] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const res = await axiosInstance.get('/blog', { params: { page } });
        console.log(res.data.blogs);
        setBlogs(res.data.blogs);
        setTotalCnt(res.data.totalCnt);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(page);
  }, [page]);
  return (
    <>
      <div className='container m-auto p-4'>
        <h3>블로그</h3>
        <ul>
          {blogs.map((item, idx) => {
            return (
              <ListItem
                key={idx}
                item={item}
                idx={idx}
                no={totalCnt - page * 5 + idx}
              />
            );
          })}
        </ul>
        <div>pager</div>
      </div>
    </>
  );
}

export default BlogListPage;
