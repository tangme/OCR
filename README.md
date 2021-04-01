# OCR

Optical Character Recognition (光学字符识别)，白话就是文字识别

基于 **tesseract.js** 离线版本的一个 demo，开箱即用的提取图片中的文字信息(注意白纸黑字效果最佳)

官方离线版应用代码很简洁清晰，地址如下

[点击跳转至官方离线仓库地址](https://github.com/jeromewu/tesseract.js-offline)

[下载离线的训练包数据](https://github.com/naptha/tessdata/tree/gh-pages/4.0.0)

更多参考示例可以查看 npm 网站里 [tesseract.js](https://www.npmjs.com/package/tesseract.js)信息

## 加载流程

简单的描述下实例加载流程，防止回头用时，啥都不记得了

- 创建 createWorker 实例
- 如下几个关键的参数需要注意
  - **workerPath**
    - 工作路径
    - 如果是*node*端使用，默认会去找 `node_modules\tesseract.js\dist\worker.min.js` 文件；不需要指定
    - 如果是*browser*端使用，须要指明地址；默认拉取 github 上地址，国内速度很慢
  - **corePath**
    - 核心库路径
    - 如果是*node*端使用，且安装了 **tesseract.js-core** 库，则会取 `node_modules\tesseract.js-core\tesseract-core.wasm` 文件；未安装，则提示文件未找到
    - 如果是*browse*端使用，须指明 js 文件地址；默认拉取 github 上地址，国内速度很慢
  - **langPath**
    - 语言包路径
    - 离线使用时，均需下载，下载地址 `https://github.com/naptha/tessdata/tree/gh-pages/4.0.0`
    - 加载时，会先从缓存里取 _.traineddata 文件，没有则拉取解析 _.traineddata.gz 文件
    - 训练自己的语言模型 参看 `https://tesseract-ocr.github.io/tessdoc/`
    - 默认拉去 github 上地址，国内很慢

搞定以上参数后，理论上就能跑起来了
