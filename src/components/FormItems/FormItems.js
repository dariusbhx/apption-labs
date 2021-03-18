import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Response from '../Response/Response'
import {getPosts} from '../../actions/formActions'
const FormView = () => {
    const responses =  useSelector((state) => state.posts)
    console.log(responses)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Will this render</h1>
            {responses.map((response) => (
                <div>
                    <Response response = {response} />
                </div>
            ))}
        </div>
    )
}

export default FormView