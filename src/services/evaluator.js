const evalOperation = (raw, parsedData) => {
  const cells = []
  raw.match(/(\[\d+;\d+\])/g)
    .map(e => e.match(/(\d+)/g).reverse())
    .map(e => (cells.push(parsedData[+e[0]][+e[1]])))

  const operation = raw.replace(/(\[\d+;\d+\])/g, (w, a) => `(${cells.shift()})`)
  const value = eval(operation.replace(/,/g, '.'))
  
  return value
}

export default evalOperation
