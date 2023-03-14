import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    // profile:[{type:ObjectId, ref:"Profile"}],
    taskName: {
        type: String,
        required: true,
    },
    assignedDate: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    score: {
        type: Number
    },
    childCompleted: {
        type: Boolean,
        required: true,
    },
    parentApproval: {
        type: Boolean,
        defaultValue: false,
    }
})

const Task = mongoose.model('Task', taskSchema)
export { Task }
