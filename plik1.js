var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});


function onLocationFound (e) 
{
    yourpos = L.marker(e.latlng).addTo(map)
                .bindPopup("tu jestes");
    
}

map.on('locationfound', onLocationFound);

function onLocationError(e) 
{
    alert(e.message);
}

map.on('locationerror', onLocationError);

var tab = [[52.253, 20.896, "biblioteka"], [52.247, 20.894, "fort"], [52.253, 20.905, "wat"]]

var x = 0
var y = 1
var tytul = 2


for (let i = 0; i < tab.length; i++)
{
    L.marker([tab[i][x], tab[i][y]]).addTo(map)
            .bindPopup(tab[i][tytul]);
}