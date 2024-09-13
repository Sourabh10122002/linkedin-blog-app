// src/components/ProfilePage.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../FeedPage/FeedPage.css';
import { likePost, addComment, deletePost } from "../../redux/slices/postSlice";
import { profiles } from "./profiles";
import './ProfilePage.css';
import Header from "../Header/Header";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [comment, setComment] = useState("");
    const [selectedPostId, setSelectedPostId] = useState(null);
    
    console.log(posts)

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
      <div id="body">
        <Header />
        <div className="sidebar" id="sidebar">
          <div className="profile-ji-pic">
            <img
              src="https://source.unsplash.com/random/profile"
              alt="Profile"
            />
            <h2>
              Sourabh Rawat{" "}
              <i
                className="fa-brands fa-linkedin"
                style={{ color: "#c37d16" }}
              ></i>
            </h2>
            <p>View Profile</p>
          </div>
          <div className="view-impressions">
            <div className="viewers">
              <h4>58</h4>
              <p>profile viewers</p>
            </div>
            <div className="impressions">
              <h4>188</h4>
              <p>post impressions</p>
            </div>
          </div>
          <div className="group-event">
            <h2>Groups</h2>
            <h2>Events</h2>
          </div>
        </div>

        <div className="container">
          <div className="content-container">
            <section>
              <div className="upper-section">
                <div className="profile-background-image">
                  <img
                    src="https://source.unsplash.com/random/landscape"
                    id="preview"
                    height="201px"
                    alt="Background"
                  />
                  <span className="edit-bg-circle">
                    <label htmlFor="edit-bg-icon">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#0062c7" }}
                      ></i>
                    </label>
                    <input
                      type="file"
                      hidden
                      name="edit-bg-icon"
                      id="edit-bg-icon"
                      accept="image/*"
                    />
                  </span>
                </div>
                <span className="profile-pic">
                  <img
                    src="https://source.unsplash.com/random/profile"
                    id="preview2"
                    alt="Profile"
                  />
                  <span className="edit-bg-circle2">
                    <label htmlFor="edit-bg-icon2">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#0062c7" }}
                      ></i>
                    </label>
                    <input
                      type="file"
                      name="edit-bg-icon"
                      id="edit-bg-icon2"
                      accept="image/*"
                      hidden
                    />
                  </span>
                </span>
                <div className="user-golden">
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#c37d16" }}
                  ></i>
                  <span className="edit-bg-circle3">
                    <label htmlFor="edit-bg-icon3">
                      <i
                        className="fa-solid fa-pencil"
                        style={{ color: "#444" }}
                      ></i>
                    </label>
                    <input
                      type="file"
                      name="edit-bg-icon"
                      id="edit-bg-icon3"
                      accept="image/*"
                      hidden
                    />
                  </span>
                </div>
                <div className="user-bio-details">
                  <h1>Sourabh Rawat</h1>
                  <p>
                    Frontend Web Developer | HTML | CSS | JavaScript | React.js
                  </p>
                  <div className="address">
                    <p id="location">Bhopal, MP</p>
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#4c8ed0" }}
                      id="address"
                    ></i>
                    <span className="contact-info">
                      <a href="/">∙ Contact info</a>
                    </span>
                  </div>
                  <div className="connections">
                    <a href="/">500+ connections</a>
                  </div>
                  <div className="buttons">
                    <button>Open to</button>
                    <button>Add profile section</button>
                    <button>Add custom button</button>
                    <button>More</button>
                  </div>
                </div>
              </div>

              <div className="lower-section">
                <div className="suggested">
                  <h1>Suggested for you</h1>
                  <i
                    className="fa-solid fa-eye"
                    style={{ color: "#666666" }}
                  ></i>
                  <p>Private to you</p>
                </div>
                <div className="intermediate">
                  <h2>Intermediate</h2>
                  <div className="line"></div>
                  <p>6/7</p>
                  <div className="complete-star">
                    <p>Complete 1 step to achieve</p>
                    <a href="/">All star</a>
                  </div>
                </div>
                <div className="enhance-profile">
                  <div className="upper-enhance">
                    <div className="premium">
                      <i
                        className="fa-solid fa-square"
                        style={{ color: "#F6C885" }}
                      ></i>
                      <h4>PREMIUM</h4>
                    </div>
                    <h3>Enhance your profile</h3>
                  </div>
                  <div className="lower-enhance">
                    <p>
                      Try our AI profile writing assistant to strengthen your
                      profile
                    </p>
                    <button>
                      <i className="fa-solid fa-star"></i>Write with AI
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <aside>
              <div className="upper-aside">
                <div className="language-eng">
                  <h2>Profile Language</h2>
                  <i
                    className="fa-solid fa-pencil"
                    style={{ color: "#444" }}
                  ></i>
                </div>
                <div className="eng">
                  <p>English</p>
                </div>
                <div className="profile-url">
                  <h2>Public profile & URL</h2>
                  <i
                    className="fa-solid fa-pencil"
                    style={{ color: "#444" }}
                  ></i>
                </div>
                <div className="url">
                  <p>www.linkedin.com/in/sourabhrawat</p>
                </div>
              </div>
              <div className="lower-aside">
                <div className="other-lower">
                  <p>Other similar profiles</p>
                </div>
                <div className="other-similar-profiles">
                  {profiles.map((profile, index) => (
                    <div className="profile-small" key={index}>
                      <img src={profile.imgSrc} alt={profile.name} />
                      <div className="profile-details">
                        <h3>{profile.name}</h3>
                        <p>{profile.relation}</p>
                        <p>{profile.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="center-posts">
        {posts.length === 0 ? (
          <p>No posts available yet.</p>
        ) : (
          posts.map((post) => {
            return (
              <section className="post-img">
                <div className="post">
                  <div className="post-name">
                    <img className="profile4" src="sir.jpg" alt="Profile" />
                    <div className="text2">
                      <div className="text-post">
                        <span className="post-text">
                          Me <span>• 2nd+</span>
                        </span>
                        <h5>
                          | Full Stack | React.js, Redux | Typescript |
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
                        <button onClick={() => handleLike(post.id)}>
                          Like ({post.likes})
                        </button>
                        <button onClick={() => handleDelete(post.id)}>
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="self">
                      <span className="spannn">Share</span>
                      <span className="spannn">
                        <div>
                          <input
                            type="text"
                            value={selectedPostId === post.id ? comment : ""}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Add a comment"
                            onFocus={() => setSelectedPostId(post.id)}
                          />
                          <h3>Comments:</h3>
                          {post.comments && post.comments.length > 0 ? (
                            post.comments.map((c, index) => (
                              <p key={index}>{c}</p>
                            ))
                          ) : (
                            <p>No comments yet.</p>
                          )}
                        </div>

                        <button onClick={() => handleAddComment(post.id)}>
                          Add Comment
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};
