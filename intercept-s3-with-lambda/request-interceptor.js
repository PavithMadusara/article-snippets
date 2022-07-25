exports.handler = (event,context,callback)=>{
    const response = {
        status:401
    }

    callback(null,response);
    return;
}


exports.handler = (event,context,callback)=>{
    const response = {
        status:401,
        headers:{}
    }

    response.headers['access-control-allow-credentials']=[{
        key:'Access-Control-Allow-Credentials',
        value:'true'
    }];

    callback(null,response);
    return;
}

exports.handler = (event,context,callback)=>{
    const response = {
        status:200,
        body:JSON.stringify(event)
    }

    callback(null,response);
    return;
}