import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {createPost} from '../../actions/formActions'
import {Link } from 'react-router-dom'
import './Form.css'
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        checkbox: null
    })
    const dispatch = useDispatch()
    const clear = () => {
      setFormData({
        name: '',
        email: '',
        message: '',
        preference: false
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(formData))
        clear()
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData( {...formData, [id]: value})
    }

    const handleCheckboxToggle = (e) => {
      setFormData({...formData ,preference : !formData.preference})
    }
    
    return (
     <div className="wrapper">
      <form action="" className="form-area" onSubmit={handleSubmit}>

        <div className="details-area">
          <label>Name</label>
          <input type="text"  id="name" value={formData.name} onChange = {handleChange} />

          <label>Email</label>
          <input type="email"  id="email" value={formData.email} onChange = {handleChange} />

          <div className="msg-area">
            <label>Message</label>
            <textarea  id="message"  cols="15" rows="8" value={formData.message} onChange = {handleChange}></textarea>
          </div>

          <div className ="checkbox-container">
            <label htmlFor ="preference" className ="checkbox-label">Would You Like to Sign up for my newsletter</label>
            <input type = "checkbox" id = "preference"  className ="checkbox" value ={formData.preference} onChange = {handleCheckboxToggle} />
          </div>
          
          <div className="btn-container">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        

        </div>
      </form>

        
          <Link to = "/view">
            <button type="submit" className="submit-btn" >Click here to view form posts</button>
          </Link>
        
     </div> 

    )
}

export default Form
