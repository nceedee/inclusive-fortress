
var epdofitvids=epdofitvids||function(a){a.fn.fitVidsEP=function(b){if(_EPYT_.epresponsiveselector.constructor!==Array){_EPYT_.epresponsiveselector=JSON.parse(_EPYT_.epresponsiveselector)}var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var f=document.createElement("div"),d=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],e="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";f.className="fit-vids-style";f.id="fit-vids-style";f.style.display="none";f.innerHTML=e;d.parentNode.insertBefore(f,d)}if(b){a.extend(c,b)}return this.each(function(){var g=_EPYT_.epresponsiveselector;if(c.customSelector){g.push(c.customSelector)}var h=a(this).find(g.join(","));h=h.not("object object");h.each(function(){var n=a(this);if(this.tagName.toLowerCase()==="embed"&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length||n.css("position")==="absolute"){return}if(n.is("[data-origwidth]:not([width])")){n.attr("width",n.data("origwidth"))}if(n.is("[data-origheight]:not([height])")){n.attr("height",n.data("origheight"))}var q=(this.tagName.toLowerCase()==="object"||(n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))))?parseInt(n.attr("height"),10):n.height(),k=!isNaN(parseInt(n.attr("width"),10))?parseInt(n.attr("width"),10):n.width(),p=q/k;if(!n.attr("id")){var i="fitvid"+Math.floor(Math.random()*999999);n.attr("id",i)}var o=n.attr("width");var j=n.attr("height");if(n.parent().hasClass("epyt-video-wrapper")){try{n.parent().addClass("fluid-width-video-wrapper").attr("style","padding-top: "+(p*100)+"% !important;");n.removeAttr("height").removeAttr("width");setTimeout(function(){if(parseInt(n.parent().css("padding-top"),10)>n.height()+20){n.parent().removeClass("fluid-width-video-wrapper").css("padding-top","");n.attr("width",o);n.attr("height",j)}},100)}catch(l){}}else{var m=document.createElement("div");m.className="fluid-width-video-wrapper";try{n.wrap(m).parent(".fluid-width-video-wrapper").attr("style","padding-top: "+(p*100)+"% !important;");n.removeAttr("height").removeAttr("width");setTimeout(function(){if(parseInt(n.parent().css("padding-top"),10)>n.height()+20){n.parent().removeClass("fluid-width-video-wrapper").css("padding-top","");n.attr("width",o);n.attr("height",j)}},100)}catch(l){}}})})};a(document).ready(function(){a("body").fitVidsEP();a(document).ajaxSuccess(function(c,d,b){if(d&&d.responseText&&d.responseText.indexOf("<iframe ")!==-1){a("body").fitVidsEP()}})});return true};try{epdofitvids(window.jQuery)}catch(err){};