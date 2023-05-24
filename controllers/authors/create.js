import Author from "../../models/Author.js"

export default async(req, res) => {
    try {
        let data = req.body
        let one = Author.create(data)
        if (one) {
            return res.status(201).json({
                response: one,
                message: 'created'
            })
        } else {
            return res.status(400).json({
                response: null,
                message: 'not created'
            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'not created'
        })
    }
}