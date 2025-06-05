interface IElectronAPI {
  node: () => Promise<string>
  chrome: () => Promise<string>
  electron: () => Promise<string>
  ping: () => Promise<string>
}

declare global {
  interface Window {
    electronAPI: {
      node: () => string
      chrome: () => string
      electron: () => string
    }
    ipc: {
      invoke: (channel: string, ...args: unknown[]) => Promise<unknown>
    }
  }
}

export {} 