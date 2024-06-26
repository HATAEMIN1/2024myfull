import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import { styled } from 'styled-components';

const TitleWrap = styled.h2`
  font-size: 10px;
  font-weight: bold;
  padding: 5px 16px;
  background: skyblue;
  display: inline-block;
  color: white;
  border-radius: 5px;
`;

function BlogViewPage(props) {
  const { blogId } = useParams();
  const [blogCon, setBlogCon] = useState(null);
  useEffect(() => {
    async function loadBlogCon() {
      try {
        const res = await axiosInstance.get(`/blog/${blogId}`);
        console.log(res.data);
        setBlogCon(res.data.blog);
      } catch (err) {}
    }
    loadBlogCon();
  }, []);
  console.log(blogId);
  if (!blogCon) {
    return null;
  }
  return (
    <div className='container m-auto p-4'>
      <h3>글보기</h3>
      <h4>title/ {blogCon.title}</h4>
      <hr className='my-4' />
      <p>{blogCon.content}</p>
      <TitleWrap>댓글</TitleWrap>
    </div>
  );
}

export default BlogViewPage;
