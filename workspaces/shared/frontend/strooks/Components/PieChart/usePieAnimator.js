import { useState } from 'react'

const usePieAnimator = (initialData, setPieData, mapper) => {
  const [currentData, setCurrentData] = useState(initialData)
  const animationTime = 0.6
  const bool = true

  const changePie = newData => {
    const addedOrRemoved = newData.length > currentData.length ? 'added' : 'removed'
    const actionedItem =
      addedOrRemoved === 'removed'
        ? initialData.find(item => !newData.map(i => i.label).includes(item.label))
        : newData.find(item => !initialData.map(i => i.label).includes(item.label))

    if (!actionedItem) return

    if (addedOrRemoved === 'added') {
      currentData.push({ ...actionedItem, percent: 0 })
    }

    const steps = animationTime * 60

    const deltas = currentData.map((item, idx) => {
      if (addedOrRemoved === 'removed') {
        if (item.label === actionedItem.label) {
          return { ...item, delta: item.percent, stepDelta: item.percent / steps }
        }
        const itemInNewData = newData.find(i => i.label === item.label)
        if (!itemInNewData) {
          return { ...item, delta: 0, stepDelta: 0 }
        }
        const delta = itemInNewData.percent * actionedItem.percent
        const stepDelta = delta / steps
        return { ...item, delta, stepDelta }
      }
      if (addedOrRemoved === 'added') {
        const actionedDelta = actionedItem.percent
        if (item.label === actionedItem.label) {
          return { ...item, delta: actionedDelta, stepDelta: actionedDelta / steps }
        }
        const delta = item.percent * actionedDelta
        const stepDelta = delta / steps
        return { ...item, delta, stepDelta }
      }
    })

    function loop(currentStep) {
      const tempData = deltas.map((item, idx) => {
        if (addedOrRemoved === 'removed') {
          const stepDelta = item.stepDelta
          if (item.label === actionedItem.label) {
            return { ...item, percent: item.percent - stepDelta * currentStep }
          }
          return { ...item, percent: item.percent + stepDelta * currentStep }
        }
        if (addedOrRemoved === 'added') {
          const stepDelta = item.stepDelta
          if (item.label === actionedItem.label) {
            return { ...item, percent: item.percent + stepDelta * currentStep }
          }
          return { ...item, percent: item.percent - stepDelta * currentStep }
        }
      })

      setPieData(tempData)
      setCurrentData(tempData)

      if (currentStep < steps) {
        requestAnimationFrame(() => loop(++currentStep))
      } else {
        const finalData = tempData
          .map(item => {
            delete item.delta
            delete item.stepDelta
            return item
          })
          .filter(item => item.percent > 0)
        setPieData(finalData)
        setCurrentData(finalData)
      }
    }

    loop(1)
  }

  return { changePie }
}

export default usePieAnimator
