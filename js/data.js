// custom JavaScript written here:


// = = = accomoObj data object  = = = = = = = = = = = = = = = = = = = = = = = = =

var accomoObj = {
hotel: {
  name: 'Pure Pod',
  minGuest: 1,
  maxGuest: 2,
  cost: 157,
  minNight: 1,
  maxNight: 5,
  img: "img/purepod-img.jpeg"
},

hostel: {
  name: 'Starry Nights Hostel',
  minGuest: 1,
  cost: 30,
  minNight: 1,
  maxNight: 10,
  img: "img/hostel-img.jpeg"
},

glamping: {
  name: 'Southern Cross Glamping',
  minGuest: 2,
  maxGuest: 4,
  cost: 90,
  minNight: 3,
  maxNight: 10,
  img: "img/glamping-img.jpeg"
},

house: {
  name: 'Orions Cottage',
  minGuest: 1,
  maxGuest: 4,
  cost: 240,
  minNight: 2,
  maxNight: 15,
  img: "img/cottage-img.jpg"
},
excursions: {
  opt1: {
    name: 'Under The Stars',
    cost: 50
  },
  opt2: {
    name: 'Mountain Moonlights',
    cost: 60
  },
  opt3: {
    name: 'Telescope and Tea',
    cost: 70
  }
},
mapMarker: []
};


// = = = mapbox geojson data = = = = = = = = = = = = = = = = = = = = = = = = =

var geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [170.461136, -43.992066]
      },
      properties: {
        title: 'Lake Tekapo, NZ',
        description: 'Lake Tekapo Pure Pod'
      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.709169, -37.140207]
      },
      properties: {
        title: 'Mapbox',
        description: 'Coromandel Orions Cottage'
      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [167.715930, -45.427355]
      },
      properties: {
        title: 'Mapbox',
        description: 'Te Anau Starry Nights Hostel'
      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.460237, -39.305055]
      },
      properties: {
        title: 'Mapbox',
        description: 'Tongariro Southern Cross Glamping'
      }
    }
  ]
};
