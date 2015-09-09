window.onload = function(){
	// var page1 = document.getElementById('page1');
	var openButton = document.getElementById('openButton');

	openButton.onClick = function(){
		setTimeout(function(){
			var page1 = document.getElementById('page1');
			page1.style.background = 'url(img/index_BG_change.jpg)';
		},
		3000);
	}
}
