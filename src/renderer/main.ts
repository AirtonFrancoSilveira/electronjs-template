/// <reference path="../preload/index.d.ts" />

console.log('👋 This message is being logged by "renderer.js", included via Vite')

const setVersion = (selector: string, version: string): void => {
  const element = document.getElementById(selector)
  if (element) {
    element.innerText = version
  }
}

setVersion('node-version', window.electronAPI.node())
setVersion('chrome-version', window.electronAPI.chrome())
setVersion('electron-version', window.electronAPI.electron()) 