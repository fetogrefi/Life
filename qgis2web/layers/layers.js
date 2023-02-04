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
var format_FRA_adm0_1 = new ol.format.GeoJSON();
var features_FRA_adm0_1 = format_FRA_adm0_1.readFeatures(json_FRA_adm0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRA_adm0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRA_adm0_1.addFeatures(features_FRA_adm0_1);
var lyr_FRA_adm0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRA_adm0_1, 
                style: style_FRA_adm0_1,
                interactive: true,
                title: '<img src="styles/legend/FRA_adm0_1.png" /> FRA_adm0'
            });

lyr_World_0.setVisible(true);lyr_FRA_adm0_1.setVisible(true);
var layersList = [lyr_World_0,lyr_FRA_adm0_1];
lyr_FRA_adm0_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'OBJECTID_1': 'OBJECTID_1', 'ISO3': 'ISO3', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'POP2000': 'POP2000', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', });
lyr_FRA_adm0_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'OBJECTID_1': '', 'ISO3': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'POP2000': '', 'SQKM': '', 'POPSQKM': '', 'UNREGION1': '', 'UNREGION2': '', 'DEVELOPING': '', 'CIS': '', 'Transition': '', 'OECD': '', 'WBREGION': '', 'WBINCOME': '', 'WBDEBT': '', 'WBOTHER': '', 'CEEAC': '', 'CEMAC': '', 'CEPLG': '', 'COMESA': '', 'EAC': '', 'ECOWAS': '', 'IGAD': '', 'IOC': '', 'MRU': '', 'SACU': '', 'UEMOA': '', 'UMA': '', 'PALOP': '', 'PARTA': '', 'CACM': '', 'EurAsEC': '', 'Agadir': '', 'SAARC': '', 'ASEAN': '', 'NAFTA': '', 'GCC': '', 'CSN': '', 'CARICOM': '', 'EU': '', 'CAN': '', 'ACP': '', 'Landlocked': '', 'AOSIS': '', 'SIDS': '', 'Islands': '', 'LDC': '', });
lyr_FRA_adm0_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'OBJECTID_1': 'no label', 'ISO3': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'POP2000': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', });
lyr_FRA_adm0_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});