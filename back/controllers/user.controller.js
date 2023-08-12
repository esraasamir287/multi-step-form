module.exports = {
    addUser : async function(req,res){
        try{
            // const {error} = 
            const { firstName, lastName, occupation, city, bio } = req.body;
            let user = { firstName, lastName, occupation, city, bio }
            res.status(201).json(user)
        }catch(err){
            console.log(err)
        }
    }
}