import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Blogs/BlogList";
import Header from "../../components/Blogs/Header";
import SearchBar from "../../components/Blogs/SearchBar";
import { Link } from "react-router-dom";
import { blogList } from "../../config/data";
import "./styles.css"

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const [img, setImg] = useState("/assets/images/empty6.gif")

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    setImg(`/assets/images/empty${Math.floor(Math.random() * 10)}.gif`);
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Link className="blogs-goBack" to="/">
        <span> &#8592;</span> <span>Home</span>
      </Link>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList img={img} /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Blogs;
