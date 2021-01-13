
const UserList = require('../tableContent.json');

const getUserList = async (req, res) => { 
    return res.send({ 'status': 200, "statusMsg": 'success', UserList: UserList[0]});
}

module.exports = {
    getUserList,
}
