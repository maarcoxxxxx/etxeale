<!-- Copyright RuralesData.com

function fReservas(id,estilo,idioma){
	if (typeof(estilo) == "undefined" || estilo == "") estilo = "&estilo=1"; else estilo = "&estilo="+estilo;
	if (typeof(idioma) == "undefined" || idioma == "") idioma = ""; else idioma = "&idioma="+idioma;
	
	var $_GET = {};
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) { return decodeURIComponent(s.split("+").join(" ")); }
		$_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	if (typeof($_GET["cin"]) == "undefined" || $_GET["cin"] == "") cin = ""; else cin = "&cin="+$_GET["cin"];
	if (typeof($_GET["cout"]) == "undefined" || $_GET["cout"] == "") cout = ""; else cout = "&cout="+$_GET["cout"];

	var el = document.createElement("iframe");
	var rnd = Math.round(Math.random()*1000);
	el.setAttribute('src', 'https://iAJ5Q4Kb8vqU.com/api/reservas/form.php?id='+id+estilo+idioma+cin+cout);
	el.setAttribute('id', 'idForm'+id);
	el.setAttribute('scrolling','no');
	el.setAttribute('width', '100%');
	el.setAttribute('height', 300);
	el.setAttribute('scrolling', "no");
	el.setAttribute('style', 'border: 0;');
	el.setAttribute('style', 'margin-bottom: 6px;');
	el.setAttribute("frameBorder","0");
	el.setAttribute("allowtransparency","true");
	document.write("<div id='wgRurales"+rnd+"'></div>");
	document.getElementById('wgRurales'+rnd).appendChild(el);
	
	// Create IE + others compatible event handler
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
	
	// Listen to message from child window
	eventer(messageEvent,function(e) {
		//alert(e.data);
		var dat = e.data.split("|");
		if(dat[0]=="for") document.getElementById("idForm"+dat[2]).height = dat[1] + "px";
	},false);
	
}

function rdBookBar(id,estilo,idioma){
	if(typeof(idioma) == "undefined" || idioma == "") idioma = ""; else idioma = idioma;
	
	jQuery(document).ready(function(){
		jQuery("body").append("<div id='rdBook' class='bar"+estilo+"'><div class='rdB_loading'>...</div></div><div class='rdUnder'></div>");
	});
		
	rdBook_includes();
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/bar.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/datepicker.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.js','js',null);
	
	if (typeof(jQuery) == 'undefined') 
    	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/W8Bp8koXOZ8u.js','js',function(){jQuery.noConflict();});  
	
    rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery-ui-1.11.4/jquery-ui.min.js','js',function(){
		rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery.ui.datepicker-es.js','js',function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			if(dd<10) { dd='0'+dd } 
			if(mm<10) { mm='0'+mm } 
			today = dd+'/'+mm+'/'+yyyy;
			
			(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
			
			jQuery.datepicker.regional["es"];
			jQuery.ajax( "/include/rdload.php?rdurl=/api/reservas/bar.php?"+Math.random(), 
				{ type: 'POST', data : {rdlg:idioma, rdid:id, mv:(jQuery.browser.mobile?1:0)}} )
			.done(function(html) {
				jQuery('#rdBook').html(html);
				//alert(jQuery('#rdBook').length);
				jQuery('#fraloj2').multipleSelect({position: 'top', placeholder: jQuery("#textoselect").val(), selectAll: false,onClick: function(view) {
					if(view.checked){
						if(parseInt(view.value)==-1){
							jQuery('#fraloj2').multipleSelect('uncheckAll');
							jQuery('#fraloj2').multipleSelect('setSelects', [-1]);
						} else {
							jQuery("input[value='-1'][data-name='selectItemfraloj']").attr("checked",false);
						}
					}
					var selects = jQuery('#fraloj2').multipleSelect('getSelects');
					if(selects=="") jQuery("#frentrada").attr("disabled",true);
					else jQuery("#frentrada").attr("disabled",false);
					jQuery("#frentrada").val("");
					jQuery("#frsalida").val("");
					jQuery("#frsalida").attr("disabled",true);
					rdBookBar_ocu(selects);
				}});
				
				jQuery("#frentrada").datepicker({
					beforeShowDay: rdBookCheckDate,
					dateFormat: "dd/mm/yy",
					minDate: today,
					onSelect: function(dateText){
						jQuery("#frsalida").attr("disabled",false);
						jQuery("#frsalida").datepicker("option", { minDate: rdBookGetRangeIni(dateText) } );
						jQuery("#frsalida").datepicker("option", { maxDate: rdBookGetRangeFin(dateText) } );
						jQuery("#frsalida").datepicker("refresh");
					}
				});
				jQuery("#frsalida").datepicker({
					dateFormat: "dd/mm/yy",
					minDate: today
				});
			})
			.fail(function() {
				jQuery('#rdBook').html("");
			});
		});
	});
}

