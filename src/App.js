import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Bullet from './components/Bullet';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { mockData } from './mockData';
import PostCard from './components/PostCard';

function App() {
  const [bulletClicked, setBulletClicked] = useState(-1);
  const [modalToShow, setModalToShow] = useState(-1);
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
              <Bullet bulletClicked={bulletClicked} setBulletClicked={setBulletClicked} day={i + 7} />
            </div>
          })
        }
      </div>
      <div className="modals">
        {
          Array(12).fill().map((_, i) => {
            const date = `${i + 7}.10`;
            const relevantPosts = mockData.filter(post => post.date === date);
            return <Modal show={modalToShow === i + 7} onHide={() => setModalToShow(-1)}>
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
