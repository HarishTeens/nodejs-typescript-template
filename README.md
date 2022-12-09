Do `yarn`  
Then `yarn dev` to start the rpc server in live reload mode


### Sample rpc call

BASEURL: `http://localhost:3000` .  
POST Body: 
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "read-package"
}
```