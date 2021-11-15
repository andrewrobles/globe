// Draw globe
var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));


// Draw placemarks
var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);

placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
placemarkAttributes.imageScale = 0.2


function drawPlacemark(latitude, longitude, altitude) {
    var position = new WorldWind.Position(latitude, longitude, altitude);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
    
    // placemark.label = "Placemark\n" +
    //     "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    //     "Lon " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;
    
    placemarkLayer.addRenderable(placemark);
}

placemarks = [
    {
        latitude: 30.0,
        longitude: -150.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -145.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -140.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -135.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -130.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -125.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -120.0,
        altitude: 100.0
    },
    {
        latitude: 30.0,
        longitude: -115.0,
        altitude: 100.0
    }
]

for (var i = 0; i < placemarks.length; i++) {
    drawPlacemark(
        placemarks[i].latitude,
        placemarks[i].longitude,
        placemarks[i].altitude
    )
}