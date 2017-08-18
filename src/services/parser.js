const extractSeparator = (source, separators) => {
  return separators.filter(separator=>{
    let cache = -1
    return source.split('\n').every(line=>{
      if(!line) { return true }
      let length = line.split(separator).length
      if(cache < 0) { cache = length }
      return length>1 && cache===length
    })
  })[0]
}

const parseCsv = (rawData) => {
  let lines = rawData.split('\r\n')
  let separator = extractSeparator(lines[0], [',', ';'])
  // return lines.map(line => line.split(/(?:(?!("\w+))),(?:(?!(\w+")))/).filter(e=>e!==undefined))
  return lines.map(line => line.split(separator))
}

export default parseCsv
