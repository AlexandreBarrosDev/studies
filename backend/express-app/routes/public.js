import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const router = express.Router()
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async (req, res) => {

    try {
        const user = req.body
                    const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword
            }
        })
        res.status(201).json(userDB)
    
    } catch(err) {
        res.status(500).json({ message: 'Erro no servidor, tente novamente' })
    }
})

//Login

router.post('/login', async (req, res) => {

    try {
        const userInfo = req.body
        //Busca usuário do banco de dados
        const user = await prisma.user.findUnique({
            where: { email: userInfo.email},
        })
        //Verifica se o usário existe dentro do BD
        if(!user) {
            res.status(404).json({ message: 'Usuário não encontrado'})
        }
        //Compara a senha no BD com a que o usuário digitou
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if(!isMatch) {
            res.status(400).json({ message: 'Senha Inválida'})
        }
        //Gerar o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '5m'})

        res.status(201).json(token)
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor, tente novamente'})
    }
    

})

export default router