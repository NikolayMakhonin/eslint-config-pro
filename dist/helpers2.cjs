'use strict';

function moduleExists(name) {
    try {
        require.resolve(name);
        return true;
    }
    catch (_a) {
        return false;
    }
}

exports.moduleExists = moduleExists;
