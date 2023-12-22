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
  const [showCreatePostModal, setShowCreatePostModal] = useState(true);

  const handleOuterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBulletClicked(-1);
  }

  const onHide = () => {
    setShowCreatePostModal(true);
    setBulletClicked(-1)
  }

  return (
    <div className="App">
      <div className="map" onClick={handleOuterClick}>
        {
          Array(12).fill().map((_, i) => {
            return <div className={`day${i + 7}-10`}>
              <Bullet bulletClicked={bulletClicked} setBulletClicked={setBulletClicked} showCreatePostModal={showCreatePostModal} setShowCreatePostModal={setShowCreatePostModal} day={i + 7} />
            </div>
          })
        }
      </div>
      <div className="read-modals">
        {
          Array(12).fill().map((_, i) => {
            const date = `${i + 7}.10`;
            const relevantPosts = mockData.filter(post => post.date === date);
            return <Modal show={bulletClicked === i + 7} onHide={onHide} dir="rtl" >
              <Modal.Header closeButton style={{background: '#F8F5F0'}}>
                <Modal.Title
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    
                  }}
                >
                  <span>{`${date}.2023`}</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{
              background: 'linear-gradient(to bottom, #F8F5F0, #90EE90)',
            }}>
                <CreatePostCard mockData={mockData} day={i + 7} showCreatePostModal={showCreatePostModal} setShowCreatePostModal={setShowCreatePostModal} />
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
    </div>
  );
}

export default App;
