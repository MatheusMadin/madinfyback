import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const artistaSchema = z.object({
  id: z.number({
    required_error: 'ID é obrigatório.',
    invalid_type_error: 'O ID deve ser um número inteiro.',
  }),
  name: z.string({
    required_error: 'Nome é obrigatório.',
    invalid_type_error: 'O nome deve ser uma string.',
  }).min(3, { message: 'O nome deve ter no mínimo 3 letras.' }).max(200, { message: 'O nome deve ter no máximo 200 caracteres.' }),
  avatar: z.string({
    required_error: 'O avatar é obrigatório.',
    invalid_type_error: 'O avatar deve ser uma string.',
  }).url({ message: 'Url do avatar inválida.' }).max(1000, { message: 'O avatar deve ter no máximo 1000 caracteres.' }),
});

const validateArtistaToCreate = (artista) => {
  const partialArtistaSchema = artistaSchema.omit({ id: true });
  return partialArtistaSchema.safeParse(artista);
};

const getAll = async () => {
  return await prisma.artista.findMany();
};

const getById = async (id) => {
  return await prisma.artista.findUnique({
    where: {
      id,
    },
  });
};

const create = async (artista) => {
  return await prisma.artista.create({
    data: artista,
  });
};

const remove = async (id) => {
  return await prisma.artista.delete({
    where: {
      id,
    },
  });
};

const edit = async (artista) => {
  return await prisma.artista.update({
    where: {
      id: artista.id,
    },
    data: artista,
  });
};

export default { getAll, getById, create, remove, edit, validateArtistaToCreate };