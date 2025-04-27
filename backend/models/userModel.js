import mongoose from 'mongoose';

const userScheam = new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true
},
name:{
    type:String,
    default:"",
},
profileUrl:{
    type:String,
    required:true,
},
avatarUrl:{
    type:String,

},
likedProfiles:{
    type:[String],
    default:[]
},
likedBy:[
    {
        username:{
            type:String,
            required:true,
        },
        avatarUrl:{
            type:string
        },
        likeDate:{
            type:Date,
            default:Date.now
        }
    }
]
},{timestamps:true});

const userModel= mongoose.model('user',userScheam);
export default userModel;

