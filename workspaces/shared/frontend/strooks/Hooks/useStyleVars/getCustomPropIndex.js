const isSameDomain = styleSheet => {
  if (!styleSheet.href) {
    return true
  }

  return styleSheet.href.indexOf(window.location.origin) === 0
}

const isStyleRule = rule => rule && rule.type === 1

const parseSheet = sheet => {
  const finalObject = {}
  Object.entries(sheet.cssRules).forEach(cssRule => {
    const rule = cssRule && cssRule[1]
    if (rule && rule.style) {
      const singulars = rule.style.cssText.split('; ')
      singulars.forEach(singular => {
        if (singular.startsWith('--')) {
          const [prop, val] = singular.split(': ')
          finalObject[prop] = val
        }
      })
    }
  })
  return finalObject
}

const getCSSCustomPropIndex = () => {
  const sameDomainStyleSheets = [...document.styleSheets].filter(isSameDomain)
  let finalObject = {}

  sameDomainStyleSheets.forEach(sheets => {
    if (sheets.constructor === window.StyleSheetList) {
      Array.from(sheets).forEach(sheet => {
        finalObject = { ...finalObject, ...parseSheet(sheet) }
      })
    } else {
      finalObject = { ...finalObject, ...parseSheet(sheets) }
    }
  })

  return finalObject
}

export default getCSSCustomPropIndex
