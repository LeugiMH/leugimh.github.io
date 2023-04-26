addEventListener("mousemove", (e) => {
    document.querySelectorAll("[data-paralax]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-paralax");
        var x = (e.clientX * movingValue) / 230;
        var y = (e.clientY * movingValue) / 250;

        obj.style.left = x+"px";
        obj.style.top = y+"px";
    });
    document.querySelectorAll("[data-slide]").forEach(function(obj){
            var movingValue = obj.getAttribute("data-slide");

            var x = ((e.clientX * movingValue)/10);

            obj.style.left = x+"px";
        });
    
});