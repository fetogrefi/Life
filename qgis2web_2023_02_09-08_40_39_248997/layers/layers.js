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
var format_Reprojected_1 = new ol.format.GeoJSON();
var features_Reprojected_1 = format_Reprojected_1.readFeatures(json_Reprojected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_1.addFeatures(features_Reprojected_1);
var lyr_Reprojected_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojected_1, 
                style: style_Reprojected_1,
                interactive: true,
                title: 'Reprojected'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reprojected_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reprojected_1];
lyr_Reprojected_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Reprojected_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Reprojected_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Reprojected_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});