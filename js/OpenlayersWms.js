var OPENLAYER_MAP = {};
// 添加标注的数据
OPENLAYER_MAP.markerInfos = {"d_station":[
    {"id":101,"Kind":6,"station_name":"经开区管委","region_code":"Q0371006","station_type":"6","object_id":null,"station_location":"河南省, 郑州市, 中牟县, ","longitude":"114.117108","latitude":"34.686446","station_ip":"192.168.1.250","station_mac":null,"service_no":"uu","setup_date":null,"station_status":"1","is_online":"Y","note":"国控","created_at":"2017-02-07T18:48:36.000+08:00","updated_at":"2017-11-08T14:05:12.000+08:00","soft_version_no":"v1.1","station_id":101,"data_time":"2017111411","avg_so2":30,"iaqi_so2":10,"avg_no2":24,"iaqi_no2":12,"avg_co":1.7,"iaqi_co":17,"avg_o3":33,"iaqi_o3":10,"ma8_o3":35,"iaqi_ma8_o3":17,"avg_pm10":144,"ma24_pm10":114,"iaqi_ma24_pm10":97,"avg_pm25":121,"ma24_pm25":94,"iaqi_ma24_pm25":158,"aqi":158,"chief_pollutant":"PM2.5","aqi_level":"四级","aqi_class":"中度污染","aqi_color":"#ff0000"},
    {"id":128,"Kind":6,"station_name":"县级测试一","region_code":"Q0371010","station_type":"4","object_id":null,"station_location":"河南省, 商丘市, 民权县, ","longitude":"115.252421","latitude":"34.658632","station_ip":null,"station_mac":null,"service_no":"","setup_date":null,"station_status":"1","is_online":"N","note":"","created_at":"2017-08-14T14:41:31.000+08:00","updated_at":"2017-08-14T14:45:07.000+08:00","soft_version_no":"v1.0"},
    {"id":129,"Kind":6,"station_name":"平台测试","region_code":"Q0371005","station_type":"2","object_id":null,"station_location":"河南省, 郑州市, 中牟县, ","longitude":"113.995225","latitude":"34.600916","station_ip":null,"station_mac":null,"service_no":"","setup_date":null,"station_status":"1","is_online":"N","note":"","created_at":"2017-10-10T11:52:25.000+08:00","updated_at":"2017-10-10T11:55:07.000+08:00","soft_version_no":"v1.0"},
    {"id":129,"Kind":6,"station_name":"平台测试","region_code":"Q0371005","station_type":"7","object_id":null,"station_location":"河南省, 郑州市, 中牟县, ","longitude":"113.995225","latitude":"33.600916","station_ip":null,"station_mac":null,"service_no":"","setup_date":null,"station_status":"1","is_online":"N","note":"","created_at":"2017-10-10T11:52:25.000+08:00","updated_at":"2017-10-10T11:55:07.000+08:00","soft_version_no":"v1.0"}
    ],
    "last_data_time":"2017-11-14 11:00","d_station_isOnline":9,"optimal":0,"good":2,"mild":4,"moderate":2,"severe":0,"serious":0,"longitude_avg":114.39464749999999,"latitude_avg":34.732711};