function rdBookWidget(id,estilo,idioma,obj){
	if (typeof(idioma) == "undefined" || idioma == "") idioma = ""; else idioma = idioma;
	
    if(typeof obj !== 'undefined') document.getElementById(obj).innerHTML = "<div id='rdBookWidget' class='widget"+estilo+"'><div class='rdB_loading'>...</div></div>";
	else document.write("<div id='rdBookWidget' class='widget"+estilo+"'><div class='rdB_loading'>...</div></div>");
	
	rdBook_includes();
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/widget.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/datepicker.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.js','js',null);
	
	if (typeof(jQuery) == 'undefined') 
    	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/W8Bp8koXOZ8u.js','js',function(){jQuery.noConflict();});  
	
    rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery-ui-1.11.4/jquery-ui.min.js','js',function(){
		rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery.ui.datepicker-es.js','js',function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			if(dd<10) { dd='0'+dd } 
			if(mm<10) { mm='0'+mm } 
			today = dd+'/'+mm+'/'+yyyy;
			
			(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
			
			jQuery.datepicker.regional["es"];
			jQuery.ajax( "https://iAJ5Q4Kb8vqU.com/api/reservas/widget.php?"+Math.random(), 
				{ type: 'POST', data : {rdlg:idioma, rdid:id, mv:(jQuery.browser.mobile?1:0)}} )
			.done(function(html) {
				//alert();
				var ancho = jQuery('#rdBookWidget').width();
				if(ancho<=500) jQuery('#rdBookWidget').addClass('xs');
				else if(ancho<=800) jQuery('#rdBookWidget').addClass('sm');
				
				jQuery('#rdBookWidget').html(html);
				
				jQuery('#fraloj2').multipleSelect({position: 'top', placeholder: jQuery("#textoselect").val(), selectAll: false,onClick: function(view) {
					if(view.checked){
						if(parseInt(view.value)==-1){
							jQuery('#fraloj2').multipleSelect('uncheckAll');
							jQuery('#fraloj2').multipleSelect('setSelects', [-1]);
						} else {
							jQuery("input[value='-1'][data-name='selectItemfraloj']").attr("checked",false);
						}
					}
					var selects = jQuery('#fraloj2').multipleSelect('getSelects');
					if(selects=="") jQuery("#frentrada").attr("disabled",true);
					else jQuery("#frentrada").attr("disabled",false);
					jQuery("#frentrada").val("");
					jQuery("#frsalida").val("");
					jQuery("#frsalida").attr("disabled",true);
					rdBookBar_ocu(selects);
				}});
				
				jQuery("#frentrada").datepicker({
					beforeShowDay: rdBookCheckDate,
					dateFormat: "dd/mm/yy",
					minDate: today,
					onSelect: function(dateText){
						jQuery("#frsalida").attr("disabled",false);
						jQuery("#frsalida").datepicker("option", { minDate: rdBookGetRangeIni(dateText) } );
						jQuery("#frsalida").datepicker("option", { maxDate: rdBookGetRangeFin(dateText) } );
						jQuery("#frsalida").datepicker("refresh");
					}
				});
				jQuery("#frsalida").datepicker({
					dateFormat: "dd/mm/yy",
					minDate: today
				});
			})
			.fail(function() {
				jQuery('#rdBookWidget').html("");
			});
		});
	});
}

