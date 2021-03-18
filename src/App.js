import React,{useEffect} from 'react'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Form from './components/form/Form'
import Home from './pages/Home'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/formActions'
const App = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getPosts())
    })
    return (
        <Router>
            <Switch>
                <Route path ="/" exact component = {Form}  />
                <Route path ="/view"  component ={Home} />
            </Switch>
        </Router>
    )
}

export default App
