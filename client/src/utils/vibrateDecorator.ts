export const vibrateDecorator = (callback: ((...args: any) => any) | undefined | null) => {
  if (!callback) return undefined
  return (...args: any): any => {
    try {
      navigator.vibrate(200)
    } catch (err) { }
    return callback?.(...args)
  }
}
