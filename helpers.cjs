'use strict'

function moduleExists(name) {
  try {
    require.resolve(name)
    return true
  }
  catch {
    return false
  }
}

module.exports = {
  moduleExists,
}
