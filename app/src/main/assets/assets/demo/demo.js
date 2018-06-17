demo = {
  initDocumentationCharts: function() {
    if ($('#dailySalesChart').length != 0 && $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38]
        ]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      var animationHeaderChart = new Chartist.Line('#websiteViewsChart', dataDailySalesChart, optionsDailySalesChart);
    }
  },

  initDashboardPageCharts: function() {

    if ($('#dailySalesChart').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 38]
        ]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      md.startAnimationForLineChart(dailySalesChart);



      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      dataCompletedTasksChart = {
        labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
        series: [
          [230, 750, 450, 300, 280, 240, 200, 190]
        ]
      };

      optionsCompletedTasksChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      md.startAnimationForLineChart(completedTasksChart);


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionsWebsiteViewsChart = {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      };
      var responsiveOptions = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(websiteViewsChart);
    }
  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(-23.533773, -46.625290);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "stylers": [{
          "saturation": 43
        }, {
          "lightness": -11
        }, {
          "hue": "#0088ff"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "hue": "#ff0000"
        }, {
          "saturation": -100
        }, {
          "lightness": 99
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#808080"
        }, {
          "lightness": 54
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ece2d9"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ccdca1"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#767676"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#b8cb93"
        }]
      }, {
        "featureType": "poi.park",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.sports_complex",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.medical",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "simplified"
        }]
      }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    var obra1 = {lat: -23.558902, lng: -46.649149};

      var marker1 = new google.maps.Marker({
        position: obra1,
        map: map

      });

      var contentString11 = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Aréa da Sáude - Hospital Santos, Reis and Martins</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://www.campogrande.ms.gov.br/cgnoticias/wp-content/uploads/sites/3/2017/02/IMG-20170217-WA0023-768x432.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user2.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow1 = new google.maps.InfoWindow({
        content: contentString11
      });

      marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
      });

    var obra2 = {lat: -23.563859, lng: -46.633892};

     var marker2 = new google.maps.Marker({
          position: obra2,
          map: map
        });

     var contentString2 = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Aréa da Sáude - Hospital Santos, Reis and Martins</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://www.campogrande.ms.gov.br/cgnoticias/wp-content/uploads/sites/3/2017/02/IMG-20170217-WA0023-768x432.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user2.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });

      marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
      });

    var obra3 = {lat: -23.527988, lng: -46.663922};

     var marker3 = new google.maps.Marker({
          position: obra3,
          map: map
        });

     var contentString3 = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Aréa da Sáude - Hospital Santos, Reis and Martins</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://www.campogrande.ms.gov.br/cgnoticias/wp-content/uploads/sites/3/2017/02/IMG-20170217-WA0023-768x432.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user2.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
      });

      marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
      });

     var obra4 = {lat: -23.541546, lng: -46.609588};

     var marker4 = new google.maps.Marker({
          position: obra4,
          map: map
        });

     var contentString4 = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Aréa da Sáude - Hospital Santos, Reis and Martins</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://www.campogrande.ms.gov.br/cgnoticias/wp-content/uploads/sites/3/2017/02/IMG-20170217-WA0023-768x432.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user2.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
      });

      marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
      });

     var obra5 = {lat: -23.566244, lng: -46.621220};

     var marker5 = new google.maps.Marker({
          position: obra5,
          map: map
        });

     var contentString5 = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Aréa da Sáude - Hospital Santos, Reis and Martins</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://www.campogrande.ms.gov.br/cgnoticias/wp-content/uploads/sites/3/2017/02/IMG-20170217-WA0023-768x432.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user2.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
      });

      marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
      });

     var obra6verde = {lat: -23.545405, lng: -46.620990};

     var marker6 = new google.maps.Marker({
          position: obra6verde,
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          map: map
        });

     var contentString = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Área Escolar - Escola Professor José da Silva</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://portal.baixadaon.com.br/wp-content/uploads/Escola-em-construcao-no-bairro-do-Engenho-Luiz-Guilherme-Fernandes-004.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow6 = new google.maps.InfoWindow({
        content: contentString
      });

      marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
      });

     var obra7verde = {lat: -23.549916, lng: -46.620056};

      var marker7 = new google.maps.Marker({
          position: obra7verde,
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          map: map
        });

      var contentString = '<center><div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Área Escolar - Escola Professor José da Silva</h4>'+
      '<br />' +
      '<div id="bodyContent">'+
      '<img src="http://portal.baixadaon.com.br/wp-content/uploads/Escola-em-construcao-no-bairro-do-Engenho-Luiz-Guilherme-Fernandes-004.jpg" alt="" style="margin-left: 40px; width: 40%;">' +
      '<br />' +
      '<br />' +
      '<form action="../../vigilancia-publica/examples/user.html">'+
      '<input type="submit" value="Detalhes" />' +
      '</form>' +
      '</div>'+
      '</div>' +
      '</center>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker7.addListener('click', function() {
        infowindow.open(map, marker7);
      });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

  },

  showNotification: function(from, align) {
    type = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];

    color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: "add_alert",
      message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 3000,
      placement: {
        from: from,
        align: align
      }
    });
  }

}