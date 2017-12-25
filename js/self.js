var OPENLAYER_MAP = {};

// 获取JOSN数据
OPENLAYER_MAP.markerInfos = {
                "resultMsg":"success",
                "resultData":{"navCoodInfos":[
                {"X":113.65,"Y":34.76,"Z":1},
                {"X":113.562613,"Y":34.78672,"Z":1},
                // {"X":116.562573,"Y":39.786764,"Z":1,"Azimuth":"3.141593","Kind":0,"Value":"0"},
                // {"X":116.562648,"Y":39.786681,"Z":1,"Azimuth":"0.000000","Kind":0,"Value":"0"},
                // {"X":116.562652,"Y":39.786677,"Z":1,"Azimuth":"0.000000","Kind":7,"Value":"ON928531303766036480_ENTE028"}
            ]},
            "resultCode":200
        };

// 弹出框
OPENLAYER_MAP.popContainer = document.getElementById('popup');
OPENLAYER_MAP.popContent = document.getElementById('popup-content'); //内容
OPENLAYER_MAP.popCloser = document.getElementById('popup-closer'); //关闭
OPENLAYER_MAP.popUpItem = new ol.Overlay({
    element:OPENLAYER_MAP.popContainer,  //==》popup
    autoPan:true,
    autoPanAnimation:{
        duration:250
    }
})
OPENLAYER_MAP.mapContainer = "#mapContainer";
OPENLAYER_MAP.map;  //创建地图的对象
OPENLAYER_MAP.imageStyle = new ol.style.Style({  //创建图片
    image:new ol.style.Icon({
        src:'image/achor.png',
        scale:0.2
    })
})
// 创建Label样式
OPENLAYER_MAP.creatLabelStyle = function(feature){
    return new ol.style.Style({
        image:new ol.style.Icon({
            anchor:[0.5,20],// 图片与文字之间的距离
            anchorOrigin:'top-right',//样式的起点位置==
            anchorXUnits:'fraction',//x方向单位
            anchorYUnits:'pixels',
            offsetOrigin:'top-right',//偏移量
            src:'image/anchor.png'
        }),
        text:new ol.style.Text({
            fill:new ol.style.Fill({
                color:'#333'
            })
        })
    })
};
OPENLAYER_MAP.initMapEvents = function(){
    OPENLAYER_MAP.map.on('singleClick',function(event){
        alert('44')
        debugger;
        var pos = event.coordinate;
        var coord = ol.proj.transform(event.coordinate,'EPSG:3857','EPSG:4326');
        console.log(pos);
        // 创建marker
        var anchor = new ol.Feature({
            geometry:new ol.geom.Point(pos)
        });
        // 加入图层
        OPENLAYER_MAP.anchorLayer.getSource().addFeature(anchor);

    })
};
OPENLAYER_MAP.initAnchorLayer = function(){
    OPENLAYER_MAP.anchorLayer = new ol.layer.Vector({
        source:new ol.source.Vector(),
        name:'anchorLayer'
    });
}
OPENLAYER_MAP.initMap = function(){
    var layers = [
        OPENLAYER_MAP.anchorLayer
    ];
    OPENLAYER_MAP.map = new ol.Map({
        controls:ol.control.defaults({
            attribution:false
        }).extend([

        ]),
        OPENLAYER_MAP.mousePositionControl
    }),
    layers:layers,
    overlays:[OPENLAYER_MAP.popUpItem],
    target:'mapContainer',
    view:new ol.view({
        projection:'EPSG:3857',
        center:[113.65,34.67],
        zoom:10
    })
}


// 创建地图
OPENLAYER_MAP.map = new ol.Map({
    layers:[
        new ol.layer.Tile({
            source:new ol.source.OSM()
        }),
    ],
    target:'mapContainer',
    view:new ol.View({
        projection:'EPSG:4326',
        center:[113.65,34.76],
        zoom:10   //放大倍数
    })
});


$(function(){
    OPENLAYER_MAP.initMapEvents();
})