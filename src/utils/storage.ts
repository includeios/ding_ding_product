interface Options {
  key: string
  defaultValue?: any
}

export default class Storage {
  private key: string

  constructor(options: Options) {
    this.key = options.key

    const storage = localStorage.getItem(this.key)
    if (!storage) {
      localStorage.setItem(this.key, JSON.stringify(options.defaultValue ?? ""))
    }
  }

  set(data: any) {
    try {
      const dataStr = JSON.stringify(data)
      window.localStorage.setItem(this.key, dataStr)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  get(): any {
    try {
      const dataStr = window.localStorage.getItem(this.key)
      if (dataStr) {
        return JSON.parse(dataStr)
      } else {
        return null
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return null
    }
  }
}
