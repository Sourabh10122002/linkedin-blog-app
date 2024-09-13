import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { likePost, addComment, deletePost } from "../../redux/slices/postSlice";
import Header from "../Header/Header";
import { profiles } from "../ProfilePage/profiles";
import './FeedPage.css';

export const FeedPage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleLike = (id) => {
    dispatch(likePost(id));
  };

  const handleAddComment = (id) => {
    if (comment.trim()) {
      dispatch(addComment({ id, comment }));
      setComment("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <Header />
      <div className="main-box">
        <div className="main-container">
          <main className="inner-main">
            <div className="inner-right">
              <section className="main-profile">
                <div className="profile-box">
                  <div className="mini-block">
                    <img
                      className="bg-profile"
                      src="bg profile.jpg"
                      alt="Background"
                    />
                  </div>
                  <div className="text">
                    <div className="profile-dd">
                      <img
                        className="profile-aa"
                        src="linkdin profile.jpeg"
                        alt="Profile"
                      />
                    </div>
                    <h4>Sourabh Rawat</h4>
                    <h5>
                      Full Stack Developer | Javascript | Css | React.js |
                      Node.js | Frontend Developer
                    </h5>
                  </div>
                </div>
                <div className="connect">
                  <span className="row">
                    Profile viewers <p className="p-tag">124</p>
                  </span>
                  <span className="row">
                    Your network <p className="p-tag">421</p>
                  </span>
                </div>
                <div className="connect">
                  <span>
                    Strengthen your profile with an AI writing assistant
                  </span>
                </div>
                <div className="itemm">
                  <img
                    className="live2"
                    src="https://img.icons8.com/?size=60&id=59740&format=png"
                    alt="My items"
                  />
                  My items
                </div>
              </section>
              <section className="main-event">
                <div className="main-ev-text">
                  <span className="color-text"> Groups</span>
                  <span className="color-text">Events </span>
                  <span className="color-text">Following Hashtags</span>
                </div>
                <div className="Discover-text">Discover More</div>
              </section>
            </div>

            <div className="inner-center">
              <section className="hero-post">
                <div className="status">
                  <Link to="/create-post">CREATE POST</Link>
                </div>
              </section>
                          

                          {
                              posts.length === 0 ? (
                                    <p>No posts available yet.</p>
                              ) : (
                                      posts.map((post) => {return (
                                        <section className="post-img">
                                          <div className="post">
                                            <div className="post-name">
                                              <img
                                                className="profile4"
                                                src="sir.jpg"
                                                alt="Profile"
                                              />
                                              <div className="text2">
                                                <div className="text-post">
                                                  <span className="post-text">
                                                    Me <span>• 2nd+</span>
                                                  </span>
                                                  <h5>
                                                    | Full Stack | React.js,
                                                    Redux | Typescript |
                                                    JavaScript |...
                                                  </h5>
                                                  <span> Now • </span>
                                                </div>
                                                <p id="p1">✓ Following</p>
                                                <p id="p2">+ Follow</p>
                                              </div>
                                            </div>

                                            <div className="post-text2"></div>
                                            {post.content}
                                            <div className="img-center">
                                              {post.image && (
                                                <img
                                                  src={post.image}
                                                  alt="Post"
                                                  style={{
                                                    width: "320px",
                                                    height: "300px",
                                                    objectFit: "cover",
                                                  }}
                                                />
                                              )}
                                            </div>

                                            <div className="post-names-bottom">
                                              <div className="box-like">
                                                <div>
                                                  <button
                                                    onClick={() =>
                                                      handleLike(post.id)
                                                    }
                                                  >
                                                    Like ({post.likes})
                                                  </button>
                                                  <button
                                                    onClick={() =>
                                                      handleDelete(post.id)
                                                    }
                                                  >
                                                    Delete
                                                  </button>
                                                </div>
                                              </div>

                                              <div className="self">
                                                <span className="spannn">
                                                  Share
                                                </span>
                                                <span className="spannn">
                                                  <div>
                                                    <input
                                                      type="text"
                                                      value={
                                                        selectedPostId ===
                                                        post.id
                                                          ? comment
                                                          : ""
                                                      }
                                                      onChange={(e) =>
                                                        setComment(
                                                          e.target.value
                                                        )
                                                      }
                                                      placeholder="Add a comment"
                                                      onFocus={() =>
                                                        setSelectedPostId(
                                                          post.id
                                                        )
                                                      }
                                                    />
                                                    <h3>Comments:</h3>
                                                    {post.comments &&
                                                    post.comments.length > 0 ? (
                                                      post.comments.map(
                                                        (c, index) => (
                                                          <p key={index}>{c}</p>
                                                        )
                                                      )
                                                    ) : (
                                                      <p>No comments yet.</p>
                                                    )}
                                                  </div>

                                                  <button
                                                    onClick={() =>
                                                      handleAddComment(post.id)
                                                    }
                                                  >
                                                    Add Comment
                                                  </button>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </section>
                                      );})
                              )
                          }

            </div>

            <div className="inner-left">
              <section className="profile-box1">
                <div className="recommend-box">
                  <h3>People You May Know</h3>
                </div>
                <div className="recommend-list">
                  {profiles.map((profile, index) => (
                    <div key={index} className="profile-item">
                      <img
                        className="recommend-img"
                        src={profile.imgSrc}
                        alt={profile.name}
                      />
                      <div className="profile-info">
                        <h4>{profile.name}</h4>
                        <p>{profile.relation}</p>
                        <p>{profile.description}</p>
                        <button className="connect-btn">Connect</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
