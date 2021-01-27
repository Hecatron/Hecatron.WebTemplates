import * as express from 'express'
import { Request, Response } from 'express'
//import * as webpack_hmr from './webpack_hmr'



const app = express()

var x1 = 2

const {
    PORT = 3000,
} = process.env

// static assets
app.use(express.static('../../wwwroot'))

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world2',
    })
})

app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT)
})