// 风向数据
OPENLAYER_MAP.windData = [
    [22.2611, 113.5736, 305.300, 1.4], 
    [22.2294, 113.4946, 221.400, 1.8],
    [22.2281, 113.2988, 261.800, 1.9],
    [23.105, 113.261, 341.700, 2.1],
    [23.0916, 113.348, 347.700, 0.6],
    [23.105, 113.433, 279.300, 1.2],
    [22.9477, 113.352, 155.200, 3.7],
    [23.3917, 113.215, 235.100, 1.1],
    [23.1331, 113.26, 21.000, 1.9],
    [23.2783, 113.568, 293.300, 2.4],
    [23.1569, 113.281, 51.800, 1.3],
    [22.5625, 114.117, 324.500, 0.7],
    [22.5417, 113.987, 308.900, 1.2],
    [22.5167, 113.923, 351.300, 1.3],
    [22.5908, 114.263, 0.100, 0.5],
    [22.7267, 114.24, 259.100, 0.9],
    [22.5794, 113.891, 61.100, 0.5],
    [22.5422, 114.494, 259.000, 0.8],
    [22.6342, 114.41, 72.900, 3.3],
    [22.5978, 114.297, 358.500, 0.5],
    [22.75, 114.085, 3.800, 2.9],
    [23.0048, 113.134, 329.000, 0.7],
    [23.0395, 113.105, 69.800, 4.5],
    [23.0467, 113.144, 347.500, 1.1],
    [22.8054, 113.292, 4.900, 2.5],
    [22.7629, 113.257, 267.100, 3.2],
    [22.8693, 112.844, 317.600, 4.3],
    [23.1572, 112.885, 313.000, 2.4],
    [23.1886, 112.863, 335.800, 0.8],
    [22.5211, 113.369, 208.900, 1.1],
    [22.5481, 113.365, 260.700, 2.5],
    [22.5078, 113.402, 266.100, 1.8],
    [22.4886, 113.434, 130.200, 1.5],
    [22.6069, 113.104, 314.600, 1.4],
    [22.5811, 113.074, 11.100, 2.7],
    [22.5328, 113.024, 337.800, 0.7],
    [22.5931, 113.0819, 337.300, 0.8],
    [23.0536, 113.7819, 335.600, 2.0],
    [23.0277, 113.7461, 324.500, 2.6],
    [23.06, 113.7480, 204.700, 2.7],
    [23.0127, 113.7944, 266.600, 1.0],
    [23.0528, 114.4183, 54.500, 2.2],
    [23.08, 114.4053, 6.400, 1.0],
    [23.1142, 114.4103, 214.200, 0.8],
    [22.7422, 114.5317, 314.900, 4.8],
    [23.0706, 112.427, 358.600, 2.6],
    [23.0528, 112.471, 329.600, 2.6],
    [23.1617, 112.565, 16.500, 1.1],
    [24.7708, 113.5783, 307.500, 3.7],
    [24.7992, 113.6081, 25.500, 2.3],
    [24.7939, 113.6414, 296.300, 1.2],
    [24.6861, 113.5964, 348.400, 1.8],
    [23.3667, 116.6794, 194.100, 1.3],
    [23.3633, 116.7244, 80.900, 1.2],
    [23.2775, 116.7258, 99.700, 1.6],
    [23.4714, 116.7519, 114.700, 2.2],
    [23.2539, 116.6092, 99.900, 1.2],
    [23.2536, 116.4019, 250.100, 1.2],
    [21.1997, 110.4019, 238.800, 1.7],
    [21.4689, 111.0286, 220.400, 1.8],
    [21.6533, 110.9294, 343.900, 2.2],
    [21.6669, 110.9067, 352.300, 2.7],
    [21.6828, 110.8592, 356.300, 3.2],
    [24.3289, 116.1278, 215.400, 0.9],
    [24.2719, 116.0797, 210.300, 1.6],
    [24.2654, 116.1248, 194.000, 2.9],
    [22.775, 115.3653, 10.300, 1.6],
    [22.7953, 115.3578, 47.900, 0.9],
    [22.7925, 115.3622, 354.700, 0.8],
    [23.7233, 114.6892, 304.100, 1.5],
    [21.8586, 111.9786, 315.600, 1.8],
    [21.8536, 111.9508, 267.500, 3.8],
    [21.865, 111.9494, 14.500, 1.8],
    [23.6936, 113.0425, 20.800, 1.7],
    [23.7106, 113.0208, 72.700, 2.3],
    [23.6272, 113.0622, 339.700, 1.5],
    [23.6714, 116.6339, 90.900, 0.6],
    [23.6706, 116.6447, 304.600, 0.6],
    [23.6531, 116.6175, 123.600, 1.0],
    [23.5353, 116.3697, 278.700, 1.3],
    [23.5486, 116.3242, 291.500, 0.8],
    [23.5739, 116.3594, 288.300, 0.8],
    [23.5292, 116.4094, 315.100, 1.5],
    [22.9169, 112.0392, 259.000, 1.8],
    [22.9394, 112.0369, 105.900, 1.9],
    [22.9539, 112.0539, 282.600, 0.8],
    [23.1292, 113.4094, 272.900, 3.1],
    [23.6502, 113.6246, 45.000, 1.248],
    [22.7108, 113.5485, 251.200, 2.5],
    [23.4208, 113.073, 312.400, 1.1],
    [22.9398, 114.3806, 286.016, 1.351],
    [23.3406, 114.1077, 180.500, 1.257],
    [22.5862, 112.5814, 115.100, 2.0],
    [22.0608, 112.7607, 219.500, 1.6]
];

