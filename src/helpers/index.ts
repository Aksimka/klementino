export const getImage = (path: string): Promise<string> | null => {
  return require(`@/assets/${path}`)
}
