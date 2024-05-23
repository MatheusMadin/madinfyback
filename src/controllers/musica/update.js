import musicaoModel from "../../models/musicaModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const musicao = req.body
        const result = await musicaoModel.edit({id, ...musicao})
        res.json({
            success: `Musica ${id} editado com sucesso!`,
            musicao: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update