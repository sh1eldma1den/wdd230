let x = parseFloat(document.querySelector('#temperature').textContent);
let y = parseFloat(document.querySelector('#windSpeed').textContent);

if ( x >= 50 && y >=3 ) {
        let z = Math.pow(y,0.16); 
        let result = 35.74 + (0.6215 * x) - (35.75 * z) + (0.4275 * x * z);
        result = Math.round(output*100)/100;
        document.querySelector('#windChill').textcontent = 'Wind Chill: ' + result;
    }



    