var wms_layers = [];


        var lyr_World_0 = new ol.layer.Tile({
            'title': 'World |',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'file:///Volumes/LIGHTROOM 1/MBTiles/World/{z}/{x}/{y}.png'
            })
        });

lyr_World_0.setVisible(true);
var layersList = [lyr_World_0];