// 弹出框
OPENLAYER_MAP.popContainer = document.getElementById('popup');//主体  
OPENLAYER_MAP.popContent = document.getElementById('popup-content');//正文  
OPENLAYER_MAP.popCloser = document.getElementById('popup-closer');//关闭框  
OPENLAYER_MAP.label = document.getElementById('label');//关闭框 
OPENLAYER_MAP.popUpItem = new ol.Overlay(({
    element: OPENLAYER_MAP.popContainer,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  }));

OPENLAYER_MAP.mapContainer = "#mapContainer";

OPENLAYER_MAP.mousePositionControl;

OPENLAYER_MAP.map;

OPENLAYER_MAP.qqMapLayer;

OPENLAYER_MAP.anchorLayer;

OPENLAYER_MAP.googleMapLayer;

OPENLAYER_MAP.img_c;
OPENLAYER_MAP.cva_c;


OPENLAYER_MAP.keypointStyle1 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map1.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle2 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map2.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle3 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map3.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle4 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map4.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle5 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map5.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle6 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map6.jpg',
        scale:0.75
    })
});
OPENLAYER_MAP.keypointStyle7 = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'images/mapMarkers/map7.jpg',
        scale:0.75
    })
});

//创建标签的样式
OPENLAYER_MAP.createLabelStyle = function (feature) {
    var aa = document.getElementById('label');
    //返回一个样式
    return new ol.style.Style({
        //把点的样式换成ICON图标
        // image: new ol.style.Icon({
        //     //控制标注图片和文字之间的距离
        //     anchor: [0.5, 20],
        //     //标注样式的起点位置
        //     anchorOrigin: 'top-right',
        //     //X方向单位：分数
        //     anchorXUnits: 'fraction',
        //     //Y方向单位：像素
        //     anchorYUnits: 'pixels',
        //     //偏移起点位置的方向
        //     offsetOrigin: 'top-right',
        //     //透明度
        //     opacity: 0.75,
        //     scale:0.8,
        //     //图片路径
        //     src: 'images/anchor.png'
        // }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#f00'
            })
        }),
        fill:new ol.style.Fill({
            color:'rgba(0,0,0,0.6)'
        }),
        label: "不填充点符号的标注",
        //文本样式
        text: new ol.style.Text({
            //对齐方式
            textAlign: 'center',
            //文本基线
            textBaseline: 'middle',
            //字体样式
            font: 'normal 10px 微软雅黑',
            //文本内容
            text:("111"),
            scale: 1.3,
            offsetY:-23,
			stroke: new ol.style.Stroke({  
                color:'rgb(165,24,27)',  
                width:3,  
                // lineDash:[10,10]  
            }), //边界  
            strokeOpacity: 1,
            strokeWidth: 1,
            fillColor: "#000000",
            fillOpacity: 0.1,
            
        }),

    });
};
OPENLAYER_MAP.initAnchorLayer = function(){
  OPENLAYER_MAP.anchorLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    name:'anchorLayer'
  })
};

