var wms_layers = [];

var format_FRA_adm3_0 = new ol.format.GeoJSON();
var features_FRA_adm3_0 = format_FRA_adm3_0.readFeatures(json_FRA_adm3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRA_adm3_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRA_adm3_0.addFeatures(features_FRA_adm3_0);
var lyr_FRA_adm3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRA_adm3_0, 
                style: style_FRA_adm3_0,
                interactive: true,
                title: '<img src="styles/legend/FRA_adm3_0.png" /> FRA_adm3'
            });

lyr_FRA_adm3_0.setVisible(true);
var layersList = [lyr_FRA_adm3_0];
lyr_FRA_adm3_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_FRA_adm3_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_FRA_adm3_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', });
lyr_FRA_adm3_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});