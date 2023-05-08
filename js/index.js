//No mouse

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

        var x = ((e.clientX * movingValue)) / 1;

        obj.style.transform = "translateX("+x+"px)";
    });
    
});
//No touch
addEventListener("touchmove", (e) => {
    document.querySelectorAll("[data-paralax]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-paralax");
        var x = (e.touches[0].clientX * movingValue) / 230;
        var y = (e.touches[0].clientY * movingValue) / 250;

        obj.style.left = x+"px";
        obj.style.top = y+"px";
    });
    document.querySelectorAll("[data-slide]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-slide");

        var x = ((e.touches[0].clientX * movingValue) / 1);

        obj.style.transform = "translateX("+x+"px)";
    });

});
//Giroscópio
window.addEventListener("deviceorientation", (e) => {
    const ap = document.getElementById("alpha");
    const gb = document.getElementById("gamma");
    const bt = document.getElementById("beta");
    var alpha = Math.round(e.alpha); // eixo Z
    var gamma = Math.round(e.gamma); // eixo Y
    var beta = Math.round(e.beta); // eixo X

    ap.innerText = "Alpha Z" + alpha;
    gb.innerText = "Gamma Y" + gamma;
    bt.innerText = "Beta X" + beta;

    document.querySelectorAll("[data-paralax]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-paralax");
        var x = (beta * movingValue) / 2;
        var y = (gamma * movingValue) / 2;

        obj.style.left = x+"px";
        obj.style.top = y+"px";
    });
    document.querySelectorAll("[data-slide]").forEach(function(obj){
        var movingValue = obj.getAttribute("data-slide");

        var x = ((gamma * movingValue) * 2);

        obj.style.transform = "translateX("+x+"px)";
    });

});