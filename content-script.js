
function searchChild($ele) {
	// 当前元素的文本不包含子元素的值
	var node = $ele.contents().filter(function (index, content) {
		return content.nodeType === 3;
	})
	var str = node.text();
	/*  // 将换行符、回车符、制表符替换为空
	 str = str.replace(/[\r\n\t]/g,"");
	 // 将首尾空格替换为空
	 str = str.replace(/(^\s*)|(\s*$)/g, "");
	 if (str != null && str !== "" && str.indexOf(" ") !== 0) {
			 console.log(str)
	 }*/
	 // 中文、英文、数字、-开头或结尾
	var textReg = /天眼/
	if (textReg.test(str)) {
			node.each(function() {
				this.textContent = this.textContent.replace('天眼','');
			})
	}
	// 判断当前元素是否含有子元素
	if($ele.children() != null && $ele.children() !== "") {
			$ele.children().each(function(){
					// 当前元素的标签 tagName默认为大写 转为小写 不为script标签
					if(this.tagName.toLowerCase() !== "script") {
							searchChild($(this));
					}
			});
	}
}

(function() {
	// 从最外层html开始查找
	// setInterval(function(){
	// 	searchChild($("html"));
	// }, 2000)
	$(document).ready(function(){
		// searchChild($("html"));
		// setTimeout(function () {
		// 	searchChild($("html"));
		// }, 500)
		// setInterval(function () {
		// 	searchChild($("html"));
		// }, 500)
		setInterval(function () {
			$(".gitbook-plugin-modal").remove()
		}, 50)
	})
})()