function rdBookWidgetTMP(id,estilo,idioma){
	if (typeof(idioma) == "undefined" || idioma == "") idioma = ""; else idioma = idioma;
	
    document.write("<div id='rdBookWidget' class='widget"+estilo+"'><div class='rdB_loading'>...</div></div>");
	
	rdBook_includes();
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/widget.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/api/reservas/datepicker.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.css','css',null);
	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/multiple-select/multiple-select.js','js',null);
	
	if (typeof(jQuery) == 'undefined') 
    	rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/W8Bp8koXOZ8u.js','js',function(){jQuery.noConflict();});  
	
    rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery-ui-1.11.4/jquery-ui.min.js','js',function(){
		rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery.ui.datepicker-es.js','js',function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			if(dd<10) { dd='0'+dd } 
			if(mm<10) { mm='0'+mm } 
			today = dd+'/'+mm+'/'+yyyy;
			
			jQuery.datepicker.regional["es"];
			jQuery.ajax( "/include/rdload.php?rdurl=/api/reservas/widget.php?"+Math.random(), 
				{ type: 'POST', data : {rdlg:idioma, rdid:id}} )
			.done(function(html) {
				//alert();
				var ancho = jQuery('#rdBookWidget').width();
				if(ancho<=500) jQuery('#rdBookWidget').addClass('xs');
				else if(ancho<=800) jQuery('#rdBookWidget').addClass('sm');
				
				jQuery('#rdBookWidget').html(html);
				
				jQuery('#fraloj2').multipleSelect({position: 'top', placeholder: jQuery("#textoselect").val(), selectAll: false,onClick: function(view) {
					if(view.checked){
						if(parseInt(view.value)==-1){
							jQuery('#fraloj2').multipleSelect('uncheckAll');
							jQuery('#fraloj2').multipleSelect('setSelects', [-1]);
						} else {
							jQuery("input[value='-1'][data-name='selectItemfraloj']").attr("checked",false);
						}
					}
					var selects = jQuery('#fraloj2').multipleSelect('getSelects');
					if(selects=="") jQuery("#frentrada").attr("disabled",true);
					else jQuery("#frentrada").attr("disabled",false);
					jQuery("#frentrada").val("");
					jQuery("#frsalida").val("");
					jQuery("#frsalida").attr("disabled",true);
					rdBookBar_ocu(selects);
				}});
				
				jQuery("#frentrada").datepicker({
					beforeShowDay: rdBookCheckDate,
					dateFormat: "dd/mm/yy",
					minDate: today,
					onSelect: function(dateText){
						jQuery("#frsalida").attr("disabled",false);
						jQuery("#frsalida").datepicker("option", { minDate: rdBookGetRangeIni(dateText) } );
						jQuery("#frsalida").datepicker("option", { maxDate: rdBookGetRangeFin(dateText) } );
						jQuery("#frsalida").datepicker("refresh");
					}
				});
				jQuery("#frsalida").datepicker({
					dateFormat: "dd/mm/yy",
					minDate: today
				});
			})
			.fail(function() {
				jQuery('#rdBookWidget').html("");
			});
		});
	});
}
				
function rdBookCheckDate(date) {
	for (i = 0; i < rdBookOcupados.length; i++) {
		if (date.getMonth()+1 == rdBookOcupados[i][1] && date.getDate() == rdBookOcupados[i][0] && date.getFullYear() == rdBookOcupados[i][2]) {
			return [false, rdBookOcupados[i][3] + '_day'];
		}
	}
	return [true, ''];
}

