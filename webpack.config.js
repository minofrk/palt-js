const path = require('path');
const webpack = require('webpack');
const { name, version, author, homepage, license } = require('./package.json');

const banner = `
/*!
 * ${name} v${version}
 * ${homepage}
 * 
 * © 2018 ${author}
 * license: ${license}
 */
`;

const options = {
    compilerOptions: {
        module: 'es2015',
        declaration: false,
    },
};

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'palt.js',
        path: path.resolve(__dirname, 'umd'),
        library: 'paltjs',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: { loader: 'ts-loader', options },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new webpack.BannerPlugin({ banner, raw: true }),
    ],
    devtool: 'source-map',
};
