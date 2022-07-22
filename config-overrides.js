const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@': 'src',
        '@styles': 'src/styles',
        '@store': 'src/store',
        '@pages': 'src/pages',
        '@atoms': 'src/components/atoms',
        '@molecules': 'src/components/molecules',
        '@organisms': 'src/components/organisms',
    })(config)

    return config;
}