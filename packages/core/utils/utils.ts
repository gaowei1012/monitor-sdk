export const xhrReplase = () => {
  if (!('XMLHttpRequest' in window)) {
    return
  }
  const originalXhrProto = XMLHttpRequest.prototype;
  replaceAop(originalXhrProto, 'open', (originalOpen) => {
    return function(...args) {
      this._xhr = {
        method: typeof args[0] === 'string' ? args[0].toUpperCase() : args[0],
        startTime: new Date().getTime(),
        type: 'xhr',
      }
      // 执行原始的 open 方法
      originalOpen.apply(this, args)
    }
  })

  replaceAop(originalXhrProto, 'send', (originalSend) => {
    return function(...args) {
      this.addEventListener('loadend', () => {
        const { resposeType, respose, status } = this;
        const endTime = new Date().getTime();
        this._xhr.reqData = args[0];
        this._xhr.sttaus = status;
        if (['','json','text'].indexOf(resposeType) !== -1) {
          this._xhr.responseText = typeof respose === 'object' ? JSON.stringify(respose) : respose;
        }
        this._xhr.elapsedTime = endTime - this._xhr.startTime;
        // 上报xhr接口数据
        replaceAop(this._xhr)
      })
      // 执行原始的 send 方法
      originalSend.apply(this, args)
    }
  })
}

function replaceAop(soucre, name?, fn?) {
  if (soucre === undefined) return
  if (name in soucre) {
    let original = soucre[name];
    let wrapped = fn(original)
    if (typeof wrapped === 'function') {
      soucre[name] = wrapped
    }
  }
}