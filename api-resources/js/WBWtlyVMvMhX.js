// � 2016 - Script creado por Gormaz Inform�tica S.L.
// https://www.gormatica.com

function setCookieAS(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
} 

function getCookieAS(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
		return unescape(y);
		}
	}
} 

document.addEventListener('DOMContentLoaded',function(){
	"use strict";
	var cookie_check = getCookieAS('aviso_cookie_rw');
	var userLang = navigator.language || navigator.userLanguage; 

	if( cookie_check === null || cookie_check !== "visto" ) { 
		// aviso_cookie_rw no existe, por tanto mostramos alerta
		var elemDiv = document.createElement('div');
		elemDiv.style.cssText = 'position:fixed;width:auto;max-width:600px;bottom:20px;left:20px;right:20px;margin:0 auto;border-radius:16px;z-index:9999;background:linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);color:#333;font-size:14px;padding:24px 28px;box-shadow:0 8px 32px rgba(0,0,0,0.12);border:1px solid rgba(141,34,22,0.1);backdrop-filter:blur(10px);animation:slideUp 0.4s ease-out;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
		elemDiv.innerHTML = "<div style='display:flex;align-items:center;gap:12px'><div style='flex-shrink:0;width:40px;height:40px;background:linear-gradient(135deg,#8d2216,#b32a1b);border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(141,34,22,0.3)'><svg style='width:22px;height:22px;fill:#fff' viewBox='0 0 24 24'><path d='M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z'/></svg></div><div style='flex:1;line-height:1.6'><div style='font-weight:600;color:#1a1a1a;margin-bottom:4px'>Usamos cookies técnicas para el funcionamiento del sitio.</div><div style='font-size:13px;color:#666'>No almacenamos datos personales. Tu privacidad está protegida.</div></div></div><div style='display:flex;gap:10px;margin-top:20px;justify-content:flex-end;align-items:center'><a href='#' onclick='legal(\"cookies\");' data-bs-toggle='modal' data-bs-target='#modal-legal' style='color:#8d2216;text-decoration:none;font-size:13px;font-weight:500;padding:8px 16px;border-radius:8px;transition:all 0.3s ease;display:inline-block' onmouseover='this.style.background=\"rgba(141,34,22,0.08)\"' onmouseout='this.style.background=\"transparent\"'>Ver política</a><button style='cursor:pointer;font-size:14px;font-weight:600;background:linear-gradient(135deg,#8d2216,#b32a1b);color:#FFF;border:none;padding:10px 24px;border-radius:8px;transition:all 0.3s ease;box-shadow:0 4px 12px rgba(141,34,22,0.3)' type='button' onmouseover='this.style.transform=\"translateY(-2px)\";this.style.boxShadow=\"0 6px 16px rgba(141,34,22,0.4)\"' onmouseout='this.style.transform=\"translateY(0)\";this.style.boxShadow=\"0 4px 12px rgba(141,34,22,0.3)\"' onClick='setCookieAS(\"aviso_cookie_rw\", \"visto\", 180);this.parentElement.parentElement.style.animation=\"slideDown 0.3s ease-out\";setTimeout(()=>this.parentElement.parentElement.remove(),300)'>Aceptar</button></div><style>@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDown{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(30px)}}</style>";
		document.body.appendChild(elemDiv);
	} 
});

