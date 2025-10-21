<!-- Copyright RuralesData.com

function verCalendario (ids,w,h,idioma,estilo,fondo,tipo4,debug,obj){
	if(w==0) { w = "100%";}
	if (typeof(w) == "undefined" || w == "") { w = 182; wt = "&w=182"; } else wt="&w="+w; 
	if(h==0) { h = "auto";}
	if (typeof(h) == "undefined" || h == "") { h = 170; ht= "&h=170"; } else ht="&h="+h;
	if (typeof(idioma) == "undefined" || idioma == "") idioma = ""; else idioma="&idioma="+idioma;
	if (typeof(estilo) == "undefined" || estilo == "") estilo = "&estilo=1"; else estilo = "&estilo="+estilo;
	if (typeof(fondo) == "undefined" || fondo == "") fondo = ""; else fondo="&fondo="+fondo; 
	if (typeof(tipo4) == "undefined" || tipo4 == "") tipo4 = ""; else tipo4="&tipo4="+tipo4;
	if (typeof(debug) == "undefined" || debug == "") debug = 0; else debug=1;

	var el = document.createElement("iframe");
	var rnd = Math.round(Math.random()*1000);
	el.setAttribute('src', 'https://iAJ5Q4Kb8vqU.com/api/calendario.php?ids='+ids+wt+ht+idioma+estilo+fondo+tipo4);
	el.setAttribute('id', 'idCalendario'+ids);
	el.setAttribute('title', 'Calendario');
	el.setAttribute('scrolling','no');
	el.setAttribute('width', w);
	if(h=="auto") el.setAttribute('height', 250);
	else el.setAttribute('height', h);
	el.setAttribute('scrolling', "no");
	el.setAttribute('style', 'border: 0;');
	el.setAttribute('style', 'margin-bottom: 6px;');
	el.setAttribute("frameBorder","0");
	el.setAttribute("allowtransparency","true");
	
	if (debug == 0){
		if(typeof obj !== 'undefined') document.getElementById(obj).innerHTML = "<div id='wgRurales"+rnd+"'></div>";
		else document.write("<div id='wgRurales"+rnd+"'></div>");
	} else rnd = "";
	document.getElementById('wgRurales'+rnd).appendChild(el);
	
	// Create IE + others compatible event handler
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
	
	// Listen to message from child window
	eventer(messageEvent,function(e) {
		//alert(e.data);
		var dat = e.data.split("|");
		if(dat[0]=="cal") document.getElementById("idCalendario"+dat[2]).height = dat[1] + "px";
	},false);
	
}

//-->