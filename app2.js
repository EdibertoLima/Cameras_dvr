Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:@192.168.1.108:554/user=admin&password=&channel=6&stream=0.sdp?',
    wsPort: 9000,
});

Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:@192.168.1.108:554/user=admin&password=&channel=7&stream=0.sdp?',
    wsPort: 9001,
     ffmpegOptions: {
        "-r": 20, // options with required values specify the value after the key
        "-f": "mpegts",
    }
});/*
Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:@192.168.1.108:554/user=admin&password=&channel=8&stream=0.sdp?',
    wsPort: 9002
});*/