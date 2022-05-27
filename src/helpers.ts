

export function moduleExists(name) {
  try {
    require.resolve(name)
    return true
  }
  catch {
    return false
  }
}
