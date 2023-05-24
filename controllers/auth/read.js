import User from "../../models/User.js"

export default async (req, res) => {
    try {
        let all = await User.find()
        if (all) {
            return res.status(200).json({
                response: all,
                message: 'users found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'users not found!'
            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: error
        })
    }
}