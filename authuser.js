import Users from "../modules/Usermodel.js";

export const verifyUser = async(req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "please login to your account!"});
    }
    const user = await Users.findOne({
        
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "user not found"});
    res.userId = user.id;
    req.role = user.role;
    next();
}


export const adminOnly = async(req, res, next) => {
    const user = await Users.findOne({
        
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "user not found"});
    if(user.role!== "admin") return res.status(403).json({msg: "acess is forbidden"});
    next();
}
