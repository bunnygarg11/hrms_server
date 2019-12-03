const logout = async (req, res,next) => {
    console.log('in logout');
    console.log(req.user);
    
    
    try {
        req.user.token = '';
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        console.log(e)
        return res.status(400).send()
    }
}


module.exports = { logout }
