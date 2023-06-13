const getInnerHeight = elm => {
  const computed = getComputedStyle(elm)
  const padding = parseInt(computed.paddingTop) + parseInt(computed.paddingBottom)
  return elm.clientHeight - padding
}

export default getInnerHeight
