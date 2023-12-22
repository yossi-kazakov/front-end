import React from 'react'
import './CreatePostCard.scss'
import { useState } from 'react'
import { Form } from 'react-bootstrap';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CreatePostCard = ({ mockData, day }) => {
    const [newPostData, setNewPostData] = useState({});
    

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setNewPostData({ ...newPostData, [key]: value });
    }

    const handlePostSubmit = () => {
        const newPost = {
            id: mockData.length + 1,
            date: `${day}.10`,
            title: newPostData.title,
            content: newPostData.content,
        }
        mockData.push(newPost);
        setShowCreatePostModal(false);
    }

    return (
        <div className='create-post'>

            {showCreatePostModal ? <Form >
                <Form.Group className='mb-3'>
                    <Form.Label>מה שמך? (שדה זה אינו חובה)</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>מהי הכותרת של השיתוף שלך?</Form.Label>
                    <Form.Control type="text" placeholder="" required onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>תוכן השיתוף</Form.Label>
                    <Form.Control as="textarea" rows={3} required onChange={handleInputChange} />
                </Form.Group>
                <button className="btn btn-primary" onClick={handlePostSubmit}>שתף</button>
            </Form>
                :
                <div className="success">
                    <CheckCircleOutlineIcon style={{ fontSize: 100, color: 'green' }} />
                    <h1>תודה!</h1>
                    <h2>השיתוף עלה בהצלחה</h2>
                </div>
            }
        </div>
    )
}

export default CreatePostCard