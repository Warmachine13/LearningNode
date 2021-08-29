
const indexUser = async(req,res) => {
    res.write('indexUser');
}
const showUser = async(req,res) => {
    console.log(req.params);
    res.write('showUser');
}
const updateUser = async(req,res) => {
    res.write('updateUser');
}

const deleteUser = async(req,res) => {
    res.write('deleteUser');
}


export default {indexUser,  showUser, updateUser, deleteUser};