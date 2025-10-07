import express, { type Request, type Response } from 'express'

import cors from "cors"
import { userRouter } from './app/modules/users/users.routes'
import { studentRouter } from './app/modules/student/student.routes'

const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/user', userRouter)
app.use('/api/student', studentRouter)
app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})

export default app;
