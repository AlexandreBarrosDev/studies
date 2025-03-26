import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

const server = express()
const port = 3000

server.use(express.json())
server.use('/', publicRoutes)
server.use('/', auth, privateRoutes)

server.listen(port, () => console.log(`Server running on port ${port}`))