(function() {
    window.onresize = function () {
        getRem(750, 100)
    };
    function getRem(pwidth, prem) {
        var html = document.getElementsByTagName("html")[0];
        console.log(html)
        var oWidth = document.documentElement.clientWidth;
        html.style.fontSize = oWidth / pwidth * prem + "px";
    }
    getRem(750, 100)
}())


