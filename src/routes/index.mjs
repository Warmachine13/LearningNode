import UserRoutes from "../controller/UserController.mjs";

const router = async(req,res) => {
    let urlRoute = req.url;
    switch (urlRoute) {
        case '/ping':
            res.write(JSON.stringify({'name': 'pong'}));
            res.end()
            break;
        
        case '/user': 
            switch (req.method) {
                case 'GET':
                        UserRoutes.indexUser(req,res);
                    res.end()
                    break;
                case 'UPDATE':
                    UserRoutes.updateUser(req,res);
                    res.end()
                    break;
                case 'DELETE':
                    UserRoutes.deleteUser(req,res);
                    res.end()
                    break;
            
                default:
                  
                    res.end()
                    break;
            }
        break;
        default:
            res.write('server is running');
            res.end()
            break;
    }
}

export default router;
