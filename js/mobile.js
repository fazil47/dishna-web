window.onload = function(){
	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
		}
	};
};

instanceOfFileReader.readAsDataURL(blob);

function previewFile() {
	var preview = document.querySelector('img');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();
  
	reader.addEventListener("load", function () {
	  preview.src = reader.result;
	}, false);
  
	if (file) {
	  reader.readAsDataURL(file);
	}

	showPreview();
  }

function showPreview() {
	var x = document.getElementById("preview");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

