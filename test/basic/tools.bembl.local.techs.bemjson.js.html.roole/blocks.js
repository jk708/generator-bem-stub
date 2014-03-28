var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs/v2');

exports.getTechs = function() {

    return {
        'bemjson.js'           : join(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'           : 'v2/bemdecl.js',
        'deps.js'              : 'v2/deps.js',
        'roole'                : 'v2/roole',
        'i18n'                 : join(BEMBL_TECHS, 'i18n.js'),
        'i18n.js'              : join(BEMBL_TECHS, 'i18n.js.js'),
        'js'                   : 'v2/js-i',
        'i18n.html'            : join(BEMBL_TECHS, 'i18n.html.js'),
        'html'                 : join(BEMBL_TECHS, 'html.js')
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];