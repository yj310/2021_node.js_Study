module.exports = {
    server_port: 3000, 
    db_url: 'mongodb://localhost:27017/local',
    db_schemas: [
        { file: './user_schema'
            , collection: 'users3'
            , schemaName: 'UserSchema'
            , modelName: 'UserModel'}
    ],
    route_info: [
        //=====User=====//
        {
            // user.login
            file: './user'
            , path: '/process/login'
            , method: 'login'
            , type: 'post'
        },  
        {
            // user.adduser
            file: './user'
            , path: '/process/adduser'
            , method: 'adduser'
            , type: 'post'
            
        },  
        {
            // user.listuser
            file: './user'
            , path: '/process/listuser'
            , method: 'listuser'
            , type: 'post'
            
        }
    ]
}