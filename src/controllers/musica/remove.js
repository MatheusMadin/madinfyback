const remove = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE musica/:id '+'ID = '+id})
}

export default remove