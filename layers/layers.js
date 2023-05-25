var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poi_pkn_1 = new ol.format.GeoJSON();
var features_poi_pkn_1 = format_poi_pkn_1.readFeatures(json_poi_pkn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_pkn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_pkn_1.addFeatures(features_poi_pkn_1);
var lyr_poi_pkn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poi_pkn_1, 
                style: style_poi_pkn_1,
                interactive: true,
                title: '<img src="styles/legend/poi_pkn_1.png" /> poi_pkn'
            });

lyr_OSMStandard_0.setVisible(true);lyr_poi_pkn_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poi_pkn_1];
lyr_poi_pkn_1.set('fieldAliases', {'no': 'no', 'nama': 'nama', 'lintang': 'lintang', 'bujur': 'bujur', 'foto': 'foto', 'x': 'x', 'y': 'y', 'desc': 'desc', 'email': 'email', 'telp': 'telp', 'sosmed': 'sosmed', 'website': 'website', });
lyr_poi_pkn_1.set('fieldImages', {'no': 'Hidden', 'nama': 'TextEdit', 'lintang': 'Hidden', 'bujur': 'Hidden', 'foto': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'desc': 'TextEdit', 'email': 'TextEdit', 'telp': 'TextEdit', 'sosmed': 'TextEdit', 'website': 'TextEdit', });
lyr_poi_pkn_1.set('fieldLabels', {'nama': 'header label', 'foto': 'inline label', 'desc': 'inline label', 'email': 'inline label', 'telp': 'inline label', 'sosmed': 'inline label', 'website': 'inline label', });
lyr_poi_pkn_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});