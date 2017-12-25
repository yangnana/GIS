		var map;
		function init(){
			var projection = new ol.proj.Projection({
				code: 'EPSG:4326',
				units: 'degrees'
			});
            var img_c = getTdtLayer("vec_c");
            var cva_c = getTdtLayer("cva_c");
			map = new ol.Map({
				controls: ol.control.defaults({
					attribution: false
				}),
				target: 'map',
                renderer:"webgl",//"canvas"
				layers: [img_c, cva_c],
				view: new ol.View({
					projection: projection,
					// center:[118.0816345, 27.3784676],
                    center:[113.65, 34.76],
					zoom:8,
					minZoom:0,
					maxZoom:18
				})
			});
           	setTimeout(addWindMap, 1000);
		}
        var canvas, windy;
		function addWindMap(){
            canvas = document.createElement('canvas');
            canvas.id = "windCanvas";
            canvas.width = map.getSize()[0];
            canvas.height = map.getSize()[1];
            canvas.style.position = 'absolute';
            canvas.style.top = 0;
            canvas.style.left = 0;
            map.getViewport().appendChild(canvas);
			// windData参数:纬度、经度、风向、风速
            windy = new Windy({
                map: map,
                canvas: canvas,
                data: windData
            });
            console.log(canvas)
            var options = {
                size: .8,    //风向的透明度
                color: 'rgba(71,160,233,0.8)',   //改变风的颜色
            };
            windy.change(options);
            windDraw();
            map.getView().on('propertychange',function(){
                windy.stop();
                $(canvas).hide();
            });
            map.on("moveend",function(){
                windDraw();
            });
		}
		function windDraw(){
            $(canvas).show();
            var bounds = map.getView().calculateExtent();
            var _min = [bounds[0], bounds[1]];
            var _max = [bounds[2], bounds[3]];
            var py = map.getPixelFromCoordinate([bounds[0], bounds[3]]); //经纬度转成屏幕坐标
            canvas.style.left = py.x + 'px';
            canvas.style.top = py.y + 'px';
            var points = invertLatLon(py); //所有站点经纬度转为canvas坐标
            var min = map.getPixelFromCoordinate(_min);
            var max = map.getPixelFromCoordinate(_max);
            var extent = [
                [min[0] - py[0], max[1] - py[1]],
                [max[0] - py[0], min[1] - py[1]]
            ];
            windy.start(extent, points);
            console.log(points)
		}

        function invertLatLon (py) {
            var points = [];
            windData.forEach(function (station) {
                var px = map.getPixelFromCoordinate([station[1], station[0]]);
                points.push({
                    x: px[0]-py[0],
                    y: px[1]-py[1],
                    angle: station[2],
                    speed: station[3]
                });
            });
            return points;
        }

		function getTdtLayer(lyr){
			var url = "http://t0.tianditu.com/DataServer?T="+lyr+"&X={x}&Y={y}&L={z}";
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
