$(function () {

    var wardOffices = [
        {
            lat: 41.919350,
            lon: -87.687980,
            title: 'Ward1',
            html: '<h3>Ward 1</h3>',
            icon: 'http://maps.google.com/mapfiles/markerA.png',
            // animation: google.maps.Animation.DROP,
        }, {
            lat: 41.907080,
            lon: -87.667810,
            title: 'Ward2',
            html: '<h3>Ward 1</h3>',
            icon: 'http://maps.google.com/mapfiles/markerA.png',
            // animation: google.maps.Animation.DROP,
        }, {
            lat: 41.801880,
            lon: -87.652230,
            title: 'Ward3',
            html: '<h3>Ward 1</h3>',
            icon: 'http://maps.google.com/mapfiles/markerA.png',
            // animation: google.maps.Animation.DROP,
        }];

    new Maplace({
        show_markers: false,
        locations: [{
            lat: 41.881832,
            lon: -87.623177,
            zoom: 12
        }]
    }).Load();

    // dropdown example
    new Maplace({
        locations: wardOffices,
        map_div: '#gmap-dropdown',
        controls_title: 'Choose a location:',
        listeners: {
            click: function (map, event) {
                alert('That was a click!');
            }
        }
    }).Load();


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(entry.location_1.latitude,
            entry.location_1.longitude),
        map: map,
        title: location.name
    })
});

