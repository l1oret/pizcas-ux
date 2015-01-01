var f, x;
x = document.getElementsByTagName("script")[0];
f = window.document.createElement("link");
f.rel = "stylesheet";
f.href = "http://pizcas-ux.es/css/pizcas-ux-fuentes.min.css";
window.setTimeout(function(){
x.parentNode.insertBefore(f, x);
},0)
