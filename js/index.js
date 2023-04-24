addEventListener("mousemove", (e) => {
    document.querySelectorAll("[data-paralax]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-paralax");
        var x = (e.clientX * movingValue) / 230;
        var y = (e.clientY * movingValue) / 200;

        obj.style.left = x+"px";
        obj.style.top = y+"px";
    });
});