OPENLAYER_MAP.initMap = function(){
  OPENLAYER_MAP.mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(5),
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById('txt-coords'),
        undefinedHTML: '&nbsp;'
      });
      OPENLAYER_MAP.img_c = getTdtLayer("vec_c");
      OPENLAYER_MAP.cva_c = getTdtLayer("cva_c");

	var layers = [
        OPENLAYER_MAP.googleMapLayer,
        OPENLAYER_MAP.qqMapLayer,
        OPENLAYER_MAP.anchorLayer,
        OPENLAYER_MAP.img_c,
        OPENLAYER_MAP.cva_c
      	];

    OPENLAYER_MAP.map = new ol.Map({
      controls: ol.control.defaults({
        attribution: false
      }).extend([
        new ol.control.ScaleLine({
           units: 'degrees'
        }),
        OPENLAYER_MAP.mousePositionControl
      ]),
      
      overlays: [OPENLAYER_MAP.popUpItem],
      target: 'mapContainer',
    //   renderer:"webgl",//"canvas",
      layers: layers,
      view: new ol.View({
        projection: 'EPSG:4326',
        // center:ol.proj.fromLonLat([118.0816345, 27.3784676]),
        center:[118.0816345, 27.3784676],
        zoom: 10,
        minZoom:4,
        maxZoom:14
      })
    });
    setTimeout(addWindMap, 1000);
    OPENLAYER_MAP.googleMapLayer.setVisible(false);
};

// =================================风-==================
        var canvas, windy;
		function addWindMap(){
            alert("11")
            canvas = document.createElement('canvas');
            console.log(canvas)
            canvas.id = "windCanvas";
            canvas.width = OPENLAYER_MAP.map.getSize()[0];
            canvas.height = OPENLAYER_MAP.map.getSize()[1];
            canvas.style.position = 'absolute';
            canvas.style.top = 0;
            canvas.style.left = 0;
            OPENLAYER_MAP.map.getViewport().appendChild(canvas);
			// windData参数:纬度、经度、风向、风速
            windy = new Windy({
                map: OPENLAYER_MAP.map,
                canvas: canvas,
                data: OPENLAYER_MAP.windData
            });
            console.log(canvas)
            var options = {
                size: .8,    //风向的透明度
                color: 'rgba(71,160,233,0.8)',   //改变风的颜色
            };
            windy.change(options);
            windDraw();
            OPENLAYER_MAP.map.getView().on('propertychange',function(){
                windy.stop();
                $(canvas).hide();
            });
            OPENLAYER_MAP.map.on("moveend",function(){
                windDraw();
            });
		}
        function windDraw(){
            $(canvas).show();
            var bounds = OPENLAYER_MAP.map.getView().calculateExtent();
            var _min = [bounds[0], bounds[1]];
            var _max = [bounds[2], bounds[3]];
            var py = OPENLAYER_MAP.map.getPixelFromCoordinate([bounds[0], bounds[3]]); //经纬度转成屏幕坐标
            canvas.style.left = py.x + 'px';
            canvas.style.top = py.y + 'px';
            var points = invertLatLon(py); //所有站点经纬度转为canvas坐标
            var min = OPENLAYER_MAP.map.getPixelFromCoordinate(_min);
            var max = OPENLAYER_MAP.map.getPixelFromCoordinate(_max);
            var extent = [
                [min[0] - py[0], max[1] - py[1]],
                [max[0] - py[0], min[1] - py[1]]
            ];
            windy.start(extent, points);
            console.log(points)
		}
       function invertLatLon (py) {
            var points = [];
            OPENLAYER_MAP.windData.forEach(function (station) {
                var px = OPENLAYER_MAP.map.getPixelFromCoordinate([station[1], station[0]]);
                points.push({
                    x: px[0]-py[0],
                    y: px[1]-py[1],
                    angle: station[2],
                    speed: station[3]
                });
            });
            return points;
        }
        function getTdtLayer(){
			// var url = "http://t0.tianditu.com/DataServer?T="+lyr+"&X={x}&Y={y}&L={z}";
            var url = "http://online.map.bdimg.com/onlinelabel/qt=tile&x={x}&y={y}&z={z}&v=009&styles=pl&udt=20170301&scaler=1&p=1";
			var projection = ol.proj.get("EPSG:4326");
			var projectionExtent = [ -180, -90, 180, 90 ];
			var maxResolution = (ol.extent.getWidth(projectionExtent) / (256 * 2));
			var resolutions = new Array(16);
			var z;
			for (z = 0; z < 16; ++z) {
				resolutions[z] = maxResolution / Math.pow(2, z);
			}
			var tileOrigin = ol.extent.getTopLeft(projectionExtent);
			var layer = new ol.layer.Tile({
				extent: [ -180, -90, 180, 90 ],
				source: new ol.source.TileImage({
					tileUrlFunction: function(tileCoord) {
						var z = tileCoord[0]+1;
						var x = tileCoord[1];
						var y = -tileCoord[2]-1;
						var n = Math.pow(2, z + 1);
						x = x % n;
						if (x * n < 0) {
							x = x + n;
						}
						return url.replace('{z}', z.toString())
								.replace('{y}', y.toString())
								.replace('{x}', x.toString());
					},
					projection: projection,
					tileGrid: new ol.tilegrid.TileGrid({
						origin: tileOrigin,
						resolutions: resolutions,
						tileSize: 256
					}),
                    crossOrigin: 'anonymous'
				})
			});
			return layer;
		}
        // ============================================================



