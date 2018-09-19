var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function() {
	if (event.target.tagName == 'TD') {
		event.target.parentNode.remove();
	}
});