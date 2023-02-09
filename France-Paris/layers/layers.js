var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParisinsideOSMdifference_1 = new ol.format.GeoJSON();
var features_ParisinsideOSMdifference_1 = format_ParisinsideOSMdifference_1.readFeatures(json_ParisinsideOSMdifference_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParisinsideOSMdifference_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParisinsideOSMdifference_1.addFeatures(features_ParisinsideOSMdifference_1);
var lyr_ParisinsideOSMdifference_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParisinsideOSMdifference_1, 
                style: style_ParisinsideOSMdifference_1,
                interactive: true,
                title: '<img src="styles/legend/ParisinsideOSMdifference_1.png" /> Paris inside OSM — difference'
            });
var format_FranceMajorRailpasted_2 = new ol.format.GeoJSON();
var features_FranceMajorRailpasted_2 = format_FranceMajorRailpasted_2.readFeatures(json_FranceMajorRailpasted_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FranceMajorRailpasted_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FranceMajorRailpasted_2.addFeatures(features_FranceMajorRailpasted_2);
var lyr_FranceMajorRailpasted_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FranceMajorRailpasted_2, 
                style: style_FranceMajorRailpasted_2,
                interactive: true,
                title: '<img src="styles/legend/FranceMajorRailpasted_2.png" /> France - Major Rail  — pasted'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ParisinsideOSMdifference_1.setVisible(true);lyr_FranceMajorRailpasted_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ParisinsideOSMdifference_1,lyr_FranceMajorRailpasted_2];
lyr_ParisinsideOSMdifference_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_FranceMajorRailpasted_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'path': 'path', });
lyr_ParisinsideOSMdifference_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', });
lyr_FranceMajorRailpasted_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'path': 'TextEdit', });
lyr_ParisinsideOSMdifference_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_FranceMajorRailpasted_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'path': 'no label', });
lyr_FranceMajorRailpasted_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});