function rdBookGetRangeIni(dateTxt){
	var date = dateTxt.split("/");
	var d = new Date(date[2],date[1],0);
	var diasmes = d.getDate();
		
	if(parseInt(jQuery("#rdtipo").val())==1) var dia = parseInt(date[0])+2;
	else var dia = parseInt(date[0])+1;
	
	var mes = parseInt(date[1]);
	var ano = parseInt(date[2]);
	if(dia>diasmes){ dia = dia-diasmes; mes++; }
	if(mes>12){ mes = 1; ano++; }

	if(dia<10) { dia='0'+dia }
	if(mes<10) { mes='0'+mes }
	
	return dia+'/'+mes+'/'+ano;
}

function rdBookGetRangeFin(dateTxt){
	var fintmp = rdBookGetRangeIni(dateTxt);
	var date = fintmp.split("/");
	var d1 = new Date(date[2],date[1],date[0]);
	
	for (i = 0; i < rdBookOcupados.length; i++) {
		var d2 = new Date(rdBookOcupados[i][2],rdBookOcupados[i][1],rdBookOcupados[i][0]);
		if (d2 >= d1) {
			var dd = d2.getDate();
			var mm = d2.getMonth();
			var yyyy = d2.getFullYear();
			if(dd<10) { dd='0'+dd } 
			if(mm<10) { mm='0'+mm } 
			return dd+'/'+mm+'/'+yyyy;
		}
	}
	
	return '';
}

function rdBookBar_ocu(id){
	if(id==null || id==0) id = jQuery("#rdid").val();
	if(id!=null){
		jQuery("#rdOcu").load("https://iAJ5Q4Kb8vqU.com/api/reservas/bar.php?id="+(jQuery("#rdid").val())+"&ocu="+id, function() {
			jQuery("#frentrada").val("");
			jQuery("#frsalida").val("");
			jQuery("#frentrada").datepicker("refresh");
			jQuery("#frsalida").attr("disabled",true);
			jQuery("#frsalida").datepicker("refresh");
		});
	}
}

function rdBookWidget_ocu(id){
	if(id==null || id==0) id = jQuery("#rdid").val();
	if(id!=null){
		jQuery("#rdOcu").load("https://iAJ5Q4Kb8vqU.com/api/reservas/widget.php?id="+(jQuery("#rdid").val())+"&ocu="+id, function() {
			jQuery("#frentrada").val("");
			jQuery("#frsalida").val("");
			jQuery("#frentrada").datepicker("refresh");
			jQuery("#frsalida").attr("disabled",true);
			jQuery("#frsalida").datepicker("refresh");
		});
	}
}

function rdBookBar_contract(){
	jQuery("#rdBook").removeClass('expand');
}

function rdBookBar_expand(){
	jQuery("#rdBook").addClass('expand');
}

function rdBookBar_check(step){
	if(step==1){
		if(jQuery("#frentrada").val()==""){
			alert(jQuery("#frentrada_check").html());
			jQuery("#frentrada").focus();
			return false;
		} else if(jQuery("#frsalida").val()==""){
			alert(jQuery("#frsalida_check").html());
			jQuery("#frsalida").focus();
			return false;
		} else if(jQuery("#fradultos").val()==""){
			alert(jQuery("#fradultos_check").html());
			jQuery("#fradultos").focus();
			return false;
		} else return true;
	} else if(step==2){
		if(jQuery("#frnombre").val()==""){
			alert(jQuery("#frnombre_check").html());
			jQuery("#frnombre").focus();
			return false;
		} else if(jQuery("#frtelefono").val()==""){
			alert(jQuery("#frtelefono_check").html());
			jQuery("#frtelefono").focus();
			return false;
		} else if(jQuery("#frcorreo").val()==""){
			alert(jQuery("#frcorreo_check").html());
			jQuery("#frtelefono").focus();
			return false;
		} else return true;
	} else return false;
}

