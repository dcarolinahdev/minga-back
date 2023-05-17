import {Schema, model, Types} from 'mongoose'

let collection = 'authors'

let schema = new Schema ({
    name: {type: String, required: true},
    last_name: {type: String}, // por default el required es false
    city: {type: String, required: true},
    country: {type: String, required: true},
    date: {type: Date},
    photo: {type: String, required: true},
    user_id: {type: Types.ObjectId, ref:'users', required: true},
    active: {type: Boolean, required: true}
},{
    timestamps: true
})

let Author = model(collection, schema)
export default Author