var map, layer1, layerBase1;


function creationCarte(lat,lon){
	


		layer1 = new ol.layer.Tile({source: new ol.source.TileWMS({
                url: 'http://igeomedia.com/cgi-bin/mapserv?map=/home/test/mapfile/principal.map&',
                params: {LAYERS: 'urbanLayer3857', VERSION: '1.1.1'}
            })
        });
		
		layer1.setVisible(true);
		
		layerBase1 = new ol.layer.Tile({source: new ol.source.OSM()});
		
		//layerBase2 = ....
		
		layerBase1.setVisible(true);
		//layerBase2.setVisible(false);
		
		
		map = new ol.Map({
          
			target: 'map',
        
			view: new ol.View({
			projection: 'EPSG:3857',
			center: ol.proj.transform([lon,lat],'EPSG:4326','EPSG:3857'),
			zoom: 6
			}),
        
			layers: [layerBase1, layer1]
		  
          
      });
	  
	  

}
