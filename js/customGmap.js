var map;
$(document).ready(function(){
  map = new GMaps({
    el: '#contact',
    lat: 28.079401,
    lng: -15.45175,
    zoomControl : true,
    zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
    },
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false
  });
});