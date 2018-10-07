require('dotenv').config();
const server = require('./server')

const port = process.env.PORT || 4000
server.listen(port, '0.0.0.0', () => console.log(`API server started on ${port}`))
