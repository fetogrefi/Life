var wms_layers = [];


        var lyr_France_0 = new ol.layer.Tile({
            'title': 'France',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://fetogrefi.github.io/Life/Landscape/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldBase_1 = new ol.layer.Tile({
            'title': 'World Base',
            'type': 'base',
            'opacity': .60,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://fetogrefi.github.io/Life/Worldbase/{z}/{x}/{y}.png'
            })
        });

lyr_France_0.setVisible(true);lyr_WorldBase_1.setVisible(true);
var layersList = [lyr_France_0,lyr_WorldBase_1];