OPENLAYER_MAP.initQQLayer = function(){

    var baiduSource = new ol.source.XYZ({
        tileUrlFunction: function(tileCoord){
            if(!tileCoord)return "";

            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = -tileCoord[2] - 1;
            y = parseInt(Math.pow(2, z)) - 1 - y;
            return "http://rt" + (x % 4) + ".map.gtimg.com/realtimerender?z=" + z + "&x=" + x + "&y=" + y + "&styleid=0&type=vector&version=233";
        }
    });

    OPENLAYER_MAP.qqMapLayer = new ol.layer.Tile({
        name:'qqLayer',
        source: baiduSource
    });
};

OPENLAYER_MAP.initBaiduLayer = function(){
    // var  baiduMap_source = new ol.source.XYZ({url: 'http://maps.google.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i375060738!3m9!2spl!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0'}); //goole
    var  baiduMap_source = new ol.source.XYZ({url: 'http://online.map.bdimg.com/onlinelabel/qt=tile&x={x}&y={y}&z={z}&v=009&styles=pl&udt=20170301&scaler=1&p=1'}); //baidu
    OPENLAYER_MAP.googleMapLayer = new ol.layer.Tile({
        source:  baiduMap_source,
        name:'baidu'
    });
};
OPENLAYER_MAP.initMarkers = function(){

    // var navRouteCoords = OPENLAYER_MAP.markerInfos.resultData.navCoodInfos;   //获取JSON数据
    var navRouteCoords = OPENLAYER_MAP.markerInfos.d_station;   //获取JSON数据

    //架路径，绘制关键节点
    if(navRouteCoords == null || navRouteCoords.length == 0)return;

    // var navigationNode = null;
    var routeLinePoints = new Array();
    var coordGcj02 = new Array();
    var coordGcj = new Array();
    var coordName = new Array();
    var coordPoint = new Array();
    var coordDescribe = new Array();
    $.each(navRouteCoords,function(index,value){
        coordGcj02[0] = value.longitude;
        coordGcj02[1] = value.latitude;
        coordName[0] = value.station_name;
        coordGcj = coordGcj02.map(function(key){
            return Number(key);
        });
        coordPoint = ol.proj.transform(coordGcj,"EPSG:4326","EPSG:4326");
        
        station_type = Number(value.station_type);
        console.log(station_type)
        //创建marker
        var marker = new ol.Feature({
            geometry: new ol.geom.Point(coordPoint),
            name: coordName[0],
            describ:coordDescribe[0]
        });
        console.log(coordPoint)
        switch(station_type)
        {
            case 1:
                 marker.setStyle(OPENLAYER_MAP.keypointStyle1);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 2:
                 marker.setStyle(OPENLAYER_MAP.keypointStyle2);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 3:
                 marker.setStyle(OPENLAYER_MAP.keypointStyle3);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 4:
                marker.setStyle(OPENLAYER_MAP.keypointStyle4);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 5:
                 marker.setStyle(OPENLAYER_MAP.keypointStyle5);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 6:
                marker.setStyle(OPENLAYER_MAP.keypointStyle6);
                 OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                 break;
            case 7:
                marker.setStyle(OPENLAYER_MAP.createLabelStyle(marker));
                OPENLAYER_MAP.anchorLayer.getSource().addFeature(marker);
                break;
        }
        routeLinePoints.push(coordPoint);
    });
    OPENLAYER_MAP.initPolyline(routeLinePoints);
};
// 画线
OPENLAYER_MAP.initPolyline = function(linePoints){
    var lineFeature = new ol.Feature({
        geometry:new ol.geom.LineString(linePoints)
    });
    // 加入图层
    OPENLAYER_MAP.anchorLayer.getSource().addFeature(lineFeature);
};

