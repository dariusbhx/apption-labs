import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    preference: Boolean
})

formSchema.set('timestamps', true)
const FormData = mongoose.model('FormData', formSchema)
export default FormData