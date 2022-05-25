export const getImage = (path: string): Promise<string> | null => {
  return require(`@/assets/${path}`)
}

type AnyObject = Record<string, any>
type AnyDifficult = AnyObject | any[]

export const deepCopy = (source: AnyDifficult): AnyDifficult => {
  const result = typeof source === 'object' ? {} : []

  const recu = (src: any, res: any, key?: any) => {
    if (src instanceof Array) {
      for (const [index, item] of src) {
        if (typeof item === 'object') {
          recu(item, res[index])
        } else {
          res.push(item)
        }
      }
    } else if (typeof src === 'object' && !key) {
      for (const key in src) {
        recu(src, res, key)
      }
    } else {
      res[key] = src[key]
    }
  }

  recu(source, result)

  return result
}
