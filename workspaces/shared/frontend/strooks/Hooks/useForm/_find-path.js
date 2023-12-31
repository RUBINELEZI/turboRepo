const findPath = (elem, form, path = []) => {
  let parent = elem.parentNode

  while (parent && parent !== form) {
    if (parent.nodeName.toLowerCase() === 'fieldset') {
      if (parent.name) {
        path.unshift(parent.name)
      }
    }
    parent = parent.parentNode
  }
  return path
}

export default findPath
