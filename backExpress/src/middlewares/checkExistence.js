const checkExistence = (Model,messageErreur) => {
    
    return ((req, res, next) => {
        console.log(req.params.id)
        Model.findByPk(req.params.id)
        .then(elem => {
            if (elem === null) {
                res.status(404).json({ messageErreur, data: null });
                return;
            }
   
            res.elem = elem;
            next()
        });
    })
};
module.exports = checkExistence