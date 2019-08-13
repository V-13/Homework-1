var cluster = require('cluster');
if (cluster.isWorker) {
    console.log('hello');
}else{
    console.log('hai');
    cluster.fork();
    cluster.fork();
    return;
}