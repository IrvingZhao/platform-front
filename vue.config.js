const host = "localhost";
const port = 3000;
const baseUrl = "/";
const outputDir = "dist";
const assertDir = "static";

module.exports = {
    baseUrl: baseUrl,
    outputDir: outputDir,
    assetsDir: assertDir,
    devServer: {
        clientLogLevel: 'info',
        quiet: true,
        host: host,
        port: port,
        proxy: {
            "/api": {
                target: "http://localhost:8080"
            }
        }
    },
    // configureWebpack(config) {
    //     config.resolve.alias["#"] = path.resolve(__dirname, "./node_modules");
    // },
    chainWebpack(config) {
        // config.module.rule('js').use("babel-loader").loader("babel-loader").include(path.resolve(__dirname, "src"))
        // config.module.rule('js').include.add(path.resolve(__dirname, "src"))
        // console.info(path.resolve(__dirname,"node_modules"))
        // config.module.rule('vue').exclude.add(path.resolve(__dirname, "node_modules"));
    }
};