import AWS from 'aws-sdk';
import Raptor from 'raptor-rpc';
import Express from 'express';

if (!process.env.ENV) {
    require('dotenv').config();
}

const app = Express();
const raptor = new Raptor();

raptor.method('ping', function (req) {
    return "pong!";
})

app.post('/', raptor.handle)
app.listen(3000, () => {
    console.log("server started")
})

export default app;