import loadGoogleMapsApi from 'load-google-maps-api';

export default function mapsManager() {
    let inputId = '';
    let mapId = '';
    let key = 'AIzaSyBR5kBWFTVAecBoW4IKDSjttophb4BC6fg';
    let autocomplete;
    let _ctrl = null;

	let init = (_that) => {
		_ctrl = _that;
	};

    let start = (input, map) => {
        inputId = input;
        mapId = map;
        initAutocomplete();
        if(_ctrl.jd && 
			_ctrl.jd.selections &&
            _ctrl.jd.selections["inp-contact-address"] &&
            _ctrl.jd.selections["inp-contact-address"].text &&
            _ctrl.jd.selections["inp-contact-address"].text.search('##') != -1) {
            updateMapSrc(_ctrl.jd.selections["inp-contact-address"].text);
        } else {
            getInitialPos();
        }  
    };

    let initAutocomplete = () => {

        loadGoogleMapsApi({
            libraries: ['places'],
            key: key
        }).then(function (googleMaps) {
            autocomplete = new googleMaps.places.Autocomplete(
                (document.getElementById(inputId))/*,
                {types: ['(cities)']}*/);

            autocomplete.addListener('place_changed', fillInAddress);
            $('#' + inputId).change(fillInAddress);
        }).catch(function (error) {
            console.error(error);
        });

    };

    let fillInAddress = () => {
        var place = autocomplete.getPlace();
        if (place && place.place_id) {
            updateMapSrc('place_id:' + place.place_id);
            $('#' + inputId).data('place', place.place_id);
        } else {
            $('#' + inputId).data('place', '');
        }
      
        _ctrl.new_templateManager.updateTexts($("#template"), _ctrl.jd.selections);
        _ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
    };

    let updateMapSrc = (query) => {
        let map = document.getElementById(mapId);
        let src = "https://www.google.com/maps/embed/v1/place?key=" +
            key +
            "&q=" + query;
        map.src = src;
    };

    let ipLookUp = () => {
        $.ajax('http://ip-api.com/json')
            .then(
                function success(response) {
                    console.log(response.lat, response.lon);
                    updateMapSrc(response.lat + ',' + response.lon);
                },

                function fail(data, status) {
                    console.log('Request failed.  Returned status of',
                        status);
                }
            );
    };

    let getInitialPos = () => {
        if ("geolocation" in navigator) {
            // check if geolocation is supported/enabled on current browser
            navigator.geolocation.getCurrentPosition(
              function success(position) {
                // for when getting location is a success
                console.log('latitude', position.coords.latitude,
                  'longitude', position.coords.longitude);
              },
              function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving location', error_message);
                ipLookUp();
              }
            );
        } else {
            // geolocation is not supported
            // get your location some other way
            console.log('geolocation is not enabled on this browser')
            ipLookUp();
          }
    };

    return {
        init,
        start
    };

}