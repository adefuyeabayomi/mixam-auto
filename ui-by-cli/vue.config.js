module.exports = {
    runtimeCompiler : false,
    css : {
        loaderOptions : {
            scss : {
                additionalData : `@import "./public/_app_variables_and_themes.scss";`
            }
        }
    }
}