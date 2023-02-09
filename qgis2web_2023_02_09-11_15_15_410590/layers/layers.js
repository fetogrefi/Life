var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.0,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Paris_1 = new ol.format.GeoJSON();
var features_Paris_1 = format_Paris_1.readFeatures(json_Paris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paris_1.addFeatures(features_Paris_1);
var lyr_Paris_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paris_1, 
                style: style_Paris_1,
                interactive: true,
                'opacity': .5,
                title: '<img src="styles/legend/Paris_1.png" /> Paris'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Paris_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Paris_1];
lyr_Paris_1.set('fieldAliases', {'id': 'id', });
lyr_Paris_1.set('fieldImages', {'id': 'Range', });
lyr_Paris_1.set('fieldLabels', {'id': 'no label', });
lyr_Paris_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
