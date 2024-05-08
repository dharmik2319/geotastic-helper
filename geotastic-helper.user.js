// ==UserScript==
// @name        Geotastic Helper
// @match       *://*.geotastic.net/*
// @grant       none
// @version     1.0
// @author      dharmik2319
// @description Helps you in the game Geotastix
// @run-at      document-start
// ==/UserScript==

hashCountries = {"f0357a3f154bc2ffe2bff55055457068": "Afghanistan", "9cea1e2473aaf49955fa34faac95b3e7": "\\u00c5land Islands", "97282b278e5d51866f8e57204e4820e5": "Albania", "0de7b6a61a70688b26e6eeb3113531a3": "Algeria", "f970e2767d0cfe75876ea857f92e319b": "American Samoa", "523af537946b79c4f8369ed39ba78605": "Andorra", "adac5e63f80f8629e9573527b25891d3": "Angola", "4921c0e2d1f6005abe1f9ec2e2041909": "Anguilla", "b2b04af9f8f3ab06229e03ac8d3c24ca": "Antarctica", "4e42f7dd43ecbfe104de58610557c5ba": "Antigua and Barbuda", "c582dec943ff7b743aa0691df291cea6": "Argentina", "c04cd38aeb30f3ad1f8ab4e64a0ded7b": "Armenia", "b787d22d9cb06342658bf546039117bc": "Aruba", "8bcc25c96aa5a71f7a76309077753e67": "Australia", "7d0db380a5b95a8ba1da0bca241abda1": "Austria", "cc8c0a97c2dfcd73caff160b65aa39e2": "Azerbaijan", "7c9df801238abe28cae2675fd3166a1a": "Bahamas", "c08bba7a0c0386f1551e8474d853ecbf": "Bahrain", "c419b06b4c6579b50ff05adb3b8424f1": "Bangladesh", "21ad0bd836b90d08f4cf640b4c298e7c": "Barbados", "df3f079de6961496f0460dcfdbf9bca3": "Belarus", "910955a907e739b81ec8855763108a29": "Belgium", "b005ad12944422688084f19bf5e19729": "Belize", "39b9df3a0fb3356d11a63e22260e96ab": "Benin", "084243855820f9ca47f466f645784636": "Bermuda", "6920626369b1f05844f5e3d6f93b5f6e": "Bhutan", "ad7532d5b3860a408fbe01f9455dca36": "Bolivia (Plurinational State of)", "52196aa54f1674f9ecbf26439c42c763": "Bonaire, Sint Eustatius and Saba", "07159c47ee1b19ae4fb9c40d480856c4": "Bosnia and Herzegovina", "823355b63ab3af0a0e4d1367e89abd1c": "Botswana", "121aa3ee4a7d5b1bbbc760fd0c6de79b": "Bouvet Island", "dc634e2072827fe0b5be9a2063390544": "Brazil", "f98ed07a4d5f50f7de1410d905f1477f": "British Indian Ocean Territory", "4e58188ff528dea1eec738fffc0e118d": "Brunei Darussalam", "5523c88dd347d1b7cc617f632b7efdb7": "Bulgaria", "c9f9d7dd806cf4122041837a80f47c64": "Burkina Faso", "99d4fb3db1563c87da2cdfc0158b37c3": "Burundi", "de3ec0aa2234aa1e3ee275bbc715c6c9": "Cabo Verde", "fa46ec0b4924e8c2194a53ef61b94039": "Cambodia", "820eb5b696ea2a657c0db1e258dc7d81": "Cameroon", "5435c69ed3bcc5b2e4d580e393e373d3": "Canada", "9e854e5865924fe3d61fe89d56220808": "Cayman Islands", "4e29342d9904d64e9e25fd3b92558e2f": "Central African Republic", "626726e60bd1215f36719a308a25b798": "Chad", "161747ec4dc9f55f1760195593742232": "Chile", "7efdfc94655a25dcea3ec85e9bb703fa": "China", "0bdff8095c8bf1b38775bf35547a1317": "Christmas Island", "e0323a9039add2978bf5b49550572c7c": "Cocos (Keeling) Islands", "ab6c040066603ef2519d512b21dce9ab": "Colombia", "9b05de73d43f8c4ec1110c6bcc5312bc": "Comoros", "6e9cf3eef65da697796cf33f27eb0f57": "Congo", "6865aeb3a9ed28f9a79ec454b259e5d0": "Congo, Democratic Republic of the", "d5a5b3dd1ccb90d30360f0c068fd43fc": "Cook Islands", "324d8a1d3f81e730d5099a48cee0c5b6": "Costa Rica", "35ea51baf1fe7f0142ad5f950855dde0": "C\\u00f4te d\'Ivoire", "adab7b701f23bb82014c8506d3dc784e": "Croatia", "a4dbfd6aef3b4045fe61aa0146debdf8": "Cuba", "0707ba092e91260b305c326e6a353593": "Cura\\u00e7ao", "471c1f3fc1dd7bb8cd0341b03e4be59e": "Cyprus", "9c049173fad5f4f89c68231237df85b8": "Czechia", "0ecbf9426bcfbd9a086ded5fc8c4eca8": "Denmark", "64ca60972a6ec926d1c4b9d31080c687": "Djibouti", "608e7dc116de7157306012b4f0be82ac": "Dominica", "d4579b2688d675235f402f6b4b43bcbf": "Dominican Republic", "2f53e6f3f2acb041a4e0737e58c45321": "Ecuador", "2a6a84e9e44441afbd75cc19ce28be37": "Egypt", "743541121c12a113af807d1582c74bea": "El Salvador", "b84a1ed8db3d3bf378f49becdea153b2": "Equatorial Guinea", "818f9c45cfa30eeff277ef38bcbe9910": "Eritrea", "08a4415e9d594ff960030b921d42b91e": "Estonia", "7dabf5c198b0bab2eaa42bb03a113e55": "Eswatini", "4de1b7a4dc53e4a84c25ffb7cdb580ee": "Ethiopia", "ef1cb6e72d149b184cc241037203f60b": "Falkland Islands (Malvinas)", "eed807024939b808083f0031a56e9872": "Faroe Islands", "6fac3ab603bb3fb46e4277786393194c": "Fiji", "75778bf8fde7266d416b0089e7b8b793": "Finland", "82a9e4d26595c87ab6e442391d8c5bba": "France", "e5bb23797bfea314a3db43d07dbd6a74": "French Guiana", "7287aa2c53d0a440da9db5614937e36f": "French Polynesia", "114d6a415b3d04db792ca7c0da0c7a55": "French Southern Territories", "32d7508fe69220cb40af28441ef746d9": "Gabon", "92073d2fe26e543ce222cc0fb0b7d7a0": "Gambia", "0ba64a0dea00947916dfb6a66866e1ca": "Georgia", "5f02f0889301fd7be1ac972c11bf3e7d": "Germany", "19b19ffc30caef1c9376cd2982992a59": "Ghana", "28dd376c5a44acc92e450ee338260c56": "Gibraltar", "d692bc40d83423d24d3a37582f58468c": "Greece", "ce1d5a2480e0f4a2d1c1c7968cc66c13": "Greenland", "a6be8a33b7c987f4ffb76d9c9805c7eb": "Grenada", "5343b21ad303bf1799629894deca13db": "Guadeloupe", "d2a460df08a4fb7a558f635b540d90cb": "Guam", "1bfad22f0925978f310a37440bfdff43": "Guatemala", "73c18c59a39b18382081ec00bb456d43": "Guernsey", "5123dd8b087b644fdb8f8603acd1bad4": "Guinea", "3f071f4f163d68551f4fc1544c7f69a6": "Guinea-Bissau", "5e08be988691054c937b997b4cb6ad97": "Guyana", "eb5e48e74123cacc52761302ea4a7d22": "Haiti", "2ab5564b805d8065f4bcf81060472746": "Heard Island and McDonald Islands", "43b1cc1db7be63d899dd4280f578691a": "Holy See", "59ca4f8bbb9713c2eb59db115fcdb664": "Honduras", "ae4171856a75f7b67d51fc0e1f95902e": "Hong Kong", "18bd9197cb1d833bc352f47535c00320": "Hungary", "a2a551a6458a8de22446cc76d639a9e9": "Iceland", "13b5bfe96f3e2fe411c9f66f4a582adf": "India", "b80bb7740288fda1f201890375a60c8f": "Indonesia", "d74eea4899a61f9fcbc527ef988ea0ff": "Iran (Islamic Republic of)", "795237fd9d107e63cd19b0db0f2fba2f": "Iraq", "25400724d7370b0b29c9369d9af3dd21": "Ireland", "73bebce395b6f1efedcf6842fbdb4d76": "Isle of Man", "4605f628f91de21e4b5f9433f46e29eb": "Israel", "0d149b90e7394297301c90191ae775f0": "Italy", "3da770cc56ed4407b6aaf10ad4e72b4d": "Jamaica", "55add3d845bfcd87a9b0949b0da49c0a": "Japan", "79563e90630af3525dff01b6638b0886": "Jersey", "674f33841e2309ffdd24c85dc3b999de": "Jordan", "9008f9e2758f08fe920b1765e72734d5": "Kazakhstan", "25bc6654798eb508fa0b6343212a74fe": "Kenya", "988287f7a1eb966ffc4e19bdbdeec7c3": "Kiribati", "26b568e4192a164d5b3eacdbd632bc2e": "Korea (Democratic People\'s Republic of)", "dcf0d7d2cd120bf42580d43f29785dd3": "Korea, Republic of", "048685d96262085442a1d5bb4a14bc3b": "Kuwait", "ebe86682666f2ab3da0843ed3097e4b3": "Kyrgyzstan", "c9089f3c9adaf0186f6ffb1ee8d6501c": "Lao People\'s Democratic Republic", "85d1a9c488d7117ea86291a755e5d43c": "Latvia", "26403ec6d537fa31f63e294b44831734": "Lebanon", "44ba5ca65651b4f36f1927576dd35436": "Lesotho", "58791f322c1bfc3de6141788d3b8666f": "Liberia", "e728b47751c6555942cb60f97d1e4553": "Libya", "d70c1e5d44de8a9150eb91ecff563578": "Liechtenstein", "d91af6958918af87d6a057c1cdf5b225": "Lithuania", "3e7e122bf08f48432c961ba491089dc9": "Luxembourg", "27c9d5187cd283f8d160ec1ed2b5ac89": "Macao", "b351bb9b0af6e4fc678749675c53ad67": "Madagascar", "38fed7107cee058098ca06304c1beb90": "Malawi", "6864f389d9876436bc8778ff071d1b6c": "Malaysia", "94d035945b3d82182669c4d3f6daa104": "Maldives", "9830e1f81f623b33106acc186b93374e": "Mali", "710998fd1b7c0235170265650770a4b1": "Malta", "ed8f5b7e74398143b43a93dc753618ae": "Marshall Islands", "1d8a4975693ef1eb9ca54878098d608f": "Martinique", "d9394066970e44ae252fd0347e58c03e": "Mauritania", "89aa4b196b48c8a13a6549bb1eaebd80": "Mauritius", "fa0ed5b5c600145bdd9a299952b99651": "Mayotte", "3d26b0b17065c2cf29c06c010184c684": "Mexico", "0ab34ca97d9946591bf89817789cb5de": "Micronesia (Federated States of)", "793914c9c583d9d86d0f4ed8c521b0c1": "Moldova, Republic of", "d6fd0924e324f50669ae0295adf59567": "Monaco", "412566367c67448b599d1b7666f8ccfc": "Mongolia", "ab86a1e1ef70dff97959067b723c5c24": "Montenegro", "ee33e909372d935d190f4fcb2a92d542": "Montserrat", "b74df323e3939b563635a2cba7a7afba": "Morocco", "4f3dd0ffb3e41c5f74b5b0d8c1f10bb5": "Mozambique", "b3cd915d758008bd19d0f2428fbb354a": "Myanmar", "6ec66e124fb93c190e9207b0b82f542a": "Namibia", "0ab3e5d0801aea3f3758bcbd812e8f10": "Nauru", "cf3fc916339b02ad9c14aca2425ccf53": "Nepal", "1a13105b7e4eb5fb2e7c9515ac06aa48": "Netherlands", "1e7342845e24eb3b5b3554490da1c128": "New Caledonia", "c97b334ffd41ea4997083f1949632bc1": "New Zealand", "e6c151d449e1db05b1ffb5ad5ec656cf": "Nicaragua", "d4f917633649a3c47c7ab917fa990146": "Niger", "66e10e9ff65ef479654dde3968d3440d": "Nigeria", "0288bde0c2d593f2b5766f61b826a650": "Niue", "78d9238c1a217c8bbe8f6c26172fb12d": "Norfolk Island", "07d935680b6501b2e42fe4baea021389": "North Macedonia", "1f2dfa567dcf95833eddf7aec167fec7": "Northern Mariana Islands", "7fa3b767c460b54a2be4d49030b349c7": "Norway", "d58da82289939d8c4ec4f40689c2847e": "Oman", "1cd3c693132f4c31b5b5e5f4c5eed6bd": "Pakistan", "8fe4c11451281c094a6578e6ddbf5eed": "Palau", "8812c36aa5ae336c2a77bf63211d899a": "Palestine, State of", "e529a9cea4a728eb9c5828b13b22844c": "Panama", "235ec52392b77977539cf78b62e708d3": "Papua New Guinea", "dfed5bc177b87ab317c584e06566adc6": "Paraguay", "dd07de8561395a7c37f8fcc1752d45e1": "Peru", "da984e42a5899bbdac496ef0cbadcee2": "Philippines", "ded0804cf804b6d26e37953dc2dbc505": "Pitcairn", "288404204e3d452229308317344a285d": "Poland", "fc9fdf084e290f26a270390dc49061a2": "Portugal", "64e1e1cbe1ca8e88ef3a838a3e7b57d6": "Puerto Rico", "8264ee52f589f4c0191aa94f87aa1aeb": "Qatar", "12eccbdd9b32918131341f38907cbbb5": "R\\u00e9union", "3605c251087b88216c9bca890e07ad9c": "Romania", "89484b14b36a8d5329426a3d944d2983": "Russian Federation", "038c0dc8a958ffea17af047244fb6960": "Rwanda", "fd18772cbac19277b20dcccc1b90efb9": "Saint Barth\\u00e9lemy", "77cbc257e66302866cf6191754c0c8e3": "Saint Helena, Ascension and Tristan da Cunha", "8c7e6965b4169689a88b313bbe7450f9": "Saint Kitts and Nevis", "196accbcf32b0a8e6bef92e1a37d0fc0": "Saint Lucia", "ea81aa7df47d74c6737bf98fabf3ff82": "Saint Martin (French part)", "5109d85d95fece7816d9704e6e5b1279": "Saint Pierre and Miquelon", "c56e52594d4ebe7f6cb2b96c4637b486": "Saint Vincent and the Grenadines", "742523daef59db4b718409f46de05d0c": "Samoa", "ed79acb0cd3d7f8320c53c7798335ef0": "San Marino", "627fcdb6cc9a5e16d657ca6cdef0a6bb": "Sao Tome and Principe", "c12e01f2a13ff5587e1e9e4aedb8242d": "Saudi Arabia", "afbe94cdbe69a93efabc9f1325fc7dff": "Senegal", "3a2d7564baee79182ebc7b65084aabd1": "Serbia", "d54185b71f614c30a396ac4bc44d3269": "Seychelles", "54a2bf8c09ace67d3513aaa1aa7aa0f3": "Sierra Leone", "5dae429688af1c521ad87ac394192c6d": "Singapore", "2c38b9e45cec1b324dde4e3d5b22c648": "Sint Maarten (Dutch part)", "41d6ad0761a5d27a9e1bd567041ce9e9": "Slovakia", "ac5585d98646d255299c359140537783": "Slovenia", "26148d621ef74844918af182d63976b6": "Solomon Islands", "b807023f87e63b8ada92f79f546ff9cc": "Somalia", "959848ca10cc8a60da818ac11523dc63": "South Africa", "1d8d5e912302108b5e88c3e77fcad378": "South Georgia and the South Sandwich Islands", "3691308f2a4c2f6983f2880d32e29c84": "South Sudan", "12470fe406d44017d96eab37dd65fc14": "Spain", "d0fa06cd93335c8cae357ffe5cd1c4e9": "Sri Lanka", "6226f7cbe59e99a90b5cef6f94f966fd": "Sudan", "e22428ccf96cda9674a939c209ad1000": "Suriname", "b5bf27b2555de44e3df2230080db5a1d": "Svalbard and Jan Mayen", "efad7abb323e3d4016284c8a6da076a1": "Sweden", "d88fc6edf21ea464d35ff76288b84103": "Switzerland", "1548af1c94ad45584324df8f08baf227": "Syrian Arab Republic", "255a5cac7685572274d02f04c37be771": "Taiwan, Province of China", "456c2e75fe0faa57fd1cfd87117e0963": "Tajikistan", "73bb4387b3075739eacb9cd62ac4049c": "Tanzania, United Republic of", "1fdc0f893412ce55f0d2811821b84d3b": "Thailand", "313a21d5badc6f5632238ebf8c7690f6": "Timor-Leste", "1f0eb0985870635e62fa2f68a223b173": "Togo", "b6717b91c7595cc07f30aa9a784e6390": "Tokelau", "01b6e20344b68835c5ed1ddedf20d531": "Tonga", "accc9105df5383111407fd5b41255e23": "Trinidad and Tobago", "aafb96b2fa8806be307c4496867bad56": "Tunisia", "e7d707a26e7f7b6ff52c489c60e429b1": "Turkey", "6a962563e235e1789e663e356ac8d9e4": "Turkmenistan", "5c4fefda27cfe84c3999be13e6b8608a": "Turks and Caicos Islands", "c9a1fdac6e082dd89e7173244f34d7b3": "Tuvalu", "2a0617accf8bb8625c43e2ffeb5b8d5b": "Uganda", "5269f4d75f5bc75f0f94bab2100a5531": "Ukraine", "b6bb43df4525b928a105fb5741bddbea": "United Arab Emirates", "7885444af42e4b30c518c5be17c8850b": "United Kingdom of Great Britain and Northern Ireland", "0b3b97fa66886c5688ee4ae80ec0c3c2": "United States of America", "0dd00e33b6fc67b811ebe3177217d6c0": "United States Minor Outlying Islands", "1b23f8a4c97cc55f757ec2aae921f03d": "Uruguay", "8b3274b755aa033902f57fb557e25923": "Uzbekistan", "0730b75e96c0453b1b196be7ff4fa194": "Vanuatu", "eabb18f0a40c9b3552370c9e1bc1d61e": "Venezuela (Bolivarian Republic of)", "5e9c52c6d618881e7d9d62a294c4979c": "Viet Nam", "1815235d384d2912d4668c73298f1e52": "Virgin Islands (British)", "35b36b28916d38b34abddf832e286126": "Virgin Islands (U.S.)", "c1b291cb8522236e421731b509c9fcdd": "Wallis and Futuna", "28c494da87ff99969927ac34ba30adbe": "Western Sahara", "00c66f1a036bd8f9cb709cb8d925d3d9": "Yemen", "d9c2967765305ff512a5ab979ed1f7a0": "Zambia", "a1555463c361e7036a274a8b44e29192": "Zimbabwe"};

