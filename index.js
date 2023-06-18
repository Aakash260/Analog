$(document).ready(()=>{
    setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hr=30* htime+mtime/2;
    mr=6*mtime;
    sr=6*stime;
    $("#sec").css({'transform':'rotate('+sr+'deg)','transform-origin':'bottom'});
    $("#min").css({'transform':'rotate('+mr+'deg)','transform-origin':'bottom'});
    $("#hr").css({'transform':'rotate('+hr+'deg)','transform-origin':'bottom'});
},1000);
})