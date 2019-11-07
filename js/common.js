$(function () {
    let nav = $('.tabBar ul li').children();
    nav.each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            let imgSrc = $this[0].firstElementChild.firstElementChild.src
            var index = imgSrc.lastIndexOf(".");
            let newImg = imgSrc.substring(0, index)
            $this[0].firstElementChild.firstElementChild.src = newImg + "02" + '.png';
        }
    })
    // 地图
    var pusiLocation = function () {
        var map = new BMap.Map("map");
        // 初始化地图
        var point = new BMap.Point(118.97549, 25.40753);
        // 点击加减缩放控件
        let opts = { type: BMAP_ANCHOR_TOP_LEFT, offset: new BMap.Size(100 + "%", 100 + "px") }
        map.addControl(new BMap.NavigationControl(opts));
        map.centerAndZoom(point, 15);
        // 在地图上定位到某点
        var marker = new BMap.Marker(point)//创建标注
        map.addOverlay(marker);// 将标注添加到地图中
        let myLabel = new BMap.Label("璞思学校", {
            offset: new BMap.Size(15, -25),       // label的偏移量，为了让label的中心显示在点上
            position: point
        });
        map.addOverlay(myLabel)
        myLabel.setStyle({
            fontSize: "14px",
            borderWidth: '1px',
            borderStyle: "solid",
            borderColor: "#000"
        });
        // 打开信息窗口
        marker.addEventListener("click", function (e) {
            console.log(e)
            // var opts = {
            //     width: 250,     // 信息窗口宽度    
            //     height: 100,     // 信息窗口高度    
            //     title: "璞思",  // 信息窗口标题  
            //     enableAutoPan:false
            // }
            // var infoWindow = new BMap.InfoWindow("璞思学校", opts);  // 创建信息窗口对象    
            // map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
        });
    }
    pusiLocation()
})