window.myMap;

let map;

// Hijacking the `google` module so that we can access an initialized google.maps.Map instance
var checkInterval = setInterval(function() {
    if (typeof google === 'object' && typeof google.maps === 'object' && typeof google.maps.Map === 'function') {
        var originalMap = google.maps.Map;
        google.maps.Map = function() {
            var instance = new originalMap(...arguments);
            window.myMap = instance
            return instance
        }
        clearInterval(checkInterval); // Stop checking once the module is loaded
    }
}, 10); // Check every 10 ms


let globalCoordinates = { // keep this stored globally, and we'll keep updating it for each API call.
    lat: 0,
    lng: 0
}

let country;

var originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    if (url.startsWith('https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetMetadata')) {
        this.addEventListener('load', function () {
            let interceptedResult = this.responseText
            let parsed = interceptedResult.replace("null","")
    //        console.log(parsed)
      //      console.log(url)
            const pattern = /-*\d+\.\d+,-*\d+\.\d+/g;
            let match = parsed.match(pattern)[0];
            let split = match.split(",")

            let lat = Number.parseFloat(split[0])
            let lng = Number.parseFloat(split[1])
            globalCoordinates.lat = lat
            globalCoordinates.lng = lng
            markers();
        });

    }
    if (url.startsWith("https://static.infra.geotastic.net/flags")) {
      console.log("here was it called.")
      country = hashCountries[url.match(/([a-f0-9]{32})/)[0]]
    }
    // Call the original open function
    return originalOpen.apply(this, arguments);

};

function mapsFromCoords() { // opens new Google Maps location using coords.

    const {lat,lng} = globalCoordinates;
    window.open(`https://www.google.com/maps/place/${lat},${lng}`);

}
let optsMarker;
let marker;
function markers() {
  if (typeof marker!="undefined") {
    marker.setMap(null)
    marker = null
  }
  map = window.myMap
  optsMarker = {type:"drop",position:new google.maps.LatLng(globalCoordinates.lat,globalCoordinates.lng),clickable:!1,map:map,id:"4fpmQ2n9EG"}
  marker = new google.maps.Marker(optsMarker)
//  console.log("marker added")

}



let onKeyDown = (e) => {
    if (e.keyCode === 50) {
	    mapsFromCoords();
    }
    if (e.keyCode === 49) {
	    alert(`${globalCoordinates.lat}, ${globalCoordinates.lng} ${country}`);
  //    console.log(window.myMap)
    }
}
document.addEventListener("keydown", onKeyDown);



