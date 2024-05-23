import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const musicaSchema = z.object({
    name: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
      })
      .min(3, { message: 'O nome deve ter no mínimo 3 letras.' })
      .max(200, { message: 'O nome deve ter no máximo 200 caracteres.' }),
    avatar: z.string({
        required_error: "O avatar é obrigatório.",
        invalid_type_error: "O avatar deve ser uma string.",
      })
      .url({ message: 'Url do avatar inválida.' })
      .max(1000, { message: 'O avatar deve ter no máximo 1000 caracteres.' }),
    artistas: z.array(z.number().optional()), // Array de IDs de artistas (opcional)
}).refine(data => {
    // Verificar se há repetições no array de artistas
    if (data.artistas) {
        const uniqueSet = new Set(data.artistas);
        return uniqueSet.size === data.artistas.length;
    }
    return true; // Se não houver artistas, não há repetições
}, {
    message: 'Não são permitidos valores duplicados na lista de artistas.'
});

const validateMusicaToCreate = (musica) => {
    const partialmusicaSchema = musicaSchema.partial({id: true})
    return partialmusicaSchema.safeParse(musica)
}

const getAll = async () => {
    return await prisma.musica.findMany()
}

const getById = async (id) => {
    return await prisma.musica.findUnique({
        where: {
            id
        }
    })
}

const create = async (musica) => {
    return await prisma.musica.create({
        data: musica
    })
}

const remove = async (id) => {
    return await prisma.musica.delete({
        where: {
            id
        }
    })
}

const edit = async (musica) => {
    return await prisma.musica.update({
        where: {
            id: musica.id
        },
        data: musica
    })
}


export default {getAll, getById, create, remove, edit, validateMusicaToCreate}