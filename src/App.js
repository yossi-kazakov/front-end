import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Bullet from './components/Bullet';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { mockData } from './mockData';
import PostCard from './components/PostCard';
import CreatePostCard from './components/CreatePostCard';

function App() {
  const [bulletClicked, setBulletClicked] = useState(-1);
  const [showCreatePostModal, setShowCreatePostModal] = useState(-1);
  const [newPostData, setNewPostData] = useState({});

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewPostData({ ...newPostData, [key]: value });
  }

  const handlePostSubmit = () => {
    const newPost = {
      id: mockData.length + 1,
      date: `${showCreatePostModal}.10`,
      title: newPostData.title,
      content: newPostData.content,
    }
    mockData.push(newPost);
    setShowCreatePostModal(-1);
  }

  const handleOuterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBulletClicked(-1);
  }

  return (
    <div className="App">
      <div className="map" onClick={handleOuterClick}>
        {
          Array(12).fill().map((_, i) => {
            return <div className={`day${i + 7}-10`}>
              <Bullet bulletClicked={bulletClicked} setBulletClicked={setBulletClicked} setShowCreatePostModal={setShowCreatePostModal} day={i + 7} />
            </div>
          })
        }
      </div>
      <div className="read-modals">
        {
          Array(12).fill().map((_, i) => {
            const date = `${i + 7}.10`;
            const relevantPosts = mockData.filter(post => post.date === date);
            return <Modal show={bulletClicked === i + 7} onHide={() => setBulletClicked(-1)} dir="rtl">
              <Modal.Header closeButton>
                <Modal.Title
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center'
                  }}
                >
                  <span>{`${date}.2023`}</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CreatePostCard mockData={mockData} day={i + 7} />
                {
                  relevantPosts.map((post, index) =>
                    <PostCard key={index} post={post} />
                  )
                }
              </Modal.Body>
            </Modal>
          })
        }
      </div>
      {/* <div className="create-modal">
        <Modal show={showCreatePostModal !== -1} onHide={() => setShowCreatePostModal(-1)} fullscreen={true} >
          <Modal.Header closeButton>
            <Modal.Title>
              <span>{`${showCreatePostModal}.10.2023`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="create-post">
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Your Name (not mandatory)</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter post title" required onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Post Content</Form.Label>
                  <Form.Control as="textarea" rows={3} required onChange={handleInputChange} />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setShowCreatePostModal(-1)}>Cancel</button>
            <button className="btn btn-primary" onClick={handlePostSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
      </div> */}

    </div>
  );
}

export default App;
