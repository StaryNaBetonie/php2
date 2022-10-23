var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});





var choicemarker;
// x
var currlat; 
// y
var currlng;

$.ajax({
    url:"index.php",
    method: "post",
    data: [currlat, currlng]
})




function onMapClick(e) 
{
    choicemarker.remove();
    choicemarker = L.marker(e.latlng).addTo(map);
    currlat = e.latlng.lat.toFixed(3);
    currlng = e.latlng.lng.toFixed(3);
    alert(currlat + " " + currlng)
    
}

map.on('click', onMapClick);

function onLocationFound (e) 
{
    choicemarker = L.marker(e.latlng).addTo(map);
    currlat = e.latlng.lat
    currlng = e.latlng.lng
    
}

map.on('locationfound', onLocationFound);

function onLocationError(e) 
{
    alert(e.message);
}

map.on('locationerror', onLocationError);