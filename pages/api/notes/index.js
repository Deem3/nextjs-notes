import connectMongo from '../../../utils/connectDB'
import Note from '../../../models/noteModel'

connectMongo()

export default async function (req, res) {
    const { method } = req

    switch(method){
        case 'GET':
            try {
                const notes = await Note.find({}).sort({createdAt: -1})

                res.status(200).json({success: true, data: notes})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try {
                const notes = await Note.create(req.body)

                res.status(201).json({success: true, data: notes})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false})
    }
}