function rdBookWidget_check(){
	if(jQuery("#frentrada").val()==""){
		alert(jQuery("#frentrada_check").html());
		jQuery("#frentrada").focus();
		return false;
	} else if(jQuery("#frsalida").val()==""){
		alert(jQuery("#frsalida_check").html());
		jQuery("#frsalida").focus();
		return false;
	} else if(jQuery("#fradultos").val()==""){
		alert(jQuery("#fradultos_check").html());
		jQuery("#fradultos").focus();
		return false;
	} else if(jQuery("#frnombre").val()==""){
		alert(jQuery("#frnombre_check").html());
		jQuery("#frnombre").focus();
		return false;
	} else if(jQuery("#frcorreo").val()==""){
		alert(jQuery("#frcorreo_check").html());
		jQuery("#frcorreo").focus();
		return false;
	} else if(jQuery("#frtelefono").val()==""){
		alert(jQuery("#frtelefono_check").html());
		jQuery("#frtelefono").focus();
		return false;
	} else if(jQuery("#frlopd").length>0 && !jQuery("#frlopd").is(":checked")){
		alert(jQuery("#frlopd_check").html());
		return false;
	} else if(jQuery("#frcaptcha").val()==""){
		alert(jQuery("#frcaptcha_check").html());
		jQuery("#frcaptcha").focus();
		return false;
	} else return true;
}

function rdBookBarEnviar(){
	if(rdBookBar_check(2) && confirm("�Enviar solicitud?")){
		jQuery.ajax( "https://iAJ5Q4Kb8vqU.com/api/reservas/bar.php?enviar", 
        { type: 'POST', dataType: 'json', data : jQuery("#rdBookBarForm").serialize() } )
		.done(function(data) {
			if(data.error==""){
				jQuery("#rdBookBarForm").hide();
				if(data.url!=""){
					jQuery('#rdBook').append("<div id='rdBookBarResult'><p style='text-align:center;'>"+data.error_txt+"</p></div>");
					document.location.href=data.url;
				} else {
					jQuery('#rdBook').append("<div id='rdBookBarResult'><p style='text-align:center;'>"+data.error_txt+" <a href='#' onclick='rdBookBarReset();return false;'>VOLVER</a></p></div>");
				}
			} else alert(data.error_txt);
		})
		.fail(function() {
			alert("Fallo al intentar enviar la solicitud de reserva");
		});
	}
}

function rdBookBarEnviar_whatsapp(num){
	if(rdBookBar_check(2)){
		var url = 'https://api.whatsapp.com/send?phone='+num+'&text=NUEVA%20RESERVA:%0A';
		url+= 'Nombre:%20'+encodeURI(jQuery('#frnombre').val())+'%0A';
		url+= 'Correo:%20'+(jQuery('#frcorreo').val()).replace(' ','%20')+'%0A';
		url+= 'Tel%C3%A9fono:%20'+(jQuery('#frtelefono').val()).replace(' ','%20')+'%0A';
		if(jQuery('#fraloj2').length) url+= 'Alojamiento:%20'+encodeURI(jQuery('#fraloj2').multipleSelect('getSelects','text')).replace(' ','%20')+'%0A';
		else url+= 'Alojamiento:%20'+encodeURI(jQuery('#fralojnombre').val()).replace(' ','%20')+'%0A';
		url+= 'F.%20ENT:%20'+(jQuery('#frentrada').val()).replace('/','%2F')+'%0A';
		url+= 'F.%20SAL:%20'+(jQuery('#frsalida').val()).replace('/','%2F')+'%0A';
		var ninos = parseInt(jQuery('#frninos').val());
		url+= 'PAX:%20'+(jQuery('#fradultos').val()).replace(' ','%20')+' adultos'+(ninos>0?(',%20'+ninos+'%20ni%C3%B1os'):'')+'%0A';
		window.open(url);
	}
}

