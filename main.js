import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';



const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
   
  ],
  view: new View({
    center: fromLonLat([-48.931828629728344,-25.89205767530084]), // Coordenadas do centro do mapa
    zoom: 10,
  }),
  target: 'map',
});


var geoJson = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
    url: './map.geojson'
  }),
})

map.addLayer(geoJson);