export const getImage = (path: string): Promise<string> | null => {
  return require(`@/assets/${path}`)
}

type AnyObject = Record<string, any>
type AnyDifficult = AnyObject | any[]

const isPrimitive = (test: any) => {
  return test !== Object(test)
}

export const deepCopy = <T extends AnyDifficult>(source: T): T => {
  const result = typeof source === 'object' ? {} : []

  const recu = (source: any, target: any, key?: any) => {
    const _source = key !== undefined ? source[key] : source
    if (isPrimitive(_source)) {
      target[key] = source[key]
    } else {
      if (Array.isArray(_source)) {
        key && (target[key] = new Array(target[key]?.length))
        _source.forEach((i, index) => {
          recu(source[key] || source, target[key] || target, index)
        })
      } else {
        key && (target[key] = {})
        Object.keys(source[key] || source).forEach((srcKey) => {
          recu(source[key] || source, target[key] || target, srcKey)
        })
      }
    }
  }

  recu(source, result)
  return result as T
}
