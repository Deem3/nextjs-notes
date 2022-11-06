import { model, models, Schema} from 'mongoose'

const NoteSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Please Add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
})


const Note = models.Note || model('Note', NoteSchema)

export default Note