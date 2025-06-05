import { contextBridge, ipcRenderer } from 'electron'

// --- Exposing node modules to renderer ---
contextBridge.exposeInMainWorld('electronAPI', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
})

// --- White-listed channels ---
const validChannels = ['my-invokable-ipc']

contextBridge.exposeInMainWorld('ipc', {
  invoke: (channel: string, data: unknown) => {
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      return ipcRenderer.invoke(channel, data)
    }
  },
}) 