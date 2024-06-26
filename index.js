const express = require('express');


const app = express();




app.use(express.json());


const server = [
    {name: "africa-south-42123.packetriot.net", port: 22018},
    {name: "asia-south-36774.packetriot.net", port: 22624},
    {name: "us-west-11608.packetriot.net", port: 22641}
];


app.get('/', (req, res) => {
    res.json(server);
});







const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
