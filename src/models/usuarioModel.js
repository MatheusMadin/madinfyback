import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const usuarioSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
    }),
    name: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
    }).min(3, { message: 'O nome deve ter no mínimo 3 letras.' }).max(200, { message: 'O nome deve ter no máximo 200 caracteres.' }),
    email: z.string({
        required_error: "O email é obrigatório.",
        invalid_type_error: "O email deve ser uma string.",
    }).email({ message: 'Email inválido.' }).max(500, { message: 'O email deve ter no máximo 500 caracteres.' }),
    avatar: z.string({
        required_error: "O avatar é obrigatório.",
        invalid_type_error: "O avatar deve ser uma string.",
    }).url({ message: 'Url do avatar inválida.' }).max(1000, { message: 'O avatar deve ter no máximo 1000 caracteres.' }),
}).refine(data => {
    // Verificar se há repetições nos IDs dos usuários
    const uniqueSet = new Set(data.map(user => user.id));
    return uniqueSet.size === data.length;
}, {
    message: 'Não são permitidos valores duplicados nos IDs dos usuários.'
});

const validateUsuarioToCreate = (usuario) => {
    const partialusuarioSchema = usuarioSchema.partial({id: true})
    return partialusuarioSchema.safeParse(usuario)
}

const getAll = async () => {
    return await prisma.usuario.findMany()
}

const getById = async (id) => {
    return await prisma.usuario.findUnique({
        where: {
            id
        }
    })
}

const create = async (usuario) => {
    return await prisma.usuario.create({
        data: usuario
    })
}

const remove = async (id) => {
    return await prisma.usuario.delete({
        where: {
            id
        }
    })
}

const edit = async (usuario) => {
    return await prisma.usuario.update({
        where: {
            id: usuario.id
        },
        data: usuario
    })
}


export default {getAll, getById, create, remove, edit, validateUsuarioToCreate}