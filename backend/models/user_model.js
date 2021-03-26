/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            max: 1024
        },
        role: {
            // Role of user it will be (normal or admin )
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
)

// play function before save into display: 'block',
// first save data, crypt the password 
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// verify authentification first login
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;