OPENLAYER_MAP.initPopUpEvents = function()
{
  OPENLAYER_MAP.popCloser.onclick = function() {
    OPENLAYER_MAP.popUpItem.setPosition(undefined);
    OPENLAYER_MAP.popCloser.blur();
    return false;
};
  //鼠标移动事件：触到要素变鼠标指针  
  OPENLAYER_MAP.map.on('pointermove',function(e){  
      var pixel = OPENLAYER_MAP.map.getEventPixel(e.originalEvent); //获取地图上的坐标  
      var hit = OPENLAYER_MAP.map.hasFeatureAtPixel(pixel);//获取地图坐标上的要素  
      OPENLAYER_MAP.map.getTargetElement().style.cursor = hit?'pointer':''; //设置DOM对象的指针  
  });  

  // //点击事件  
    OPENLAYER_MAP.map.on('click',function(evt){
        var feature = OPENLAYER_MAP.map.forEachFeatureAtPixel(evt.pixel,function(feature,layer){ //获取鼠标点上的要素  
            return feature;  
            }  
        );  

        if(feature == null)return;
        console.log(feature)
        var coordinate = evt.coordinate;
          var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
          coordinate, 'EPSG:4326', 'EPSG:4326'));
          console.log(hdms)
        //   OPENLAYER_MAP.popContent.innerHTML = '<p>地理位置：</p><code>' + '<p1>名称:' + feature.get('name')+feature.get('describ') +'</p1>'
        //   '</code>';
         OPENLAYER_MAP.popContent.innerHTML = '<p class="title">名称：'+ feature.get('name')+'</p>'+'<p>站点状态报警级别：'+
         '</p><p>报警内容：</p><p class="title">站点信息</p><p>区域：</p><p>经度：</p><p>纬度：</p><p>类型：</p><p class="title">空气质量数据：</p>'+
         '<table class="table table-bordered"><tbody><tr><td>SO<sub>2</sub>:25</td><td>NO<sub>2</sub>:33</td><td>PM10:33</td></tr>'+
         '<tr><td>CO:22</td><td>O<sub>3</sub>:44<td>PM<sub>2.5</sub>:55</td></tr></tbody></table>';
          OPENLAYER_MAP.popUpItem.setPosition(coordinate);
        
    }  
   );
};

// 柱形图
OPENLAYER_MAP.echartLine = function(){
    var myChart = echarts.init(document.getElementById('line'));
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'8%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    myChart.setOption(option);

}


$(function(){
    OPENLAYER_MAP.initAnchorLayer();
    OPENLAYER_MAP.initQQLayer();
    OPENLAYER_MAP.initBaiduLayer();
	OPENLAYER_MAP.initMap();
    OPENLAYER_MAP.initPopUpEvents();
    OPENLAYER_MAP.echartLine();
});

$(document).ready(function(){
    OPENLAYER_MAP.initMarkers();
})