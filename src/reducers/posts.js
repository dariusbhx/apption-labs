export default (formData = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...formData, action.payload]
        
        default:
        return formData
    }

    
}