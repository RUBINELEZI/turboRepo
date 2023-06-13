const getJSXTextContent = elem => {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }
  const children = elem.props && elem.props.children
  if (children instanceof Array) {
    return children.map(getJSXTextContent).join(' ')
  }
  return getJSXTextContent(children)
}

export default getJSXTextContent
