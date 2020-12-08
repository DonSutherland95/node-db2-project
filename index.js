const server = require('./api/server')
// const helmet = require('helmet')

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));