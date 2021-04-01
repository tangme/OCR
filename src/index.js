const { createWorker } = require("tesseract.js");

// tesseract.js 具体的api地址:https://github.com/naptha/tesseract.js/blob/HEAD/docs/api.md

const worker = createWorker({
	// workerPath: "",//工作库，默认去找 依赖项 /tesseract.js/dist/worker.min.js的文件
	langPath: "../lang-data", //指定语言包文件夹地址
	logger: (m) => console.log(m), //增加日志打印，即显示当前正在做什么任务
	// corePath: "",//核心库，默认去找 依赖项 tesseract.js-core 下的文件
});

console.log("nice to meet you.");
(async () => {
	await worker.load(); //载入核心库并初始化
	await worker.loadLanguage("chi_sim+chi_sim_vert"); //载入语言包 多语言包 以 + 连接 chi_sim_vert 好像是纵向文字识别，就是古时候，文字是自上而下竖着写的
	await worker.initialize("chi_sim+chi_sim_vert"); //初始化语言包 多语言包 以 + 连接
	const {
		data: { text },
	} = await worker.recognize("../img/222.jpg");
	/* const {
		data: { text },
	} = await worker.recognize("../img/eng_bw.png"); */
	console.log(text);
	await worker.terminate();
})();
