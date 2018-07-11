module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        scripts: {
            'commentary': 'vue-cli-service serve --port 7654 commentary/index.js'
        }
    });
    api.render("./template");
}