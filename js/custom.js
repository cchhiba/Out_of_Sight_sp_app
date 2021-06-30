// custom JavaScript written here:

// = = = iife immediately invoked functional expression = = = = = = = = = = = =
(function() {

// = = = window .on function = = = = = = = = = = = = = = = = = = = = = = = = = =

  $(window).on('load', function () {

     $('.loader-container').fadeOut( 3000 );
     $('.sec-loader').fadeOut( 3000 );
     $('.star-spinner').fadeOut( 2000 );
  });

// = = = document.ready function = = = = = = = = = = = = = = = = = = = = = = = =

  $(document).ready(function() {

// = = = global variables = = = = = = = = = = = = = = = = = = = = = = = = = = =

    // = = = section 1 = = =
    var getArrow = document.querySelector( '.sec1-arrow' );
    var getStarVid = document.querySelector( '.starVid' );
    var getNasaBtn = document.querySelector( '.nasa-btn' );

    // = = = section 2 = = =
    var guestQty = document.querySelector( '.guest-qty' );
    var getGuestBtn = document.querySelector( '.guest-btn' );
    var getGuestText = document.querySelector( '.guest-text' );
    var getDays = document.querySelector( '.days-text' );
    var getLocation = document.querySelector( '.sec4-content' );
    var getAcc1 = document.querySelector( '.acc1' );
    var getAcc2 = document.querySelector( '.acc2' );
    var getAcc3 = document.querySelector( '.acc3' );
    var getAcc4 = document.querySelector( '.acc4' );
    var getAcc1Btn = document.querySelector( '.acc1-btn' );
    var getAcc2Btn = document.querySelector( '.acc2-btn' );
    var getAcc3Btn = document.querySelector( '.acc3-btn' );
    var getAcc4Btn = document.querySelector( '.acc4-btn' );

    // = = = section 3 = = =
    var getResName = document.querySelector( '.sec5-name' );
    var getResGuests = document.querySelector( '.sec5-guest' );
    var getResDate = document.querySelector( '.sec5-date' );
    var getResImg = document.querySelector( '.sec5-img' );
    var getAccCost = document.querySelector( '.sec5-acc-cost' );
    var getExcCost = document.querySelector( '.sec5-exc-cost' );
    var getResTotal = document.querySelector( '.sec5-total' );

    // = = = section modal = = =
    var getExcBtn = document.querySelector( '.exc-btn' );
    var getExcQty1 = document.querySelector( '.exc1-qty' );
    var getExcQty2 = document.querySelector( '.exc2-qty' );
    var getExcQty3 = document.querySelector( '.exc3-qty' );

    // = = = section 6 = = =
    var getToSec1Btn = document.querySelector( '.sec6-btn' );

    // = = = fullpage section  = = = = = = = = = = = = = = = = = = = = = = = = =

    $('#fullpage').fullpage({

      menu: '#menu',
      lockAnchors: false,
      anchors: [ 'firstPage', 'secondPage', ],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: [ 'firstSlide', 'secondSlide', 'thirdSlide' ],
      showActiveTooltip: false,
      slidesNavigation: false,
      scrollingSpeed: 900
    // = = end of fullpage function = =
    });

    // = = = bootstrap tooltip  = = = = = = = = = = = = = = = = = = = = = = = =

    function playTool() {

      $(function () {

        $('[data-toggle="tooltip"]').tooltip();

      });
    // = = end of playTool function = =
    }

    // = = = button onclick   = = = = = = = = = = = = = = = = = = = = = = = = =

    getArrow.onclick = function() {

      $.fn.fullpage.moveSectionDown();

    };

    getNasaBtn.onclick = function() {

      $('.nasa-btn').tooltip( 'hide' );
      $.fn.fullpage.moveTo( 4 );

    };

    getToSec1Btn.onclick = function() {

      $.fn.fullpage.moveTo( 1 );

    };

    // = = = video section  = = = = = = = = = = = = = = = = = = = = = = = = = =

    function setPlaySpeed() {

      getStarVid.playbackRate = 0.5;
    // = = end of setPlaySpeed function = =
    }

    // = = = guest section  = = = = = = = = = = = = = = = = = = = = = = = = = =

    getGuestBtn.onclick = function() {

      playGuest();

    };

    function playGuest() {

      var guestNum = parseInt(guestQty.value);
      accomoObj.gstNum = guestNum;

        if ( accomoObj.gstNum === 0 || accomoObj.gstNum >= 5 ) {
          getGuestText.textContent = ( `You have added ${accomoObj.gstNum} guests, please add between 1-4 guests` );
        } else {
          getGuestText.textContent = ( `You have selected ${accomoObj.gstNum} guests` );
        }

        getResGuests.textContent = ( `Guests: ${accomoObj.gstNum}` );
    // = = end of playGuest function = =
    }

    // = = = date section  = = = = = = = = = = = = = = = = = = = = = = = = = =

    function playDatePicker() {

      $(function() {

        $('input[name="datefilter"]').daterangepicker({
          autoUpdateInput: false,
          opens: 'center',
          minDate: moment(),
          maxDate: moment().add( 1, 'year' ),
          locale: {
            cancelLabel: 'Clear'
          }

      });

      $('input[name="datefilter"]').on('apply.daterangepicker', function( ev, picker ) {

        $( this ).val(picker.startDate.format( 'MM/DD/YYYY' ) + ' - ' + picker.endDate.format( 'MM/DD/YYYY' ));

        // var getDateValues = document.querySelector('.date-picker');
        var getStartDate = Date.parse( picker.startDate );
        var getEndDate = Date.parse( picker.endDate );
        var dateQty = getEndDate - getStartDate;
        var dateQtyTotal = Math.floor( dateQty / 864e5 );
        accomoObj.dateNum = dateQtyTotal;

          if ( accomoObj.dateNum >= 1 && accomoObj.dateNum <= 15 ) {
            getDays.textContent = ( `You have selected ${accomoObj.dateNum} nights` );
          } else {
            getDays.textContent = ( `*You have selected ${accomoObj.dateNum} nights, please ensure you select between 1-15 nights` );
          }

          playConditions();

          getResDate.textContent = (`Date: ${picker.startDate.format('MM/DD/YYYY')} - ${picker.endDate.format('MM/DD/YYYY')},  ${accomoObj.dateNum} nights`);
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function( ev, picker ) {

          $( this ).val( '' );

        });
      // = = end of datepicker.js function = =
      });
    // = = end of playDatePicker function = =
    }

// = = = conditionals section  = = = = = = = = = = = = = = = = = = = = = = = = =

    function playConditions() {

      if (( accomoObj.gstNum >= accomoObj.hotel.minGuest && accomoObj.gstNum <= accomoObj.hotel.maxGuest ) &&
        ( accomoObj.dateNum >= accomoObj.hotel.minNight && accomoObj.dateNum <= accomoObj.hotel.maxNight )) {
        accomoObj.mapMarker[0].style.visibility = 'visible';
      } accomoObj.mapMarker[0].onclick = function() {
        getLocation.style.display = 'none';
        getAcc4.style.display = 'none';
        getAcc3.style.display = 'none';
        getAcc2.style.display = 'none';
        getAcc1.style.display = 'contents';
      };

      if (( accomoObj.gstNum >= accomoObj.hostel.minGuest ) &&
        ( accomoObj.dateNum >= accomoObj.hostel.minNight && accomoObj.dateNum <= accomoObj.hostel.maxNight )) {
        accomoObj.mapMarker[1].style.visibility = 'visible';
      }

        accomoObj.mapMarker[1].onclick = function() {
          getLocation.style.display = 'none';
          getAcc4.style.display = 'none';
          getAcc3.style.display = 'none';
          getAcc1.style.display = 'none';
          getAcc2.style.display = 'contents';
        };


      if (( accomoObj.gstNum >= accomoObj.glamping.minGuest && accomoObj.gstNum <= accomoObj.glamping.maxGuest ) &&
        ( accomoObj.dateNum >= accomoObj.glamping.minNight && accomoObj.dateNum <= accomoObj.glamping.maxNight )) {
        accomoObj.mapMarker[3].style.visibility = 'visible';
      }

        accomoObj.mapMarker[3].onclick = function() {
          getLocation.style.display = 'none';
          getAcc1.style.display = 'none';
          getAcc3.style.display = 'none';
          getAcc2.style.display = 'none';
          getAcc4.style.display = 'contents';
        };

      if (( accomoObj.gstNum >= accomoObj.house.minGuest && accomoObj.gstNum <= accomoObj.house.maxGuest ) &&
        ( accomoObj.dateNum >= accomoObj.house.minNight && accomoObj.dateNum <= accomoObj.house.maxNight )) {
        accomoObj.mapMarker[2].style.visibility = 'visible';
      }

        accomoObj.mapMarker[2].onclick = function() {
          getLocation.style.display = 'none';
          getAcc1.style.display = 'none';
          getAcc4.style.display = 'none';
          getAcc2.style.display = 'none';
          getAcc3.style.display = 'contents';
        };
    // = = end of playConditions function = =
    }

// = = = mapbox section  = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    function playMap() {
      // = = code copied from mapbox = = =
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vhc2hlbGxzbnoiLCJhIjoiY2twNG9lZmc2MDQ1bzJ1cjBjN3VnbnQxMSJ9.1jS2lhqq4jZ5bBGTda1prA';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/seashellsnz/ckqgam0jg1tvo17lacpbtaubr',
        center: [ 172.438722, -40.855568 ],
        zoom: 4.8

      });

      map.addControl(new mapboxgl.NavigationControl());

        // = = = copied reference from mapbox = = =
      map.on('click', function(e) {

        var features = map.queryRenderedFeatures(e.point, {
          layers: [ 'nz-dark-sky-reserves-2nqw5t' ]
        });

          if (!features.length) {
            return;
          }

        var feature = features[0];
        var popup = new mapboxgl.Popup({
            offset: [ 0, -15 ]
          })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h5>' + feature.properties.title + '</h5>' +
            '<h6>' + feature.properties.description + '</h6>'
          )
          .addTo(map);
      });

      geojson.features.forEach(function(marker) {

        var el = document.createElement('div');
        el.className = 'marker';
        accomoObj.mapMarker.push(el);
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    // = = end of playMap function = =
    }

    // = = = accomodation section  = = = = = = = = = = = = = = = = = = = = = = =

    function playAcc() {

      getAcc1Btn.onclick = function() {

        var getAccCostNum = parseInt( accomoObj.hotel.cost );
        getAcc1Btn = accomoObj.hotel.cost;
        accomoObj.accTotal = getAccCostNum;
        console.log(getAcc1Btn);
        getResName.textContent = accomoObj.hotel.name;
        getAccCost.textContent = ( `$${accomoObj.hotel.cost}.00 per night` );
        getResImg.src = accomoObj.hotel.img;
        console.log(accomoObj.hotel.img);
        console.log(getResImg.src);

      };

      getAcc2Btn.onclick = function() {

        var getAccCostNum = parseInt( accomoObj.hostel.cost );
        getAcc2Btn = accomoObj.hostel.cost;
        accomoObj.accTotal = getAccCostNum;

        getResName.textContent = accomoObj.hostel.name;
        getAccCost.textContent = ( `$${accomoObj.hostel.cost}.00 per night` );
        getResImg.src = accomoObj.hostel.img;

      };

      getAcc3Btn.onclick = function() {

        var getAccCostNum = parseInt( accomoObj.house.cost );
        getAcc3Btn = accomoObj.house.cost;
        accomoObj.accTotal = getAccCostNum;

        getResName.textContent = accomoObj.house.name;
        getAccCost.textContent = ( `$${accomoObj.house.cost}.00 per night` );
        getResImg.src = accomoObj.house.img;

      };

      getAcc4Btn.onclick = function() {
        console.log(getAcc4Btn);
        var getAccCostNum = parseInt( accomoObj.glamping.cost );
        getAcc4Btn = accomoObj.glamping.cost;
        accomoObj.accTotal = getAccCostNum;
        console.log(accomoObj.glamping.cost);
        console.log(getAccCostNum);
        getResName.textContent = accomoObj.glamping.name;
        getAccCost.textContent = ( `$${accomoObj.glamping.cost}.00 per night` );
        getResImg.src = accomoObj.glamping.img;

      };
    // = = end of playAcc function = =
    }

    // = = = playNasa section  = = = = = = = = = = = = = = = = = = = = = = = = =

    function playNasa() {
      // = = code copied from nasa api = = =
      var getApiBtn = document.querySelector( '.api-btn' );

      getApiBtn.addEventListener('click', function() {
        console.log('api button pressed');
        sendApiRequest();
      });

      async function sendApiRequest() {
        var API_KEY = 'lFuurfZzadvoMx33Dp7fWrHv1dTR8E1mqVc2RU0G';
        var response = await fetch( `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}` );

        console.log( response );
        var data = await response.json();
        console.log( data );
        useApiData( data );

      }

      function useApiData(data) {

        document.querySelector('.api-content').innerHTML = data.title;
        document.querySelector('.api-content').innerHTML = data.explanation;
        document.querySelector('.api-img').innerHTML = `<img src='${data.url}'>`;

      }
    }
    playNasa();

    // = = = playModal section  = = = = = = = = = = = = = = = = = = = = = = = =

    function playModal() {

      $('.demo02').animatedModal({

        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#444444',
        afterClose: function() {
          $.fn.fullpage.moveTo(3);
        }

      });

      getExcBtn.onclick = function() {

        playExcursion();
        playReservation();

      };

      function playExcursion() {

        var exc1Num = parseInt( getExcQty1.value );
        var exc2Num = parseInt( getExcQty2.value );
        var exc3Num = parseInt( getExcQty3.value );

        accomoObj.exc1Num = exc1Num;
        accomoObj.exc2Num = exc2Num;
        accomoObj.exc3Num = exc3Num;

        var exc1Total = accomoObj.exc1Num * accomoObj.excursions.opt1.cost;
        var exc2Total = accomoObj.exc2Num * accomoObj.excursions.opt2.cost;
        var exc3Total = accomoObj.exc3Num * accomoObj.excursions.opt3.cost;

        accomoObj.excTotal = exc1Total + exc2Total + exc3Total;
        getExcCost.textContent = ( `Excursions Cost: $${accomoObj.excTotal}.00` );

      }
    // = = end of playModal function = =
    }

    // = = = playReservation section  = = = = = = = = = = = = = = = = = = = = =

    function playReservation() {

      getResTotal.textContent = ( `$${accomoObj.accTotal * accomoObj.dateNum + accomoObj.excTotal}.00` );
    // = = end of playReservation function = =
    }

    // = = = playReservation section  = = = = = = = = = = = = = = = = = = = = =

    function parsley() {

      var form = $('.sec2-col1').parsley();

      $('.sec2-col1').find('.btn-primary').click(function() {

        form.validate();

      });

      form.subscribe('parsley:form:success', function(e) {
      });

    // = = end of parsley function = =
    }

    // = = = calling functions section  = = = = = = = = = = = = = = = = = = = =

    playModal();
    setPlaySpeed();
    playDatePicker();
    playMap();
    playAcc();
    parsley();
    playTool();

  // = = end of document.ready function = =
  });
// = = end of iife= function = =
}());