function rdBookWidgetEnviar(){
	if(rdBookWidget_check() && confirm("�Enviar solicitud?")){
		jQuery.ajax( "https://iAJ5Q4Kb8vqU.com/api/reservas/widget.php?enviar", 
        { type: 'POST', dataType: 'json', data : jQuery("#rdBookWidgetForm").serialize() } )
		.done(function(data) {
			if(data.error==""){
				jQuery("#rdBookWidgetForm").hide();
				if(data.url!=""){
					jQuery('#rdBookWidget').append("<div id='rdBookWidgetResult'><p style='text-align:center;'>"+data.error_txt+"</p></div>");
					document.location.href=data.url;
				} else {
					jQuery('#rdBookWidget').append("<div id='rdBookWidgetResult'><p style='text-align:center;'>"+data.error_txt+" <a href='#' onclick='rdBookWidgetReset();return false;'>VOLVER</a></p></div>");
				}
			} else alert(data.error_txt);
		})
		.fail(function() {
			alert("Fallo al intentar enviar la solicitud de reserva");
		});
	}
}

function rdBookWidgetEnviar_whatsapp(num){
	if(rdBookWidget_check()){
		var url = 'https://api.whatsapp.com/send?phone='+num+'&text=NUEVA%20RESERVA:%0A';
		url+= 'Nombre:%20'+encodeURI(jQuery('#frnombre').val())+'%0A';
		url+= 'Correo:%20'+(jQuery('#frcorreo').val()).replace(' ','%20')+'%0A';
		url+= 'Tel%C3%A9fono:%20'+(jQuery('#frtelefono').val()).replace(' ','%20')+'%0A';
		if(jQuery('#fraloj2').length) url+= 'Alojamiento:%20'+encodeURI(jQuery('#fraloj2').multipleSelect('getSelects','text')).replace(' ','%20')+'%0A';
		else url+= 'Alojamiento:%20'+encodeURI(jQuery('#fralojnombre').val()).replace(' ','%20')+'%0A';
		url+= 'F.%20ENT:%20'+(jQuery('#frentrada').val()).replace('/','%2F')+'%0A';
		url+= 'F.%20SAL:%20'+(jQuery('#frsalida').val()).replace('/','%2F')+'%0A';
		var ninos = parseInt(jQuery('#frninos').val());
		url+= 'PAX:%20'+(jQuery('#fradultos').val()).replace(' ','%20')+' adultos'+(ninos>0?(',%20'+ninos+'%20ni%C3%B1os'):'')+'%0A';
		url+= 'COMEN:%20'+encodeURI(jQuery('#frcomentarios').val())+'%0A';
		window.open(url);
	}
}

function rdBookBarReset(){
	jQuery("#rdBookBarForm").find("input[type=text], textarea").val("");
	jQuery("#rdBookBarResult").remove();
	rdBookBarStep(1);
	jQuery("#rdBookBarForm").show();
}

function rdBookWidgetReset(){
	jQuery("#rdBookWidgetForm").find("input[type=text], input[type=number], textarea").val("");
	jQuery("#rdBookWidgetResult").remove();
	jQuery("#rdBookWidgetForm").show();
}

function rdBookBarStep(step){
	if(step==1 || (step==2&&rdBookBar_check(1))){
		jQuery("#rdBook .step").hide(300,"",function(){
			jQuery("#rdBook .step"+step).fadeIn(300);
		});
		
	}
}

function rdBook_includes() {
    rdBook_includeLibreria('https://iAJ5Q4Kb8vqU.com/js/jquery-ui-1.11.4/jquery-ui.min.css','css',null); 
    //rdBook_includeLibreria('http://iAJ5Q4Kb8vqU.com/css/skins/cangas/cangas.datepicker.css','css',null); 
}

function rdBook_includeLibreria(ruta,tipo,callbackFunc){
	var head = document.getElementsByTagName('head')[0];  
	if(tipo=='js')
	{
		var se1 = document.createElement('script');
		se1.src = ruta;
		if(callbackFunc!=null) se1.onload=callbackFunc;
		head.appendChild(se1);
	}
	
	if(tipo=='css')
	{
		var cssNode_jquery = document.createElement('link');
		cssNode_jquery.type = 'text/css';
		cssNode_jquery.rel = 'stylesheet';
		cssNode_jquery.href = ruta;
		cssNode_jquery.media = 'screen';
		head.appendChild(cssNode_jquery);
	}
}


//-->