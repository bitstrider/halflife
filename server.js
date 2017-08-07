const path = require('path');
const proxy = require('http-proxy-middleware');
const express = require('express');
const morgan = require('morgan')
const { NODE_ENV, PORT, API_PROXY_ADDR } = require('./config');
const app = express();

// app.use(cors());
app.use(morgan('dev'))
// app.use('/', express.static(path.join(__dirname, 'static')));
// app.use('/static', express.static(path.join(__dirname, 'static')));


switch (NODE_ENV) {
    case 'development' :
        const webpack = require('webpack');
        const webpackConfig = require('./webpack.development.config');
        const compiler = webpack(webpackConfig);

        app.use(require('webpack-dev-middleware')(compiler, {
            withCredentials : false,
            noInfo : true,
            quiet : false,
            lazy : false,
            watchOptions : {
                aggregateTimeout : 300,
                poll : true
            },
            stats : {
                colors : true
            },
            publicPath: webpackConfig.output.publicPath
        }));
        app.use(require('webpack-hot-middleware')(compiler));

        break;
    default :
        const buildAppPath = path.join(__dirname, './build').normalize();

        app.use('/', express.static(buildAppPath));
        break;
}


app.use('/api', proxy({
    target : `${API_PROXY_ADDR}`,
    changeOrigin : true,
    ws : true,
    pathRewrite : {
        '^/api' : ''
    }
}));

app.listen(PORT, function () {
    console.log(`${NODE_ENV} server listening at ${PORT}`);
})
