import '../css/app.css'
import 'leaflet/dist/leaflet.css'

import './bootstrap';
import 'leaflet'

document.addEventListener("DOMContentLoaded", function() {
    let getParams = new URLSearchParams(window.location.search);
    let osmDefault = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let jDark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}@2x.png?access-token=0kpZMkHOkyArRzKWglHXvakWmYghOlHak7yNbNpjLcQ7gpX38p4c2d99bnW7xHZt&lang=en', {
        maxZoom: 19,
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let jLight = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}@2x.png?access-token=0kpZMkHOkyArRzKWglHXvakWmYghOlHak7yNbNpjLcQ7gpX38p4c2d99bnW7xHZt&lang=en', {
        maxZoom: 19,
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/alexnadrugatea/cke8wis4w5gox19rsdk4khabw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxleG5hZHJ1Z2F0ZWEiLCJhIjoiY2p2cW55bGF4MDAzcDQ0cW45eG15ZzYzdSJ9.2ZNVw8ez5SyA-0rC0sCrNQ', {
        maxZoom: 19,
        noWrap: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    let baseLayers = {
        "Default": osmDefault,
        "JAWG Dark": jDark,
        "JAWG Light": jLight,
        "mapbox": mapbox,
    };
    let map = L.map('map', {
        minZoom: 3,
        layers: [osmDefault]
    }).setView([getParams.get('clat') || 0, getParams.get('clng') || 0], Math.min(19, Math.max(getParams.get('zoom'), 2)));
    L.control.layers(baseLayers).addTo(map);
    L.control.scale().addTo(map); // add a scale to the map
    map.setMaxBounds([
        [-90, -180],
        [90, 180]
    ]); //set bounds of drag action


    map.on('zoomend', function() {
        console.log(map.getZoom())
    });

});
