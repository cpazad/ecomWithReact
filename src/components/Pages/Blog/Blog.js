import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import sparrow from "../../../images/sparrow.jpg";
import Blogsidebar from "../../SiderBar/BlogSiderBar/Blogsidebar";
import "./Blog.css";

const Blog = () => {
  // filler data
  const filler = [
    {
      id: "1",
      title: "20 Up-and-Comers to Watch in the Travelling Industry",
      date: "09",
      month: "August",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae.",
      photo: { sparrow },
    },
    {
      id: "2",
      title: "20 Up-and-Comers to Watch in the Travelling Industry",
      date: "09",
      month: "August",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae.",
      photo: { sparrow },
    },
  ];

  // Use state
  const [posts, setPosts] = useState(filler);
  const [page, setPage] = useState(0);
  // Use Effect

  useEffect(() => {
    fetch("http://localhost:8000/blog?_page=1&_limit=3")
      .then((data) => {
        let total_post = data.headers.get("x-total-count");
        setPage(total_post/3);
        return data.json();
      })
      .then((data) => setPosts(data));
  }, []);

  function updateProduct(page_number) {
    let page = page_number.selected + 1;
    fetch("http://localhost:8000/blog?_page=" + page + " &_limit=3")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }

  return (
    <>
      <section className="post-all">
        <Container>
          <Row>
            <Col md={9}>
              <section className="Post-section">
                <Container>
                  <h3 className="display-4 my-3"> Our Latest Posts </h3>
                  <Row>
                    {posts.map((data) => (
                      <Col info={data} md={6}>
                        <div className="post">
                          <div className="postImg">
                            <img src={data.photo} alt=" blog details " />
                          </div>
                          <div className="postDetails">
                            <div className="post-date">
                              <span className="date"> {data.date} </span>
                              <span className="month"> {data.month} </span>
                            </div>
                            <div className="post-text">
                              <h4 className="post-title text-white">
                                {data.title}
                              </h4>
                              <p className="text-white">{data.detail}</p>
                              <Button variant="Link" className="text-white">
                                {" "}
                                Read more &gt;{" "}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col>
                      <ReactPaginate
                        pageCount={9}
                        containerClassName="pagination justify-content-center my-3"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="...."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        previousLabel="<<"
                        nextLabel=">>"
                        activeClassName="active"
                        onPageChange={updateProduct}
                      />
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>

            {/* Sider bar Section */}

            <Col md={3}>
              <Blogsidebar></Blogsidebar>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
