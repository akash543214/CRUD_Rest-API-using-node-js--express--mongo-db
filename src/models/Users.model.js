
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
       
    },
    age:{
        type: Number,
        required: false
    }

})

export const User = mongoose.model("User", userSchema)