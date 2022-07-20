var Notice = "Copyright (C) 2006-2021 Praytime.info";
var storage = {
	listener: null,
	get: function(object, callback) {
		if (typeof object === "string") {
			var value = this.read(object);
			return value ? JSON.parse(value) : callback;
		}
		var res = {};
		for (var key in object) {
			var defaultValue = object[key];
			if (object instanceof Array) {
				key = object[key];
				defaultValue = undefined;
			}
			var value = this.read(key);
			res[key] = value ? JSON.parse(value) : object[key];
		}
		if (typeof callback === "function") callback(res);
		return res;
	},
	set: function(object, value) {
		if (typeof object === "string") {
			object = {
				[object]: value
			};
		}
		for (var key in object) {
			this.write(key, JSON.stringify(object[key]));
		}
		if (this.listener) this.listener(object);
	},
	read: (key) => localStorage.getItem(key),
	write: (key, value) => localStorage.setItem(key, value),
	addListener: (listener) => {
		this.listener = listener;
	},
};
var methodList = [{
	value: "MWL",
	desc: "Muslim World League"
}, {
	value: "ISNA",
	desc: "Islamic Society of North America (ISNA)"
}, {
	value: "Egypt",
	desc: "Egyptian General Authority of Survey"
}, {
	value: "Makkah",
	desc: "Umm Al-Qura University, Makkah"
}, {
	value: "Karachi",
	desc: "University of Islamic Sciences, Karachi"
}, {
	value: "Tehran",
	desc: "Institute of Geophysics, University of Tehran"
}, {
	value: "Jafari",
	desc: "Leva Institute, Qum"
}, {
	value: "Custom",
	desc: "Custom"
}, ];
var timeList = [{
	name: "imsak",
	desc: "Imsak",
	abbr: "Imsk"
}, {
	name: "fajr",
	desc: "Fajr",
	abbr: "Fajr"
}, {
	name: "sunrise",
	desc: "Sunrise",
	abbr: "Sunr"
}, {
	name: "dhuhr",
	desc: "Dhuhr",
	abbr: "Duhr"
}, {
	name: "asr",
	desc: "Asr",
	abbr: "Asr"
}, {
	name: "sunset",
	desc: "Sunset",
	abbr: "Suns"
}, {
	name: "maghrib",
	desc: "Maghrib",
	abbr: "Mgrb"
}, {
	name: "isha",
	desc: "Isha",
	abbr: "Isha"
}, {
	name: "midnight",
	desc: "Midnight",
	abbr: "Midn"
}, ];
var prayerTimeList = [{
	name: "fajr",
	desc: "Fajr"
}, {
	name: "dhuhr",
	desc: "Dhuhr"
}, {
	name: "asr",
	desc: "Asr"
}, {
	name: "maghrib",
	desc: "Maghrib"
}, {
	name: "isha",
	desc: "Isha"
}, ];
var audioList = [{
	value: "ding.mp3",
	desc: "Ding"
}, {
	value: "adhan.mp3",
	desc: "Allahu Akbar"
}, {
	value: "sunni/Abdul-Basit.mp3",
	desc: "Abdul-Basit"
}, {
	value: "sunni/Abdul-Ghaffar.mp3",
	desc: "Abdul-Ghaffar"
}, {
	value: "sunni/Abdul-Hakam.mp3",
	desc: "Abdul-Hakam"
}, {
	value: "sunni/Adhan-Alaqsa.mp3",
	desc: "Adhan Alaqsa"
}, {
	value: "sunni/Adhan-Egypt.mp3",
	desc: "Adhan Egypt"
}, {
	value: "sunni/Adhan-Halab.mp3",
	desc: "Adhan Halab"
}, {
	value: "sunni/Adhan-Madinah.mp3",
	desc: "Adhan Madinah"
}, {
	value: "sunni/Adhan-Makkah.mp3",
	desc: "Adhan Mecca"
}, {
	value: "shia/Aghati.mp3",
	desc: "Aghati (Shia)"
}, {
	value: "sunni/Al-Hussaini.mp3",
	desc: "Al-Hussaini"
}, {
	value: "sunni/Bakir-Bash.mp3",
	desc: "Bakir Bash"
}, {
	value: "shia/Ghalwash.mp3",
	desc: "Ghalwash (Shia)"
}, {
	value: "sunni/Hafez.mp3",
	desc: "Hafez"
}, {
	value: "sunni/Hafiz-Murad.mp3",
	desc: "Hafiz Murad"
}, {
	value: "shia/Kazem-Zadeh.mp3",
	desc: "Kazem-Zadeh (Shia)"
}, {
	value: "sunni/Minshawi.mp3",
	desc: "Minshawi"
}, {
	value: "shia/Moazzen-Zadeh.mp3",
	desc: "Moazzen-Zadeh (Shia)"
}, {
	value: "shia/Mohammad-Zadeh.mp3",
	desc: "Mohammad-Zadeh (Shia)"
}, {
	value: "sunni/Naghshbandi.mp3",
	desc: "Naghshbandi"
}, {
	value: "shia/Rezaeian.mp3",
	desc: "Rezaeian (Shia)"
}, {
	value: "shia/Rowhani-Nejad.mp3",
	desc: "Rowhani-Nejad (Shia)"
}, {
	value: "sunni/Saber.mp3",
	desc: "Saber"
}, {
	value: "shia/Salimi.mp3",
	desc: "Salimi (Shia)"
}, {
	value: "shia/Sharif.mp3",
	desc: "Sharif (Shia)"
}, {
	value: "sunni/Sharif-Doman.mp3",
	desc: "Sharif Doman"
}, {
	value: "shia/Sobhdel.mp3",
	desc: "Sobhdel (Shia)"
}, {
	value: "shia/Tasvieh-Chi.mp3",
	desc: "Tasvieh-Chi (Shia)"
}, {
	value: "shia/Tookhi.mp3",
	desc: "Tookhi (Shia)"
}, {
	value: "sunni/Yusuf-Islam.mp3",
	desc: "Yusuf Islam"
}, ];
var defaultMethods = {
	ISNA: "AI, AG, AR, AW, BS, BB, BZ, BM, BO, BR, CA, KY, CL," + "CO, CR, CU, DM, DO, EC, SV, FK, GF, GD, GP, GT, GY, HT," + "HN, JM, MQ, MX, MS, AN, NI, PA, PY, PE, PR, SH, PM, GS," + "KN, LC, VC, SR, TT, TC, US, UY, VE, VG, VI",
	Egypt: "DZ, AO, BJ, BW, BF, BI, CI, CM, CV, CF, TD, KM, CG, CD," + "DJ, EG, GQ, ER, ET, GA, GM, GH, GN, GW, KE, LS, LR, LY," + "MG, MW, ML, MR, MU, YT, MA, MZ, NA, NE, NG, RE, RW, ST," + "SN, SC, SL, SO, ZA, SD, SZ, TZ, TG, TN, UG, EH, ZM, ZW",
	Makkah: "SA, OM, KW, BH, YE, AE, QA, JO, PS",
	Karachi: "PK, ID, BD, AF",
	Tehran: "IR",
	Jafari: "IQ",
};
var timezoneData = {
	"Europe/Andorra": ["AD", 42.5, 1.5167],
	"Asia/Dubai": ["AE", 25.3, 55.3],
	"Asia/Kabul": ["AF", 34.5167, 69.2],
	"Europe/Tirane": ["AL", 41.3333, 19.8333],
	"Asia/Yerevan": ["AM", 40.1833, 44.5],
	"Antarctica/Casey": ["AQ", -65.7167, 110.5167],
	"Antarctica/Davis": ["AQ", -67.4167, 77.9667],
	"Antarctica/DumontDUrville": ["AQ", -65.3333, 140.0167],
	"Antarctica/Mawson": ["AQ", -66.4, 62.8833],
	"Antarctica/Palmer": ["AQ", -63.2, -63.9],
	"Antarctica/Rothera": ["AQ", -66.4333, -67.8667],
	"Antarctica/Syowa": ["AQ", -68.9939, 39.59],
	"Antarctica/Troll": ["AQ", -71.9886, 2.535],
	"Antarctica/Vostok": ["AQ", -77.6, 106.9],
	"America/Argentina/Buenos_Aires": ["AR", -33.4, -57.55],
	"America/Argentina/Cordoba": ["AR", -30.6, -63.8167],
	"America/Argentina/Salta": ["AR", -23.2167, -64.5833],
	"America/Argentina/Jujuy": ["AR", -23.8167, -64.7],
	"America/Argentina/Tucuman": ["AR", -25.1833, -64.7833],
	"America/Argentina/Catamarca": ["AR", -27.5333, -64.2167],
	"America/Argentina/La_Rioja": ["AR", -28.5667, -65.15],
	"America/Argentina/San_Juan": ["AR", -30.4667, -67.4833],
	"America/Argentina/Mendoza": ["AR", -31.1167, -67.1833],
	"America/Argentina/San_Luis": ["AR", -32.6833, -65.65],
	"America/Argentina/Rio_Gallegos": ["AR", -50.3667, -68.7833],
	"America/Argentina/Ushuaia": ["AR", -53.2, -67.7],
	"Pacific/Pago_Pago": ["AS", -13.7333, -169.3],
	"Europe/Vienna": ["AT", 48.2167, 16.3333],
	"Australia/Lord_Howe": ["AU", -30.45, 159.0833],
	"Antarctica/Macquarie": ["AU", -53.5, 158.95],
	"Australia/Hobart": ["AU", -41.1167, 147.3167],
	"Australia/Currie": ["AU", -38.0667, 143.8667],
	"Australia/Melbourne": ["AU", -36.1833, 144.9667],
	"Australia/Sydney": ["AU", -32.1333, 151.2167],
	"Australia/Broken_Hill": ["AU", -30.05, 141.45],
	"Australia/Brisbane": ["AU", -26.5333, 153.0333],
	"Australia/Lindeman": ["AU", -19.7333, 149],
	"Australia/Adelaide": ["AU", -33.0833, 138.5833],
	"Australia/Darwin": ["AU", -11.5333, 130.8333],
	"Australia/Perth": ["AU", -30.05, 115.85],
	"Australia/Eucla": ["AU", -30.2833, 128.8667],
	"Asia/Baku": ["AZ", 40.3833, 49.85],
	"America/Barbados": ["BB", 13.1, -58.3833],
	"Asia/Dhaka": ["BD", 23.7167, 90.4167],
	"Europe/Brussels": ["BE", 50.8333, 4.3333],
	"Europe/Sofia": ["BG", 42.6833, 23.3167],
	"Atlantic/Bermuda": ["BM", 32.2833, -63.2333],
	"Asia/Brunei": ["BN", 4.9333, 114.9167],
	"America/La_Paz": ["BO", -15.5, -67.85],
	"America/Noronha": ["BR", -2.15, -31.5833],
	"America/Belem": ["BR", -0.55, -47.5167],
	"America/Fortaleza": ["BR", -2.2833, -37.5],
	"America/Recife": ["BR", -7.95, -33.1],
	"America/Araguaina": ["BR", -6.8, -47.8],
	"America/Maceio": ["BR", -8.3333, -34.2833],
	"America/Bahia": ["BR", -11.0167, -37.4833],
	"America/Sao_Paulo": ["BR", -22.4667, -45.3833],
	"America/Campo_Grande": ["BR", -19.55, -53.3833],
	"America/Cuiaba": ["BR", -14.4167, -55.9167],
	"America/Santarem": ["BR", -1.5667, -53.1333],
	"America/Porto_Velho": ["BR", -7.2333, -62.1],
	"America/Boa_Vista": ["BR", 2.8167, -59.3333],
	"America/Manaus": ["BR", -2.8667, -59.9833],
	"America/Eirunepe": ["BR", -5.3333, -68.1333],
	"America/Rio_Branco": ["BR", -8.0333, -66.2],
	"America/Nassau": ["BS", 25.0833, -76.65],
	"Asia/Thimphu": ["BT", 27.4667, 89.65],
	"Europe/Minsk": ["BY", 53.9, 27.5667],
	"America/Belize": ["BZ", 17.5, -87.8],
	"America/St_Johns": ["CA", 47.5667, -51.2833],
	"America/Halifax": ["CA", 44.65, -62.4],
	"America/Glace_Bay": ["CA", 46.2, -58.05],
	"America/Moncton": ["CA", 46.1, -63.2167],
	"America/Goose_Bay": ["CA", 53.3333, -59.5833],
	"America/Blanc-Sablon": ["CA", 51.4167, -56.8833],
	"America/Toronto": ["CA", 43.6487, -79.38545],
	"America/Nipigon": ["CA", 49.0167, -87.7333],
	"America/Thunder_Bay": ["CA", 48.3833, -88.75],
	"America/Iqaluit": ["CA", 63.7333, -67.5333],
	"America/Pangnirtung": ["CA", 66.1333, -64.2667],
	"America/Atikokan": ["CA", 48.7586, -90.3783],
	"America/Winnipeg": ["CA", 49.8833, -96.85],
	"America/Rainy_River": ["CA", 48.7167, -93.4333],
	"America/Resolute": ["CA", 74.6956, -93.1708],
	"America/Rankin_Inlet": ["CA", 62.8167, -91.9169],
	"America/Regina": ["CA", 50.4, -103.35],
	"America/Swift_Current": ["CA", 50.2833, -106.1667],
	"America/Edmonton": ["CA", 53.55, -112.5333],
	"America/Cambridge_Bay": ["CA", 69.1139, -104.9472],
	"America/Yellowknife": ["CA", 62.45, -113.65],
	"America/Inuvik": ["CA", 68.3497, -132.2833],
	"America/Creston": ["CA", 49.1, -115.4833],
	"America/Dawson_Creek": ["CA", 59.7667, -119.7667],
	"America/Fort_Nelson": ["CA", 58.8, -121.3],
	"America/Vancouver": ["CA", 49.2667, -122.8833],
	"America/Whitehorse": ["CA", 60.7167, -134.95],
	"America/Dawson": ["CA", 64.0667, -138.5833],
	"Indian/Cocos": ["CC", -11.8333, 96.9167],
	"Europe/Zurich": ["CH", 47.3833, 8.5333],
	"Africa/Abidjan": ["CI", 5.3167, -3.9667],
	"Pacific/Rarotonga": ["CK", -20.7667, -158.2333],
	"America/Santiago": ["CL", -32.55, -69.3333],
	"America/Punta_Arenas": ["CL", -52.85, -69.0833],
	"Pacific/Easter": ["CL", -26.85, -108.5667],
	"Asia/Shanghai": ["CN", 31.2333, 121.4667],
	"Asia/Urumqi": ["CN", 43.8, 87.5833],
	"America/Bogota": ["CO", 4.6, -73.9167],
	"America/Costa_Rica": ["CR", 9.9333, -83.9167],
	"America/Havana": ["CU", 23.1333, -81.6333],
	"Atlantic/Cape_Verde": ["CV", 14.9167, -22.4833],
	"America/Curacao": ["CW", 12.1833, -69],
	"Indian/Christmas": ["CX", -9.5833, 105.7167],
	"Asia/Nicosia": ["CY", 35.1667, 33.3667],
	"Asia/Famagusta": ["CY", 35.1167, 33.95],
	"Europe/Prague": ["CZ", 50.0833, 14.4333],
	"Europe/Berlin": ["DE", 52.5, 13.3667],
	"Europe/Copenhagen": ["DK", 55.6667, 12.5833],
	"America/Santo_Domingo": ["DO", 18.4667, -68.1],
	"Africa/Algiers": ["DZ", 36.7833, 3.05],
	"America/Guayaquil": ["EC", -1.8333, -78.1667],
	"Pacific/Galapagos": ["EC", 0.9, -88.4],
	"Europe/Tallinn": ["EE", 59.4167, 24.75],
	"Africa/Cairo": ["EG", 30.04427, 31.23525],
	"Africa/El_Aaiun": ["EH", 27.15, -12.8],
	"Europe/Madrid": ["ES", 40.4, -2.3167],
	"Africa/Ceuta": ["ES", 35.8833, -4.6833],
	"Atlantic/Canary": ["ES", 28.1, -14.6],
	"Europe/Helsinki": ["FI", 60.1667, 24.9667],
	"Pacific/Fiji": ["FJ", -17.8667, 178.4167],
	"Atlantic/Stanley": ["FK", -50.3, -56.15],
	"Pacific/Chuuk": ["FM", 7.4167, 151.7833],
	"Pacific/Pohnpei": ["FM", 6.9667, 158.2167],
	"Pacific/Kosrae": ["FM", 5.3167, 162.9833],
	"Atlantic/Faroe": ["FO", 62.0167, -5.2333],
	"Europe/Paris": ["FR", 48.8667, 2.3333],
	"Europe/London": ["GB", 51.5083, 0.1253],
	"Asia/Tbilisi": ["GE", 41.7167, 44.8167],
	"America/Cayenne": ["GF", 4.9333, -51.6667],
	"Africa/Accra": ["GH", 5.55, 0.2167],
	"Europe/Gibraltar": ["GI", 36.1333, -4.65],
	"America/Nuuk": ["GL", 64.1833, -50.2667],
	"America/Danmarkshavn": ["GL", 76.7667, -17.3333],
	"America/Scoresbysund": ["GL", 70.4833, -20.0333],
	"America/Thule": ["GL", 76.5667, -67.2167],
	"Europe/Athens": ["GR", 37.9667, 23.7167],
	"Atlantic/South_Georgia": ["GS", -53.7333, -35.4667],
	"America/Guatemala": ["GT", 14.6333, -89.4833],
	"Pacific/Guam": ["GU", 13.4667, 144.75],
	"Africa/Bissau": ["GW", 11.85, -14.4167],
	"America/Guyana": ["GY", 6.8, -57.8333],
	"Asia/Hong_Kong": ["HK", 22.2833, 114.15],
	"America/Tegucigalpa": ["HN", 14.1, -86.7833],
	"America/Port-au-Prince": ["HT", 18.5333, -71.6667],
	"Europe/Budapest": ["HU", 47.5, 19.0833],
	"Asia/Jakarta": ["ID", -5.8333, 106.8],
	"Asia/Pontianak": ["ID", 0.0333, 109.3333],
	"Asia/Makassar": ["ID", -4.8833, 119.4],
	"Asia/Jayapura": ["ID", -1.4667, 140.7],
	"Europe/Dublin": ["IE", 53.3333, -5.75],
	"Asia/Jerusalem": ["IL", 31.7806, 35.2239],
	"Asia/Kolkata": ["IN", 22.5333, 88.3667],
	"Indian/Chagos": ["IO", -6.6667, 72.4167],
	"Asia/Baghdad": ["IQ", 33.3421, 44.39308],
	"Asia/Tehran": ["IR", 35.68878, 51.41503],
	"Atlantic/Reykjavik": ["IS", 64.15, -20.15],
	"Europe/Rome": ["IT", 41.9, 12.4833],
	"America/Jamaica": ["JM", 17.9681, -75.2067],
	"Asia/Amman": ["JO", 31.95, 35.9333],
	"Asia/Tokyo": ["JP", 35.6544, 139.7447],
	"Africa/Nairobi": ["KE", -0.7167, 36.8167],
	"Asia/Bishkek": ["KG", 42.9, 74.6],
	"Pacific/Tarawa": ["KI", 1.4167, 173],
	"Pacific/Enderbury": ["KI", -2.8667, -170.9167],
	"Pacific/Kiritimati": ["KI", 1.8667, -156.6667],
	"Asia/Pyongyang": ["KP", 39.0167, 125.75],
	"Asia/Seoul": ["KR", 37.55, 126.9667],
	"Asia/Almaty": ["KZ", 43.25, 76.95],
	"Asia/Qyzylorda": ["KZ", 44.8, 65.4667],
	"Asia/Qostanay": ["KZ", 53.2, 63.6167],
	"Asia/Aqtobe": ["KZ", 50.2833, 57.1667],
	"Asia/Aqtau": ["KZ", 44.5167, 50.2667],
	"Asia/Atyrau": ["KZ", 47.1167, 51.9333],
	"Asia/Oral": ["KZ", 51.2167, 51.35],
	"Asia/Beirut": ["LB", 33.8833, 35.5],
	"Asia/Colombo": ["LK", 6.9333, 79.85],
	"Africa/Monrovia": ["LR", 6.3, -9.2167],
	"Europe/Vilnius": ["LT", 54.6833, 25.3167],
	"Europe/Luxembourg": ["LU", 49.6, 6.15],
	"Europe/Riga": ["LV", 56.95, 24.1],
	"Africa/Tripoli": ["LY", 32.9, 13.1833],
	"Africa/Casablanca": ["MA", 33.65, -6.4167],
	"Europe/Monaco": ["MC", 43.7, 7.3833],
	"Europe/Chisinau": ["MD", 47, 28.8333],
	"Pacific/Majuro": ["MH", 7.15, 171.2],
	"Pacific/Kwajalein": ["MH", 9.0833, 167.3333],
	"Asia/Yangon": ["MM", 16.7833, 96.1667],
	"Asia/Ulaanbaatar": ["MN", 47.9167, 106.8833],
	"Asia/Hovd": ["MN", 48.0167, 91.65],
	"Asia/Choibalsan": ["MN", 48.0667, 114.5],
	"Asia/Macau": ["MO", 22.1972, 113.5417],
	"America/Martinique": ["MQ", 14.6, -60.9167],
	"Europe/Malta": ["MT", 35.9, 14.5167],
	"Indian/Mauritius": ["MU", -19.8333, 57.5],
	"Indian/Maldives": ["MV", 4.1667, 73.5],
	"America/Mexico_City": ["MX", 19.4, -98.85],
	"America/Cancun": ["MX", 21.0833, -85.2333],
	"America/Merida": ["MX", 20.9667, -88.3833],
	"America/Monterrey": ["MX", 25.6667, -99.6833],
	"America/Matamoros": ["MX", 25.8333, -96.5],
	"America/Mazatlan": ["MX", 23.2167, -105.5833],
	"America/Chihuahua": ["MX", 28.6333, -105.9167],
	"America/Ojinaga": ["MX", 29.5667, -103.5833],
	"America/Hermosillo": ["MX", 29.0667, -109.0333],
	"America/Tijuana": ["MX", 32.5333, -116.9833],
	"America/Bahia_Banderas": ["MX", 20.8, -104.75],
	"Asia/Kuala_Lumpur": ["MY", 3.1667, 101.7],
	"Asia/Kuching": ["MY", 1.55, 110.3333],
	"Africa/Maputo": ["MZ", -24.0333, 32.5833],
	"Africa/Windhoek": ["NA", -21.4333, 17.1],
	"Pacific/Noumea": ["NC", -21.7333, 166.45],
	"Pacific/Norfolk": ["NF", -28.95, 167.9667],
	"Africa/Lagos": ["NG", 6.45, 3.4],
	"America/Managua": ["NI", 12.15, -85.7167],
	"Europe/Amsterdam": ["NL", 52.3667, 4.9],
	"Europe/Oslo": ["NO", 59.9167, 10.75],
	"Asia/Kathmandu": ["NP", 27.7167, 85.3167],
	"Pacific/Nauru": ["NR", 0.5167, 166.9167],
	"Pacific/Niue": ["NU", -18.9833, -168.0833],
	"Pacific/Auckland": ["NZ", -35.1333, 174.7667],
	"Pacific/Chatham": ["NZ", -42.05, -175.45],
	"America/Panama": ["PA", 8.9667, -78.4667],
	"America/Lima": ["PE", -11.95, -76.95],
	"Pacific/Tahiti": ["PF", -16.4667, -148.4333],
	"Pacific/Marquesas": ["PF", -9, -138.5],
	"Pacific/Gambier": ["PF", -22.8667, -133.05],
	"Pacific/Port_Moresby": ["PG", -8.5, 147.1667],
	"Pacific/Bougainville": ["PG", -5.7833, 155.5667],
	"Asia/Manila": ["PH", 14.5833, 121],
	"Asia/Karachi": ["PK", 24.8667, 67.05],
	"Europe/Warsaw": ["PL", 52.25, 21],
	"America/Miquelon": ["PM", 47.05, -55.6667],
	"Pacific/Pitcairn": ["PN", -24.9333, -129.9167],
	"America/Puerto_Rico": ["PR", 18.4683, -65.8939],
	"Asia/Gaza": ["PS", 31.5, 34.4667],
	"Asia/Hebron": ["PS", 31.5333, 35.095],
	"Europe/Lisbon": ["PT", 38.7167, -8.8667],
	"Atlantic/Madeira": ["PT", 32.6333, -15.1],
	"Atlantic/Azores": ["PT", 37.7333, -24.3333],
	"Pacific/Palau": ["PW", 7.3333, 134.4833],
	"America/Asuncion": ["PY", -24.7333, -56.3333],
	"Asia/Qatar": ["QA", 25.2833, 51.5333],
	"Indian/Reunion": ["RE", -19.1333, 55.4667],
	"Europe/Bucharest": ["RO", 44.4333, 26.1],
	"Europe/Belgrade": ["RS", 44.8333, 20.5],
	"Europe/Kaliningrad": ["RU", 54.7167, 20.5],
	"Europe/Moscow": ["RU", 55.7558, 37.6178],
	"Europe/Simferopol": ["RU", 44.95, 34.1],
	"Europe/Kirov": ["RU", 58.6, 49.65],
	"Europe/Astrakhan": ["RU", 46.35, 48.05],
	"Europe/Volgograd": ["RU", 48.7333, 44.4167],
	"Europe/Saratov": ["RU", 51.5667, 46.0333],
	"Europe/Ulyanovsk": ["RU", 54.3333, 48.4],
	"Europe/Samara": ["RU", 53.2, 50.15],
	"Asia/Yekaterinburg": ["RU", 56.85, 60.6],
	"Asia/Omsk": ["RU", 55, 73.4],
	"Asia/Novosibirsk": ["RU", 55.0333, 82.9167],
	"Asia/Barnaul": ["RU", 53.3667, 83.75],
	"Asia/Tomsk": ["RU", 56.5, 84.9667],
	"Asia/Novokuznetsk": ["RU", 53.75, 87.1167],
	"Asia/Krasnoyarsk": ["RU", 56.0167, 92.8333],
	"Asia/Irkutsk": ["RU", 52.2667, 104.3333],
	"Asia/Chita": ["RU", 52.05, 113.4667],
	"Asia/Yakutsk": ["RU", 62, 129.6667],
	"Asia/Khandyga": ["RU", 62.6564, 135.5539],
	"Asia/Vladivostok": ["RU", 43.1667, 131.9333],
	"Asia/Ust-Nera": ["RU", 64.5603, 143.2267],
	"Asia/Magadan": ["RU", 59.5667, 150.8],
	"Asia/Sakhalin": ["RU", 46.9667, 142.7],
	"Asia/Srednekolymsk": ["RU", 67.4667, 153.7167],
	"Asia/Kamchatka": ["RU", 53.0167, 158.65],
	"Asia/Anadyr": ["RU", 64.75, 177.4833],
	"Asia/Riyadh": ["SA", 24.68211, 46.68722],
	"Pacific/Guadalcanal": ["SB", -8.4667, 160.2],
	"Indian/Mahe": ["SC", -3.3333, 55.4667],
	"Africa/Khartoum": ["SD", 15.6, 32.5333],
	"Europe/Stockholm": ["SE", 59.3333, 18.05],
	"Asia/Singapore": ["SG", 1.2833, 103.85],
	"America/Paramaribo": ["SR", 5.8333, -54.8333],
	"Africa/Juba": ["SS", 4.85, 31.6167],
	"Africa/Sao_Tome": ["ST", 0.3333, 6.7333],
	"America/El_Salvador": ["SV", 13.7, -88.8],
	"Asia/Damascus": ["SY", 33.5, 36.3],
	"America/Grand_Turk": ["TC", 21.4667, -70.8667],
	"Africa/Ndjamena": ["TD", 12.1167, 15.05],
	"Indian/Kerguelen": ["TF", -48.6472, 70.2175],
	"Asia/Bangkok": ["TH", 13.75, 100.5167],
	"Asia/Dushanbe": ["TJ", 38.5833, 68.8],
	"Pacific/Fakaofo": ["TK", -8.6333, -170.7667],
	"Asia/Dili": ["TL", -7.45, 125.5833],
	"Asia/Ashgabat": ["TM", 37.95, 58.3833],
	"Africa/Tunis": ["TN", 36.8, 10.1833],
	"Pacific/Tongatapu": ["TO", -20.8333, -174.8333],
	"Europe/Istanbul": ["TR", 41.0167, 28.9667],
	"America/Port_of_Spain": ["TT", 10.65, -60.4833],
	"Pacific/Funafuti": ["TV", -7.4833, 179.2167],
	"Asia/Taipei": ["TW", 25.05, 121.5],
	"Europe/Kiev": ["UA", 50.4333, 30.5167],
	"Europe/Uzhgorod": ["UA", 48.6167, 22.3],
	"Europe/Zaporozhye": ["UA", 47.8333, 35.1667],
	"Pacific/Wake": ["UM", 19.2833, 166.6167],
	"America/New_York": ["US", 40.71455, -74.00714],
	"America/Detroit": ["US", 42.3314, -82.9542],
	"America/Kentucky/Louisville": ["US", 38.2542, -84.2406],
	"America/Kentucky/Monticello": ["US", 36.8297, -83.1508],
	"America/Indiana/Indianapolis": ["US", 39.7683, -85.8419],
	"America/Indiana/Vincennes": ["US", 38.6772, -86.4714],
	"America/Indiana/Winamac": ["US", 41.0514, -85.3969],
	"America/Indiana/Marengo": ["US", 38.3756, -85.6553],
	"America/Indiana/Petersburg": ["US", 38.4919, -86.7214],
	"America/Indiana/Vevay": ["US", 38.7478, -84.9328],
	"America/Chicago": ["US", 41.85, -86.35],
	"America/Indiana/Tell_City": ["US", 37.9531, -85.2386],
	"America/Indiana/Knox": ["US", 41.2958, -85.375],
	"America/Menominee": ["US", 45.1078, -86.3858],
	"America/North_Dakota/Center": ["US", 47.1164, -100.7008],
	"America/North_Dakota/New_Salem": ["US", 46.845, -100.5892],
	"America/North_Dakota/Beulah": ["US", 47.2642, -100.2222],
	"America/Denver": ["US", 39.7392, -103.0158],
	"America/Boise": ["US", 43.6136, -115.7975],
	"America/Phoenix": ["US", 33.4483, -111.9267],
	"America/Los_Angeles": ["US", 34.05358, -118.24546],
	"America/Anchorage": ["US", 61.2181, -148.0997],
	"America/Juneau": ["US", 58.3019, -133.5803],
	"America/Sitka": ["US", 57.1764, -134.6981],
	"America/Metlakatla": ["US", 55.1269, -130.4236],
	"America/Yakutat": ["US", 59.5469, -138.2728],
	"America/Nome": ["US", 64.5011, -164.5936],
	"America/Adak": ["US", 51.88, -175.3419],
	"Pacific/Honolulu": ["US", 21.3069, -156.1417],
	"America/Montevideo": ["UY", -33.0908, -55.7875],
	"Asia/Samarkand": ["UZ", 39.6667, 66.8],
	"Asia/Tashkent": ["UZ", 41.3333, 69.3],
	"America/Caracas": ["VE", 10.5, -65.0667],
	"Asia/Ho_Chi_Minh": ["VN", 10.75, 106.6667],
	"Pacific/Efate": ["VU", -16.3333, 168.4167],
	"Pacific/Wallis": ["WF", -12.7, -175.8333],
	"Pacific/Apia": ["WS", -12.1667, -170.2667],
	"Africa/Johannesburg": ["ZA", -25.75, 28],
	"America/Antigua": ["AG", 17.05, -60.2],
	"America/Anguilla": ["AI", 18.2, -62.9333],
	"Africa/Luanda": ["AO", -7.2, 13.2333],
	"Antarctica/McMurdo": ["AQ", -76.1667, 166.6],
	"America/Aruba": ["AW", 12.5, -68.0333],
	"Europe/Mariehamn": ["AX", 60.1, 19.95],
	"Europe/Sarajevo": ["BA", 43.8667, 18.4167],
	"Africa/Ouagadougou": ["BF", 12.3667, -0.4833],
	"Asia/Bahrain": ["BH", 26.3833, 50.5833],
	"Africa/Bujumbura": ["BI", -2.6167, 29.3667],
	"Africa/Porto-Novo": ["BJ", 6.4833, 2.6167],
	"America/St_Barthelemy": ["BL", 17.8833, -61.15],
	"America/Kralendijk": ["BQ", 12.1508, -67.7233],
	"Africa/Gaborone": ["BW", -23.35, 25.9167],
	"Africa/Kinshasa": ["CD", -3.7, 15.3],
	"Africa/Lubumbashi": ["CD", -10.3333, 27.4667],
	"Africa/Bangui": ["CF", 4.3667, 18.5833],
	"Africa/Brazzaville": ["CG", -3.7333, 15.2833],
	"Africa/Douala": ["CM", 4.05, 9.7],
	"Europe/Busingen": ["DE", 47.7, 8.6833],
	"Africa/Djibouti": ["DJ", 11.6, 43.15],
	"America/Dominica": ["DM", 15.3, -60.6],
	"Africa/Asmara": ["ER", 15.3333, 38.8833],
	"Africa/Addis_Ababa": ["ET", 9.0333, 38.7],
	"Africa/Libreville": ["GA", 0.3833, 9.45],
	"America/Grenada": ["GD", 12.05, -60.25],
	"Europe/Guernsey": ["GG", 49.4547, -1.4639],
	"Africa/Banjul": ["GM", 13.4667, -15.35],
	"Africa/Conakry": ["GN", 9.5167, -12.2833],
	"America/Guadeloupe": ["GP", 16.2333, -60.4667],
	"Africa/Malabo": ["GQ", 3.75, 8.7833],
	"Europe/Zagreb": ["HR", 45.8, 15.9667],
	"Europe/Isle_of_Man": ["IM", 54.15, -3.5333],
	"Europe/Jersey": ["JE", 49.1836, -1.8933],
	"Asia/Phnom_Penh": ["KH", 11.55, 104.9167],
	"Indian/Comoro": ["KM", -10.3167, 43.2667],
	"America/St_Kitts": ["KN", 17.3, -61.2833],
	"Asia/Kuwait": ["KW", 29.3333, 47.9833],
	"America/Cayman": ["KY", 19.3, -80.6167],
	"Asia/Vientiane": ["LA", 17.9667, 102.6],
	"America/St_Lucia": ["LC", 14.0167, -61],
	"Europe/Vaduz": ["LI", 47.15, 9.5167],
	"Africa/Maseru": ["LS", -28.5333, 27.5],
	"Europe/Podgorica": ["ME", 42.4333, 19.2667],
	"America/Marigot": ["MF", 18.0667, -62.9167],
	"Indian/Antananarivo": ["MG", -17.0833, 47.5167],
	"Europe/Skopje": ["MK", 41.9833, 21.4333],
	"Africa/Bamako": ["ML", 12.65, -8],
	"Pacific/Saipan": ["MP", 15.2, 145.75],
	"Africa/Nouakchott": ["MR", 18.1, -14.05],
	"America/Montserrat": ["MS", 16.7167, -61.7833],
	"Africa/Blantyre": ["MW", -14.2167, 35],
	"Africa/Niamey": ["NE", 13.5167, 2.1167],
	"Asia/Muscat": ["OM", 23.6, 58.5833],
	"Africa/Kigali": ["RW", -0.05, 30.0667],
	"Atlantic/St_Helena": ["SH", -14.0833, -4.3],
	"Europe/Ljubljana": ["SI", 46.05, 14.5167],
	"Arctic/Longyearbyen": ["SJ", 78, 16],
	"Europe/Bratislava": ["SK", 48.15, 17.1167],
	"Africa/Freetown": ["SL", 8.5, -12.75],
	"Europe/San_Marino": ["SM", 43.9167, 12.4667],
	"Africa/Dakar": ["SN", 14.6667, -16.5667],
	"Africa/Mogadishu": ["SO", 2.0667, 45.3667],
	"America/Lower_Princes": ["SX", 18.0514, -62.9528],
	"Africa/Mbabane": ["SZ", -25.7, 31.1],
	"Africa/Lome": ["TG", 6.1333, 1.2167],
	"Africa/Dar_es_Salaam": ["TZ", -5.2, 39.2833],
	"Africa/Kampala": ["UG", 0.3167, 32.4167],
	"Pacific/Midway": ["UM", 28.2167, -176.6333],
	"Europe/Vatican": ["VA", 41.9022, 12.4531],
	"America/St_Vincent": ["VC", 13.15, -60.7667],
	"America/Tortola": ["VG", 18.45, -63.3833],
	"America/St_Thomas": ["VI", 18.35, -63.0667],
	"Asia/Aden": ["YE", 12.75, 45.2],
	"Indian/Mayotte": ["YT", -11.2167, 45.2333],
	"Africa/Lusaka": ["ZM", -14.5833, 28.2833],
	"Africa/Harare": ["ZW", -16.1667, 31.05]
}
var countryNames = {
	"AD": "Andorra",
	"AE": "United Arab Emirates",
	"AF": "Afghanistan",
	"AG": "Antigua & Barbuda",
	"AI": "Anguilla",
	"AL": "Albania",
	"AM": "Armenia",
	"AO": "Angola",
	"AQ": "Antarctica",
	"AR": "Argentina",
	"AS": "Samoa (American)",
	"AT": "Austria",
	"AU": "Australia",
	"AW": "Aruba",
	"AX": "Ã…land Islands",
	"AZ": "Azerbaijan",
	"BA": "Bosnia & Herzegovina",
	"BB": "Barbados",
	"BD": "Bangladesh",
	"BE": "Belgium",
	"BF": "Burkina Faso",
	"BG": "Bulgaria",
	"BH": "Bahrain",
	"BI": "Burundi",
	"BJ": "Benin",
	"BL": "St Barthelemy",
	"BM": "Bermuda",
	"BN": "Brunei",
	"BO": "Bolivia",
	"BQ": "Caribbean NL",
	"BR": "Brazil",
	"BS": "Bahamas",
	"BT": "Bhutan",
	"BW": "Botswana",
	"BY": "Belarus",
	"BZ": "Belize",
	"CA": "Canada",
	"CC": "Cocos (Keeling) Islands",
	"CD": "Congo (Dem. Rep.)",
	"CF": "Central African Rep.",
	"CG": "Congo (Rep.)",
	"CH": "Switzerland",
	"CI": "CÃ´te d'Ivoire",
	"CK": "Cook Islands",
	"CL": "Chile",
	"CM": "Cameroon",
	"CN": "China",
	"CO": "Colombia",
	"CR": "Costa Rica",
	"CU": "Cuba",
	"CV": "Cape Verde",
	"CW": "CuraÃ§ao",
	"CX": "Christmas Island",
	"CY": "Cyprus",
	"CZ": "Czech Republic",
	"DE": "Germany",
	"DJ": "Djibouti",
	"DK": "Denmark",
	"DM": "Dominica",
	"DO": "Dominican Republic",
	"DZ": "Algeria",
	"EC": "Ecuador",
	"EE": "Estonia",
	"EG": "Egypt",
	"EH": "Western Sahara",
	"ER": "Eritrea",
	"ES": "Spain",
	"ET": "Ethiopia",
	"FI": "Finland",
	"FJ": "Fiji",
	"FK": "Falkland Islands",
	"FM": "Micronesia",
	"FO": "Faroe Islands",
	"FR": "France",
	"GA": "Gabon",
	"GB": "Britain (UK)",
	"GD": "Grenada",
	"GE": "Georgia",
	"GF": "French Guiana",
	"GG": "Guernsey",
	"GH": "Ghana",
	"GI": "Gibraltar",
	"GL": "Greenland",
	"GM": "Gambia",
	"GN": "Guinea",
	"GP": "Guadeloupe",
	"GQ": "Equatorial Guinea",
	"GR": "Greece",
	"GS": "South Georgia & the South Sandwich Islands",
	"GT": "Guatemala",
	"GU": "Guam",
	"GW": "Guinea-Bissau",
	"GY": "Guyana",
	"HK": "Hong Kong",
	"HN": "Honduras",
	"HR": "Croatia",
	"HT": "Haiti",
	"HU": "Hungary",
	"ID": "Indonesia",
	"IE": "Ireland",
	"IL": "Israel",
	"IM": "Isle of Man",
	"IN": "India",
	"IO": "British Indian Ocean Territory",
	"IQ": "Iraq",
	"IR": "Iran",
	"IS": "Iceland",
	"IT": "Italy",
	"JE": "Jersey",
	"JM": "Jamaica",
	"JO": "Jordan",
	"JP": "Japan",
	"KE": "Kenya",
	"KG": "Kyrgyzstan",
	"KH": "Cambodia",
	"KI": "Kiribati",
	"KM": "Comoros",
	"KN": "St Kitts & Nevis",
	"KP": "Korea (North)",
	"KR": "Korea (South)",
	"KW": "Kuwait",
	"KY": "Cayman Islands",
	"KZ": "Kazakhstan",
	"LA": "Laos",
	"LB": "Lebanon",
	"LC": "St Lucia",
	"LI": "Liechtenstein",
	"LK": "Sri Lanka",
	"LR": "Liberia",
	"LS": "Lesotho",
	"LT": "Lithuania",
	"LU": "Luxembourg",
	"LV": "Latvia",
	"LY": "Libya",
	"MA": "Morocco",
	"MC": "Monaco",
	"MD": "Moldova",
	"ME": "Montenegro",
	"MF": "St Martin (French)",
	"MG": "Madagascar",
	"MH": "Marshall Islands",
	"MK": "North Macedonia",
	"ML": "Mali",
	"MM": "Myanmar (Burma)",
	"MN": "Mongolia",
	"MO": "Macau",
	"MP": "Northern Mariana Islands",
	"MQ": "Martinique",
	"MR": "Mauritania",
	"MS": "Montserrat",
	"MT": "Malta",
	"MU": "Mauritius",
	"MV": "Maldives",
	"MW": "Malawi",
	"MX": "Mexico",
	"MY": "Malaysia",
	"MZ": "Mozambique",
	"NA": "Namibia",
	"NC": "New Caledonia",
	"NE": "Niger",
	"NF": "Norfolk Island",
	"NG": "Nigeria",
	"NI": "Nicaragua",
	"NL": "Netherlands",
	"NO": "Norway",
	"NP": "Nepal",
	"NR": "Nauru",
	"NU": "Niue",
	"NZ": "New Zealand",
	"OM": "Oman",
	"PA": "Panama",
	"PE": "Peru",
	"PF": "French Polynesia",
	"PG": "Papua New Guinea",
	"PH": "Philippines",
	"PK": "Pakistan",
	"PL": "Poland",
	"PM": "St Pierre & Miquelon",
	"PN": "Pitcairn",
	"PR": "Puerto Rico",
	"PS": "Palestine",
	"PT": "Portugal",
	"PW": "Palau",
	"PY": "Paraguay",
	"QA": "Qatar",
	"RE": "RÃ©union",
	"RO": "Romania",
	"RS": "Serbia",
	"RU": "Russia",
	"RW": "Rwanda",
	"SA": "Saudi Arabia",
	"SB": "Solomon Islands",
	"SC": "Seychelles",
	"SD": "Sudan",
	"SE": "Sweden",
	"SG": "Singapore",
	"SH": "St Helena",
	"SI": "Slovenia",
	"SJ": "Svalbard & Jan Mayen",
	"SK": "Slovakia",
	"SL": "Sierra Leone",
	"SM": "San Marino",
	"SN": "Senegal",
	"SO": "Somalia",
	"SR": "Suriname",
	"SS": "South Sudan",
	"ST": "Sao Tome & Principe",
	"SV": "El Salvador",
	"SX": "St Maarten (Dutch)",
	"SY": "Syria",
	"SZ": "Eswatini (Swaziland)",
	"TC": "Turks & Caicos Is",
	"TD": "Chad",
	"TF": "French Southern & Antarctic Lands",
	"TG": "Togo",
	"TH": "Thailand",
	"TJ": "Tajikistan",
	"TK": "Tokelau",
	"TL": "East Timor",
	"TM": "Turkmenistan",
	"TN": "Tunisia",
	"TO": "Tonga",
	"TR": "Turkey",
	"TT": "Trinidad & Tobago",
	"TV": "Tuvalu",
	"TW": "Taiwan",
	"TZ": "Tanzania",
	"UA": "Ukraine",
	"UG": "Uganda",
	"UM": "US minor outlying islands",
	"US": "United States",
	"UY": "Uruguay",
	"UZ": "Uzbekistan",
	"VA": "Vatican City",
	"VC": "St Vincent",
	"VE": "Venezuela",
	"VG": "Virgin Islands (UK)",
	"VI": "Virgin Islands (US)",
	"VN": "Vietnam",
	"VU": "Vanuatu",
	"WF": "Wallis & Futuna",
	"WS": "Samoa (western)",
	"YE": "Yemen",
	"YT": "Mayotte",
	"ZA": "South Africa",
	"ZM": "Zambia",
	"ZW": "Zimbabwe"
}

function PrayTimes(method) {
	const timeNames = {
			imsak: "Imsak",
			fajr: "Fajr",
			sunrise: "Sunrise",
			dhuhr: "Dhuhr",
			asr: "Asr",
			sunset: "Sunset",
			maghrib: "Maghrib",
			isha: "Isha",
			midnight: "Midnight",
		},
		methods = {
			MWL: {
				name: "Muslim World League",
				params: {
					fajr: 18,
					isha: 17
				},
			},
			ISNA: {
				name: "Islamic Society of North America (ISNA)",
				params: {
					fajr: 15,
					isha: 15
				},
			},
			Egypt: {
				name: "Egyptian General Authority of Survey",
				params: {
					fajr: 19.5,
					isha: 17.5
				},
			},
			Makkah: {
				name: "Umm Al-Qura University, Makkah",
				params: {
					fajr: 18.5,
					isha: "90 min"
				},
			},
			Karachi: {
				name: "University of Islamic Sciences, Karachi",
				params: {
					fajr: 18,
					isha: 18
				},
			},
			Tehran: {
				name: "Institute of Geophysics, University of Tehran",
				params: {
					fajr: 17.7,
					isha: 14,
					maghrib: 4.5,
					midnight: "Jafari",
				},
			},
			Jafari: {
				name: "Leva Institute, Qum",
				params: {
					fajr: 16,
					isha: 14,
					maghrib: 4,
					midnight: "Jafari"
				},
			},
		},
		defaultParams = {
			maghrib: "0 min",
			midnight: "Standard",
		};
	var calcMethod = "MWL";
	var setting = {
			imsak: "10 min",
			dhuhr: "0 min",
			asr: "Standard",
			highLats: "NightMiddle",
		},
		timeFormat = "24h",
		timeSuffixes = ["am", "pm"],
		invalidTime = "-----",
		numIterations = 1,
		offset = {};
	var lat, lng, timeZone, timestamp, jDate;
	var globals = {};
	var defParams = defaultParams;
	for (var i in methods) {
		var params = methods[i].params;
		for (var j in defParams) {
			if (typeof params[j] == "undefined") {
				params[j] = defParams[j];
			}
		}
	}
	calcMethod = methods[method] ? method : calcMethod;
	var params = methods[calcMethod].params;
	for (var id in params) {
		setting[id] = params[id];
	}
	for (var i in timeNames) {
		offset[i] = 0;
	}
	return {
		setMethod: function(method) {
			if (methods[method]) {
				this.adjust(methods[method].params);
				calcMethod = method;
			}
		},
		adjust: function(params) {
			for (var id in params) {
				setting[id] = params[id];
			}
		},
		tune: function(timeOffsets) {
			for (var i in timeOffsets) {
				offset[i] = timeOffsets[i];
			}
		},
		getMethod: () => calcMethod,
		getSetting: () => setting,
		getOffsets: () => offset,
		getDefaults: () => methods,
		getTimes: function(params) {
			var {
				latitude,
				longitude,
				date,
				timezone,
				dst,
				format
			} = params;
			date = date || new Date();
			lat = +latitude;
			lng = +longitude;
			timeFormat = format || timeFormat;
			if (date.constructor === Date) date.setHours(0);
			if (date.constructor === Array)
				date = Date.UTC(date[0], date[1] - 1, date[2]);
			date = date.constructor === Number ? new Date(date) : date;
			timestamp = date.getTime();
			if (typeof timezone == "undefined" || timezone == "auto")
				timezone = this.getTimezone(date) / 60;
			else dst = dst || 0;
			if (typeof dst == "undefined" || dst == "auto")
				dst = this.getDst(date);
			timeZone = +timezone + (+dst ? 1 : 0);
			jDate = this.julian(timestamp) - lng / 360;
			return this.computeTimes();
		},
		getFormattedTime: function(time, format, suffixes) {
			if (isNaN(time)) return invalidTime;
			format = format.toLowerCase();
			if (format == "float") return time;
			if (format == "timestamp")
				return timestamp + Math.floor(time * 3600 * 1000);
			suffixes = suffixes || timeSuffixes;
			time = DMath.fixHour(time + 0.5 / 60);
			var hours = Math.floor(time);
			var minutes = Math.floor((time - hours) * 60);
			var suffix = format == "12h" ? suffixes[hours < 12 ? 0 : 1] : "";
			var hour = format == "24h" ? this.twoDigitsFormat(hours) : ((hours + 12 - 1) % 12) + 1;
			return (hour + ":" + this.twoDigitsFormat(minutes) + (suffix ? " " + suffix : ""));
		},
		midDay: function(time) {
			var eqt = this.sunPosition(jDate + time).equation;
			var noon = DMath.fixHour(12 - eqt);
			return noon;
		},
		sunAngleTime: function(angle, time, direction) {
			var decl = this.sunPosition(jDate + time).declination;
			var noon = this.midDay(time);
			var t = DMath.arccos((-DMath.sin(angle) - DMath.sin(decl) * DMath.sin(lat)) / (DMath.cos(decl) * DMath.cos(lat))) / 15;
			return noon + (direction == "ccw" ? -t : t);
		},
		asrTime: function(factor, time) {
			var decl = this.sunPosition(jDate + time).declination;
			var angle = -DMath.arccot(factor + DMath.tan(Math.abs(lat - decl)));
			return this.sunAngleTime(angle, time);
		},
		sunPosition: function(jd) {
			var D = jd - 2451545.0;
			var g = DMath.fixAngle(357.529 + 0.98560028 * D);
			var q = DMath.fixAngle(280.459 + 0.98564736 * D);
			var L = DMath.fixAngle(q + 1.915 * DMath.sin(g) + 0.02 * DMath.sin(2 * g));
			var R = 1.00014 - 0.01671 * DMath.cos(g) - 0.00014 * DMath.cos(2 * g);
			var e = 23.439 - 0.00000036 * D;
			var RA = DMath.arctan2(DMath.cos(e) * DMath.sin(L), DMath.cos(L)) / 15;
			var eqt = q / 15 - DMath.fixHour(RA);
			var decl = DMath.arcsin(DMath.sin(e) * DMath.sin(L));
			return {
				declination: decl,
				equation: eqt
			};
		},
		julian: (timestap) => timestap / 86400000.0 + 2440587.5,
		computePrayerTimes: function(times) {
			times = this.dayPortion(times);
			var params = setting;
			var imsak = this.sunAngleTime(this.value(params.imsak), times.imsak, "ccw");
			var fajr = this.sunAngleTime(this.value(params.fajr), times.fajr, "ccw");
			var sunrise = this.sunAngleTime(this.riseSetAngle(), times.sunrise, "ccw");
			var dhuhr = this.midDay(times.dhuhr);
			var asr = this.asrTime(this.asrFactor(params.asr), times.asr);
			var sunset = this.sunAngleTime(this.riseSetAngle(), times.sunset);
			var maghrib = this.sunAngleTime(this.value(params.maghrib), times.maghrib);
			var isha = this.sunAngleTime(this.value(params.isha), times.isha);
			return {
				imsak: imsak,
				fajr: fajr,
				sunrise: sunrise,
				dhuhr: dhuhr,
				asr: asr,
				sunset: sunset,
				maghrib: maghrib,
				isha: isha,
			};
		},
		computeTimes: function() {
			var times = {
				imsak: 5,
				fajr: 5,
				sunrise: 6,
				dhuhr: 12,
				asr: 13,
				sunset: 18,
				maghrib: 18,
				isha: 18,
			};
			for (var i = 1; i <= numIterations; i++)
				times = this.computePrayerTimes(times);
			times = this.adjustTimes(times);
			times.midnight = setting.midnight == "Jafari" ? times.sunset + this.timeDiff(times.sunset, times.fajr + 24) / 2 : times.sunset + this.timeDiff(times.sunset, times.sunrise + 24) / 2;
			times = this.tuneTimes(times);
			return this.modifyFormats(times);
		},
		adjustTimes: function(times) {
			var params = setting;
			for (var i in times) times[i] += timeZone - lng / 15;
			if (params.highLats != "None") times = this.adjustHighLats(times);
			if (this.isMin(params.imsak))
				times.imsak = times.fajr - this.value(params.imsak) / 60;
			if (this.isMin(params.maghrib))
				times.maghrib = times.sunset + this.value(params.maghrib) / 60;
			if (this.isMin(params.isha))
				times.isha = times.maghrib + this.value(params.isha) / 60;
			times.dhuhr += this.value(params.dhuhr) / 60;
			return times;
		},
		asrFactor: function(asrParam) {
			var factor = {
				Standard: 1,
				Hanafi: 2
			} [asrParam];
			return factor || this.value(asrParam);
		},
		riseSetAngle: function() {
			return 0.833;
		},
		tuneTimes: function(times) {
			for (var i in times) times[i] += offset[i] / 60;
			return times;
		},
		modifyFormats: function(times) {
			for (var i in times)
				times[i] = this.getFormattedTime(times[i], timeFormat);
			return times;
		},
		adjustHighLats: function(times) {
			var params = setting;
			var nightTime = this.timeDiff(times.sunset, times.sunrise);
			times.imsak = this.adjustHLTime(times.imsak, times.sunrise, this.value(params.imsak), nightTime, "ccw");
			times.fajr = this.adjustHLTime(times.fajr, times.sunrise, this.value(params.fajr), nightTime, "ccw");
			times.isha = this.adjustHLTime(times.isha, times.sunset, this.value(params.isha), nightTime);
			times.maghrib = this.adjustHLTime(times.maghrib, times.sunset, this.value(params.maghrib), nightTime);
			return times;
		},
		adjustHLTime: function(time, base, angle, night, direction) {
			var portion = this.nightPortion(angle, night);
			var timeDiff = direction == "ccw" ? this.timeDiff(time, base) : this.timeDiff(base, time);
			if (isNaN(time) || timeDiff > portion)
				time = base + (direction == "ccw" ? -portion : portion);
			return time;
		},
		nightPortion: function(angle, night) {
			var method = setting.highLats;
			var portion = 1 / 2;
			if (method == "AngleBased") portion = (1 / 60) * angle;
			if (method == "OneSeventh") portion = 1 / 7;
			return portion * night;
		},
		dayPortion: function(times) {
			for (var i in times) times[i] /= 24;
			return times;
		},
		getTimezone: function(date) {
			var year = date.getFullYear();
			var Jan = new Date(year, 0, 1);
			var Jul = new Date(year, 6, 1);
			return Math.min(-Jan.getTimezoneOffset(), -Jul.getTimezoneOffset());
		},
		getDst: function(date) {
			return +(this.getTimezone(date) != -date.getTimezoneOffset());
		},
		value: (str) => +(str + "").split(/[^0-9.+-]/)[0],
		isMin: (arg) => (arg + "").indexOf("min") != -1,
		timeDiff: (time1, time2) => DMath.fixHour(time2 - time1),
		twoDigitsFormat: (num) => (num < 10 ? "0" + num : num),
	};
}
var DMath = {
	sin: (d) => Math.sin(DMath.dtr(d)),
	cos: (d) => Math.cos(DMath.dtr(d)),
	tan: (d) => Math.tan(DMath.dtr(d)),
	arcsin: (d) => DMath.rtd(Math.asin(d)),
	arccos: (d) => DMath.rtd(Math.acos(d)),
	arctan: (d) => DMath.rtd(Math.atan(d)),
	arccot: (x) => DMath.rtd(Math.atan(1 / x)),
	arctan2: (y, x) => DMath.rtd(Math.atan2(y, x)),
	dtr: (d) => (d * Math.PI) / 180.0,
	rtd: (r) => (r * 180.0) / Math.PI,
	fixAngle: (a) => DMath.fix(a, 360),
	fixHour: (a) => DMath.fix(a, 24),
	fix: function(a, b) {
		a = a - b * Math.floor(a / b);
		return a < 0 ? a + b : a;
	},
};
var prayTimes = new PrayTimes();
if (typeof module !== "undefined") {
	module.exports = {
		PrayTimes,
		prayTimes,
	};
}
var DEFAULTS = {
	borderColor: "#8ebbc4",
	playedColor: "#ffffff",
	backgroundColor: "rgba(142,187,196,.4)",
	iconColor: "#fff",
	borderWidth: 2,
	size: 48,
	className: "circle-audio-player",
};
var pi = Math.PI;
var doublePi = pi * 2;
var arcOffset = -pi / 2;
var animTime = 200;
var loaderTime = 1800;
var CircleAudioPlayer = function(options) {
	options = options || {};
	for (var property in DEFAULTS) {
		this[property] = options[property] || DEFAULTS[property];
	}
	this._canvas = document.createElement("canvas");
	this._canvas.setAttribute("class", this.className + " is-loading");
	this._canvas.addEventListener("mousedown", function() {
		if (this.playing) {
			this.pause();
		} else {
			this.play();
		}
	}.bind(this));
	this._ctx = this._canvas.getContext("2d");
	this.setAudio(options.audio);
	this.setSize(this.size);
	(function cAPAnimationLoop(now) {
		if (this.animating) {
			this._updateAnimations(now);
		}
		if (this._forceDraw || this.playing || this.animating || this.loading) {
			this._draw();
			this._forceDraw = false;
		}
		requestAnimationFrame(cAPAnimationLoop.bind(this));
	}.call(this, new Date().getTime()));
};
CircleAudioPlayer.prototype = {
	_animateIcon: function(to, from) {
		this._animationProps = {
			animStart: null,
			from: from,
			to: to,
		};
		if (from) {
			this.animating = true;
		} else {
			this._animationProps.current = this._icons[to].slice();
			this.draw();
		}
	},
	_updateAnimations: function(now) {
		this._animationProps.animStart = this._animationProps.animStart || now;
		var deltaTime = now - this._animationProps.animStart;
		var perc = 1 - Math.cos(((deltaTime / animTime) * pi) / 2);
		if (deltaTime >= animTime) {
			this.animating = false;
			perc = 1;
			this._animationProps.current = this._icons[this._animationProps.to].slice();
			this.draw();
		} else {
			var from = this._icons[this._animationProps.from];
			var current = [];
			for (var i = 0; i < from.length; i++) {
				current.push([]);
				for (var j = 0; j < from[i].length; j++) {
					current[i].push([]);
					var to = this._icons[this._animationProps.to][i][j];
					current[i][j][0] = from[i][j][0] + (to[0] - from[i][j][0]) * perc;
					current[i][j][1] = from[i][j][1] + (to[1] - from[i][j][1]) * perc;
				}
			}
			this._animationProps.current = current;
		}
	},
	_draw: function(progress) {
		if (isNaN(progress)) {
			progress = this.audio.currentTime / this.audio.duration || 0;
		}
		this._ctx.clearRect(0, 0, this.size, this.size);
		this._ctx.beginPath();
		this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - this.borderWidth / 2, 0, doublePi);
		this._ctx.closePath();
		this._ctx.fillStyle = this.backgroundColor;
		this._ctx.fill();
		this._ctx.lineWidth = this.borderWidth;
		this._ctx.strokeStyle = this.borderColor;
		this._ctx.stroke();
		if (progress > 0) {
			this._ctx.beginPath();
			this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - this.borderWidth / 2, arcOffset, arcOffset + doublePi * progress);
			this._ctx.strokeStyle = this.playedColor;
			this._ctx.stroke();
		}
		this._ctx.fillStyle = this.iconColor;
		if (this.loading) {
			var loaderOffset = -Math.cos(((new Date().getTime() % loaderTime) / loaderTime) * pi) * doublePi - pi / 3 - pi / 2;
			this._ctx.beginPath();
			this._ctx.arc(this._halfSize, this._halfSize, this._halfSize / 3, loaderOffset, loaderOffset + (pi / 3) * 2);
			this._ctx.strokeStyle = this.iconColor;
			this._ctx.stroke();
		} else {
			this._ctx.beginPath();
			var icon = (this._animationProps && this._animationProps.current) || this._icons.play;
			for (var i = 0; i < icon.length; i++) {
				this._ctx.moveTo(icon[i][0][0], icon[i][0][1]);
				for (var j = 1; j < icon[i].length; j++) {
					this._ctx.lineTo(icon[i][j][0], icon[i][j][1]);
				}
			}
			this._ctx.fill();
			this._ctx.strokeStyle = this.iconColor;
			this._ctx.lineWidth = 2;
			this._ctx.lineJoin = "miter";
			this._ctx.stroke();
		}
	},
	_setState: function(state) {
		this.playing = false;
		this.loading = false;
		if (state === "playing") {
			this.playing = true;
			this._animateIcon("pause", "play");
		} else if (state === "loading") {
			this.loading = true;
		} else if (this.state !== "loading") {
			this._animateIcon("play", "pause");
		} else {
			this._animateIcon("play", null);
		}
		this.state = state;
		this._canvas.setAttribute("class", this.className + " is-" + state);
		this.draw();
	},
	draw: function() {
		this._forceDraw = true;
	},
	setSize: function(size) {
		this.size = size;
		this._halfSize = size / 2;
		this._canvas.width = size;
		this._canvas.height = size;
		var iconSize = this.size / 2;
		var pauseGap = iconSize / 10;
		var playLeft = Math.cos((pi / 3) * 2) * (iconSize / 2) + this._halfSize;
		var playRight = iconSize / 2 + this._halfSize;
		var playHalf = (playRight - playLeft) / 2 + playLeft;
		var top = this._halfSize - Math.sin((pi / 3) * 2) * (iconSize / 2);
		var bottom = this.size - top;
		var pauseLeft = this._halfSize - iconSize / 3;
		var pauseRight = this.size - pauseLeft;
		this._icons = {
			play: [
				[
					[playLeft, top],
					[playHalf, (this._halfSize - top) / 2 + top],
					[playHalf, (this._halfSize - top) / 2 + this._halfSize],
					[playLeft, bottom],
				],
				[
					[playHalf, (this._halfSize - top) / 2 + top],
					[playRight, this._halfSize],
					[playRight, this._halfSize],
					[playHalf, (this._halfSize - top) / 2 + this._halfSize],
				],
			],
			pause: [
				[
					[pauseLeft, top + pauseGap],
					[this._halfSize - pauseGap, top + pauseGap],
					[this._halfSize - pauseGap, bottom - pauseGap],
					[pauseLeft, bottom - pauseGap],
				],
				[
					[this._halfSize + pauseGap, top + pauseGap],
					[pauseRight, top + pauseGap],
					[pauseRight, bottom - pauseGap],
					[this._halfSize + pauseGap, bottom - pauseGap],
				],
			],
		};
		if (this._animationProps && this._animationProps.current) {
			this._animateIcon(this._animationProps.to);
		}
		if (!this.playing) {
			this.draw();
		}
	},
	setAudio: function(audioUrl) {
		this.audio = new Audio(audioUrl);
		this.audio.load();
		this._setState("loading");
		this.audio.addEventListener("canplaythrough", function() {
			this._setState("paused");
		}.bind(this));
		this.audio.addEventListener("play", function() {
			this._setState("playing");
		}.bind(this));
		this.audio.addEventListener("pause", function() {
			if (this.audio.currentTime === this.audio.duration) {
				this.audio.currentTime = 0;
			}
			this._setState("paused");
		}.bind(this));
	},
	appendTo: function(element) {
		element.appendChild(this._canvas);
	},
	play: function() {
		this.audio.play();
	},
	pause: function() {
		this.audio.pause();
	},
};
! function() {
	var e = function(e) {
		"use strict";

		function t(e) {
			if (e.paused || e.ended || g) return !1;
			try {
				f.clearRect(0, 0, s, l), f.drawImage(e, 0, 0, s, l)
			} catch (o) {}
			p = setTimeout(function() {
				t(e)
			}, S.duration), O.setIcon(h)
		}

		function o(e) {
			var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			e = e.replace(t, function(e, t, o, n) {
				return t + t + o + o + n + n
			});
			var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
			return o ? {
				r: parseInt(o[1], 16),
				g: parseInt(o[2], 16),
				b: parseInt(o[3], 16)
			} : !1
		}

		function n(e, t) {
			var o, n = {};
			for (o in e) n[o] = e[o];
			for (o in t) n[o] = t[o];
			return n
		}

		function r() {
			return b.hidden || b.msHidden || b.webkitHidden || b.mozHidden
		}
		e = e ? e : {};
		var i, a, l, s, h, f, c, d, u, y, w, g, x, m, p, b, v = {
			bgColor: "#d00",
			textColor: "#fff",
			fontFamily: "sans-serif",
			fontStyle: "bold",
			type: "circle",
			position: "down",
			animation: "slide",
			elementId: !1,
			dataUrl: !1,
			win: window
		};
		x = {}, x.ff = "undefined" != typeof InstallTrigger, x.chrome = !!window.chrome, x.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, x.ie = /*@cc_on!@*/ !1, x.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, x.supported = x.chrome || x.ff || x.opera;
		var C = [];
		w = function() {}, d = g = !1;
		var E = function() {
				i = n(v, e), i.bgColor = o(i.bgColor), i.textColor = o(i.textColor), i.position = i.position.toLowerCase(), i.animation = S.types["" + i.animation] ? i.animation : v.animation, b = i.win.document;
				var t = i.position.indexOf("up") > -1,
					r = i.position.indexOf("left") > -1;
				if (t || r)
					for (var d = 0; d < S.types["" + i.animation].length; d++) {
						var u = S.types["" + i.animation][d];
						t && (u.y = u.y < .6 ? u.y - .4 : u.y - 2 * u.y + (1 - u.w)), r && (u.x = u.x < .6 ? u.x - .4 : u.x - 2 * u.x + (1 - u.h)), S.types["" + i.animation][d] = u
					}
				i.type = A["" + i.type] ? i.type : v.type, a = O.getIcon(), h = document.createElement("canvas"), c = document.createElement("img"), a.hasAttribute("href") ? (c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
					l = c.height > 0 ? c.height : 32, s = c.width > 0 ? c.width : 32, h.height = l, h.width = s, f = h.getContext("2d"), M.ready()
				}, c.setAttribute("src", a.getAttribute("href"))) : (c.onload = function() {
					l = 32, s = 32, c.height = l, c.width = s, h.height = l, h.width = s, f = h.getContext("2d"), M.ready()
				}, c.setAttribute("src", ""))
			},
			M = {};
		M.ready = function() {
			d = !0, M.reset(), w()
		}, M.reset = function() {
			d && (C = [], u = !1, y = !1, f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), O.setIcon(h), window.clearTimeout(m), window.clearTimeout(p))
		}, M.start = function() {
			if (d && !y) {
				var e = function() {
					u = C[0], y = !1, C.length > 0 && (C.shift(), M.start())
				};
				if (C.length > 0) {
					y = !0;
					var t = function() {
						["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
							e in C[0].options && (i[e] = C[0].options[e])
						}), S.run(C[0].options, function() {
							e()
						}, !1)
					};
					u ? S.run(u.options, function() {
						t()
					}, !0) : t()
				}
			}
		};
		var A = {},
			I = function(e) {
				return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = s * e.x, e.y = l * e.y, e.w = s * e.w, e.h = l * e.h, e.len = ("" + e.n).length, e
			};
		A.circle = function(e) {
			e = I(e);
			var t = !1;
			2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, t = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, t = !0), f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), f.beginPath(), f.font = i.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + i.fontFamily, f.textAlign = "center", t ? (f.moveTo(e.x + e.w / 2, e.y), f.lineTo(e.x + e.w - e.h / 2, e.y), f.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), f.lineTo(e.x + e.w, e.y + e.h - e.h / 2), f.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), f.lineTo(e.x + e.h / 2, e.y + e.h), f.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), f.lineTo(e.x, e.y + e.h / 2), f.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : f.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), f.fillStyle = "rgba(" + i.bgColor.r + "," + i.bgColor.g + "," + i.bgColor.b + "," + e.o + ")", f.fill(), f.closePath(), f.beginPath(), f.stroke(), f.fillStyle = "rgba(" + i.textColor.r + "," + i.textColor.g + "," + i.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? f.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : f.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), f.closePath()
		}, A.rectangle = function(e) {
			e = I(e);
			var t = !1;
			2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, t = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, t = !0), f.clearRect(0, 0, s, l), f.drawImage(c, 0, 0, s, l), f.beginPath(), f.font = i.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + i.fontFamily, f.textAlign = "center", f.fillStyle = "rgba(" + i.bgColor.r + "," + i.bgColor.g + "," + i.bgColor.b + "," + e.o + ")", f.fillRect(e.x, e.y, e.w, e.h), f.fillStyle = "rgba(" + i.textColor.r + "," + i.textColor.g + "," + i.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? f.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : f.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), f.closePath()
		};
		var T = function(e, t) {
				t = ("string" == typeof t ? {
					animation: t
				} : t) || {}, w = function() {
					try {
						if ("number" == typeof e ? e > 0 : "" !== e) {
							var n = {
								type: "badge",
								options: {
									n: e
								}
							};
							if ("animation" in t && S.types["" + t.animation] && (n.options.animation = "" + t.animation), "type" in t && A["" + t.type] && (n.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
									e in t && (n.options[e] = o(t[e]))
								}), ["fontStyle", "fontFamily"].forEach(function(e) {
									e in t && (n.options[e] = t[e])
								}), C.push(n), C.length > 100) throw new Error("Too many badges requests in queue.");
							M.start()
						} else M.reset()
					} catch (r) {
						throw new Error("Error setting badge. Message: " + r.message)
					}
				}, d && w()
			},
			U = function(e) {
				w = function() {
					try {
						var t = e.width,
							o = e.height,
							n = document.createElement("img"),
							r = o / l > t / s ? t / s : o / l;
						n.setAttribute("crossOrigin", "anonymous"), n.onload = function() {
							f.clearRect(0, 0, s, l), f.drawImage(n, 0, 0, s, l), O.setIcon(h)
						}, n.setAttribute("src", e.getAttribute("src")), n.height = o / r, n.width = t / r
					} catch (i) {
						throw new Error("Error setting image. Message: " + i.message)
					}
				}, d && w()
			},
			R = function(e) {
				w = function() {
					try {
						if ("stop" === e) return g = !0, M.reset(), void(g = !1);
						e.addEventListener("play", function() {
							t(this)
						}, !1)
					} catch (o) {
						throw new Error("Error setting video. Message: " + o.message)
					}
				}, d && w()
			},
			L = function(e) {
				if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
						return e
					}), x.supported) {
					var o = !1;
					navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, w = function() {
						try {
							if ("stop" === e) return g = !0, M.reset(), void(g = !1);
							o = document.createElement("video"), o.width = s, o.height = l, navigator.getUserMedia({
								video: !0,
								audio: !1
							}, function(e) {
								o.src = URL.createObjectURL(e), o.play(), t(o)
							}, function() {})
						} catch (n) {
							throw new Error("Error setting webcam. Message: " + n.message)
						}
					}, d && w()
				}
			},
			O = {};
		O.getIcon = function() {
			var e = !1,
				t = function() {
					for (var e = b.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, o = t - 1; o >= 0; o--)
						if (/(^|\s)icon(\s|$)/i.test(e[o].getAttribute("rel"))) return e[o];
					return !1
				};
			return i.element ? e = i.element : i.elementId ? (e = b.getElementById(i.elementId), e.setAttribute("href", e.getAttribute("src"))) : (e = t(), e === !1 && (e = b.createElement("link"), e.setAttribute("rel", "icon"), b.getElementsByTagName("head")[0].appendChild(e))), e.setAttribute("type", "image/png"), e
		}, O.setIcon = function(e) {
			var t = e.toDataURL("image/png");
			if (i.dataUrl && i.dataUrl(t), i.element) i.element.setAttribute("href", t), i.element.setAttribute("src", t);
			else if (i.elementId) {
				var o = b.getElementById(i.elementId);
				o.setAttribute("href", t), o.setAttribute("src", t)
			} else if (x.ff || x.opera) {
				var n = a;
				a = b.createElement("link"), x.opera && a.setAttribute("rel", "icon"), a.setAttribute("rel", "icon"), a.setAttribute("type", "image/png"), b.getElementsByTagName("head")[0].appendChild(a), a.setAttribute("href", t), n.parentNode && n.parentNode.removeChild(n)
			} else a.setAttribute("href", t)
		};
		var S = {};
		return S.duration = 40, S.types = {}, S.types.fade = [{
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 0
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .1
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .2
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .3
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .4
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .5
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .6
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .7
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .8
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: .9
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 1
		}], S.types.none = [{
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 1
		}], S.types.pop = [{
			x: 1,
			y: 1,
			w: 0,
			h: 0,
			o: 1
		}, {
			x: .9,
			y: .9,
			w: .1,
			h: .1,
			o: 1
		}, {
			x: .8,
			y: .8,
			w: .2,
			h: .2,
			o: 1
		}, {
			x: .7,
			y: .7,
			w: .3,
			h: .3,
			o: 1
		}, {
			x: .6,
			y: .6,
			w: .4,
			h: .4,
			o: 1
		}, {
			x: .5,
			y: .5,
			w: .5,
			h: .5,
			o: 1
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 1
		}], S.types.popFade = [{
			x: .75,
			y: .75,
			w: 0,
			h: 0,
			o: 0
		}, {
			x: .65,
			y: .65,
			w: .1,
			h: .1,
			o: .2
		}, {
			x: .6,
			y: .6,
			w: .2,
			h: .2,
			o: .4
		}, {
			x: .55,
			y: .55,
			w: .3,
			h: .3,
			o: .6
		}, {
			x: .5,
			y: .5,
			w: .4,
			h: .4,
			o: .8
		}, {
			x: .45,
			y: .45,
			w: .5,
			h: .5,
			o: .9
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 1
		}], S.types.slide = [{
			x: .4,
			y: 1,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .9,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .9,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .8,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .7,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .6,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .5,
			w: .6,
			h: .6,
			o: 1
		}, {
			x: .4,
			y: .4,
			w: .6,
			h: .6,
			o: 1
		}], S.run = function(e, t, o, a) {
			var l = S.types[r() ? "none" : i.animation];
			return a = o === !0 ? "undefined" != typeof a ? a : l.length - 1 : "undefined" != typeof a ? a : 0, t = t ? t : function() {}, a < l.length && a >= 0 ? (A[i.type](n(e, l[a])), m = setTimeout(function() {
				o ? a -= 1 : a += 1, S.run(e, t, o, a)
			}, S.duration), O.setIcon(h), void 0) : void t()
		}, E(), {
			badge: T,
			video: R,
			image: U,
			webcam: L,
			reset: M.reset,
			browser: {
				supported: x.supported
			}
		}
	};
	"undefined" != typeof define && define.amd ? define([], function() {
		return e
	}) : "undefined" != typeof module && module.exports ? module.exports = e : this.Favico = e
}();
jQuery.cookie = function(key, value, options) {
	if (arguments.length > 1 && (value === null || typeof value !== "object")) {
		options = jQuery.extend({}, options);
		if (value === null) {
			options.expires = -1;
		}
		if (typeof options.expires === 'number') {
			var days = options.expires,
				t = options.expires = new Date();
			t.setDate(t.getDate() + days);
		}
		return (document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
	}
	options = value || {};
	var result, decode = options.raw ? function(s) {
		return s;
	} : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
(function($) {
	$.fn.stickyTabs = function(options) {
		var context = this;
		var settings = $.extend({
			getHashCallback: function(hash, btn) {
				return hash;
			},
			selectorAttribute: "href",
			backToTop: false,
			initialTab: "#home",
		}, options);
		var showTabFromHash = function() {
			var hash = window.location.hash || settings.initialTab;
			var selector = 'a[href="' + hash + '"]';
			if ($(selector, context).length < 1)
				selector = 'a[href="' + settings.initialTab + '"]';
			$(selector, context).tab("show");
			setTimeout(backToTop, 1);
		};
		var changeHash = function(hash) {
			if (history && history.pushState) {
				history.pushState(null, null, window.location.pathname + window.location.search + "#" + hash);
			} else {
				scrollV = document.body.scrollTop;
				scrollH = document.body.scrollLeft;
				window.location.hash = hash;
				document.body.scrollTop = scrollV;
				document.body.scrollLeft = scrollH;
			}
		};
		var backToTop = function() {
			if (settings.backToTop === true) {
				window.scrollTo(0, 0);
			}
		};
		showTabFromHash();
		$(window).on("hashchange", showTabFromHash);
		$("a", context).on("click", function(e) {
			var hash = this.href.split("#")[1];
			if (typeof hash != "undefined" && hash != "") {
				var adjustedhash = settings.getHashCallback(hash, this);
				changeHash(adjustedhash);
				setTimeout(backToTop, 1);
			}
		});
		return this;
	};
})(jQuery);
const Times = timeList.map(({
		name
	}) => name),
	Prayers = prayerTimeList.map(({
		name
	}) => name),
	Abbr = timeList.map(({
		abbr
	}) => abbr),
	NumTimes = Times.length;
const OneMinute = 60000,
	DisplayPeriod = 2 * OneMinute,
	NotifsGap = 2 * OneMinute,
	BadgeCheckPeriod = 5000,
	DebugMode = true,
	Version = "2.0",
	isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const noop = () => {};
const log = DebugMode ? console.log : noop;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const getTimes = () => calculatedTimes;
var DateTime = luxon.DateTime,
	LocalTimezone = DateTime.local().zoneName,
	LocalOffset = DateTime.local().offset;
var player = null,
	calculatedTimes, lastUpdate;

function setDefaultZone(zoneName) {
	if (local().setZone(zoneName).isValid) {
		luxon.Settings.defaultZoneName = zoneName;
	}
}

function updateTimezone() {
	setDefaultZone(getTimezone());
}

function getTimezone() {
	return storage.get("location.timezone") == "manual" ? storage.get("location.timezone.manual") : LocalTimezone;
}

function localInZone(timestamp) {
	var local = timestamp ? DateTime.fromMillis(timestamp) : DateTime.local();
	var zoneName = getTimezone();
	if (luxon.IANAZone.isValidZone(zoneName)) local = local.setZone(zoneName);
	return local;
}

function local(timestamp) {
	return timestamp ? DateTime.fromMillis(timestamp) : DateTime.local();
}

function localTime() {
	return local().plus({
		hours: (LocalOffset - local().offset) / 60
	}).ts;
}

function formattedZoneName(zoneName) {
	return zoneName.replace(/\//g, " - ").replace(/_/g, " ");
}

function getTimezoneList() {
	var zones = Object.keys(timezoneData).sort();
	return zones.map((zone) => ({
		value: zone,
		desc: formattedZoneName(zone),
	}));
}

function closestZone(offset) {
	const dist = (p, q) => Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2);
	var mind = 1000,
		index = 0;
	var p = [35, offset / 4];
	for (i in timezoneData) {
		var x = timezoneData[i];
		var q = [x[1], x[2]];
		if (dist(p, q) < mind) {
			mind = dist(p, q);
			index = i;
		}
	}
	return index;
}

function adjustCalcSettings() {
	var method = storage.get("calculation.method");
	if (method == "Custom") prayTimes.adjust(getCustomParams());
	else prayTimes.setMethod(method);
	prayTimes.adjust({
		imsak: storage.get("calculation.settings").imsak + " min",
		dhuhr: storage.get("calculation.settings").dhuhr + " min",
		asr: storage.get("calculation.settings").asr,
		highLats: storage.get("calculation.settings").highLats,
	});
}

function getCustomParams() {
	var params = storage.get("calculation.params");
	return {
		fajr: params.fajr,
		maghrib: params.maghrib + (params.maghribUnit == "degrees" ? "" : " min"),
		isha: params.isha + (params.ishaUnit == "degrees" ? "" : " min"),
		midnight: params.midnight,
	};
}

function updatePrayerTimes() {
	if (locationNotSet()) return;
	var location = storage.get("location");
	var date = local().startOf("day").plus({
		days: -1
	});
	adjustCalcSettings();
	var times = [];
	for (var day = -1; day <= 1; day++) {
		var timeTable = prayTimes.getTimes({
			date: date.ts,
			latitude: location.lat,
			longitude: location.lng,
			timezone: date.offset / 60,
			format: "timestamp",
		});
		for (var i in Times) {
			var time = timeTable[Times[i]];
			times.push(getRoundedTime(time));
		}
		date = date.plus({
			days: 1
		});
	}
	calculatedTimes = times;
}

function updateTimesIfNeeded() {
	var today = local().day;
	if (lastUpdate != today) {
		updatePrayerTimes();
		lastUpdate = today;
	}
}

function getNextTime() {
	var now = localTime();
	var times = getTimes();
	var displayTimes = storage.get("display.times");
	for (var i in times) {
		var display = displayTimes[getTimeInfo(i).label];
		if (display && now <= times[i] + DisplayPeriod) break;
	}
	var timeLeft = times[i] - now;
	var minsLeft = Math.ceil(timeLeft / 60 / 1000);
	var label = getTimeInfo(i).label;
	return {
		label,
		timeLeft,
		minsLeft,
		index: i,
		time: times[i]
	};
}

function getTimeInfo(indx) {
	var i = indx % NumTimes;
	return {
		label: Times[i],
		name: labelName(Times[i])
	};
}

function getRoundedTime(timestamp) {
	return Math.round(timestamp / OneMinute) * OneMinute;
}

function isPrayerTime(label) {
	return Prayers.indexOf(label) != -1;
}

function formatDate(timestamp, day) {
	var dt = local(timestamp).setLocale("en-US");
	return day ? day + dt.toFormat(", MMM d, y") : dt.toFormat("EEEE, MMM d, y");
}

function formatTime(timestamp, format) {
	format = {
		"24h": "HH:mm",
		"12h": "h:mm a",
		"12hs": "h:mm",
	} [format];
	return local(timestamp).toFormat(format);
}

function formatCounter(time) {
	var seconds = time / 1000;
	var h = Math.floor(seconds / 3600);
	var m = Math.floor((seconds % 3600) / 60);
	var s = Math.floor(seconds % 60);
	return h > 0 ? `${h}:${twoDigits(m)}:${twoDigits(s)}` : `${m}:${twoDigits(s)}`;
}

function getTimeLeftString(minsLeft) {
	var mins = minsLeft % 60;
	var hours = Math.floor(minsLeft / 60);
	var minsTag = mins == 1 ? "minute" : "minutes";
	var hoursTag = hours == 1 ? "hour" : "hours";
	var str = "";
	if (hours > 0) str = `${hours} ${hoursTag}` + (mins > 0 ? " and " : "");
	if (mins > 0) str += `${mins} ${minsTag}`;
	return str;
}

function twoDigits(num) {
	var str = "0" + num;
	return str.substr(str.length - 2);
}

function labelName(label) {
	return capitalize(label);
}

function labelNameAbbr(label) {
	return Abbr[Times.indexOf(label)];
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function shortAddress(address) {
	var maxLen = 24;
	if (address.length <= maxLen) return address;
	var tokens = address.split(", ");
	var locality = tokens[0];
	var full = locality + (tokens.length > 1 ? ", " + tokens[tokens.length - 1] : "");
	return full.length > maxLen ? locality : full;
}

function getAddressPosition(address, onSuccess, onFail = noop) {
	address = address.replace(" ", "+");
	var url = "https://geocoder.api.here.com/6.2/geocode.json" + "?app_id=bGqzxuwO3peafwpIFxKN&app_code=0v3nZQepiPnUFv9Jl_uURg" + "&searchtext=" + address;
	$.getJSON(url, function(data, textStatus) {
		onSuccess(data);
	}).fail(onFail);
}

function getPositionAddress(position, onSuccess, onFail = noop) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	log("Address:", lat, lng);
	var url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json" + "?app_id=bGqzxuwO3peafwpIFxKN&app_code=0v3nZQepiPnUFv9Jl_uURg" + "&mode=retrieveAreas&prox=" + `${lat},${lng},250`;
	$.getJSON(url, function(data, textStatus) {
		onSuccess(data);
	}).fail(onFail);
}

function getCurrentPosition(onSuccess, onFail = noop) {
	if (!navigator.geolocation) onFail();
	else navigator.geolocation.getCurrentPosition(onSuccess, onFail);
}

function addLocationItem(data, itemNum, item = null) {
	if (!item) {
		var result = data.Response.View[0].Result[itemNum];
		item = {
			address: result.Location.Address.Label,
			lat: result.Location.DisplayPosition.Latitude,
			lng: result.Location.DisplayPosition.Longitude,
		};
	}
	var locations = storage.get("locations", []);
	locations.push(item);
	storage.set({
		locations: locations
	});
	setCurrentLocation(item.address);
}

function removeLocationItem(itemNum) {
	var locations = storage.get("locations");
	if (locations.length <= 1) return;
	var location = storage.get("location");
	var needsRelocate = locations[itemNum].address == location.address;
	locations.splice(itemNum, 1);
	if (needsRelocate) {
		if (locations.length) {
			var newIndex = Math.min(itemNum, locations.length - 1);
			setCurrentLocation(locations[newIndex].address);
		} else {
			storage.set({
				location: ""
			});
		}
	}
	storage.set({
		locations: locations
	});
}

function setCurrentLocation(address) {
	var locations = storage.get("locations");
	var item = 0;
	for (var i in locations) {
		if (locations[i].address == address) item = i;
	}
	storage.set({
		location: locations[item]
	});
}

function initOptions() {
	for (var i in preferences)
		if (storage.get(i) === undefined) {
			storage.set({
				[i]: preferences[i]
			});
		}
	if (!storage.get("location.timezone.manual"))
		storage.set({
			"location.timezone.manual": LocalTimezone
		});
}

function updateSetting(setting, updates) {
	var value = storage.get(setting);
	Object.assign(value, updates);
	storage.set({
		[setting]: value
	});
}

function initLocation() {
	if (!detectLocationByCookie()) {
		detectLocationByTimezone();
	}
}

function detectLocationByDevice() {
	getCurrentPosition(function(position) {
		getPositionAddress(position, function(data) {
			if (data.Response.View.length == 0) return;
			addLocationItem(data, 0);
			log("Location " + item.address + " automatically added.");
		});
	}, function(error) {
		log(error.message);
	});
}

function detectLocationByTimezone() {
	var zoneName = local().zoneName;
	if (!zoneName || !timezoneData[zoneName])
		zoneName = closestZone(local().offset);
	var chunks = zoneName.split("/");
	var zone = timezoneData[zoneName];
	if (zone) {
		var city = chunks[chunks.length - 1].replace("_", " "),
			countryCode = zone[0],
			country = countryNames[countryCode];
		var item = {
			address: city == country ? city : city + ", " + country,
			lat: zone[1],
			lng: zone[2],
		};
		addLocationItem({}, 0, item);
		initCalcMethod(countryCode);
		log("Location " + item.address + " automatically added.");
	}
}

function detectLocationByCookie() {
	if ($.cookie("ptaddress")) {
		var item = {
			address: $.cookie("ptaddress"),
			lat: $.cookie("ptlat"),
			lng: $.cookie("ptlon"),
		};
		addLocationItem({}, 0, item);
		log("Location " + item.address + " added from cookies.");
		const methods = ["Jafari", "Karachi", "ISNA", "MWL", "Makkah", "Egypt"];
		var method = methods[$.cookie("ptcalc")] || "MWL";
		storage.set({
			"calculation.method": method
		});
		return true;
	}
}

function initCalcMethod(countryCode) {
	if (!countryCode) return;
	var method = getDefaultMethod(countryCode);
	storage.set({
		"calculation.method": method
	});
	log(`Set default method for ${countryCode} to ${method}`);
}

function getDefaultMethod(countryCode) {
	var method = "MWL";
	for (var i in defaultMethods)
		if (defaultMethods[i].includes(countryCode)) method = i;
	return method;
}

function isLatestVersion() {
	return storage.get("installedVersion") == Version;
}

function locationNotSet() {
	return !storage.get("location");
}

function upgrade() {
	var oldVer = storage.get("installedVersion");
	var newVer = Version;
	if (oldVer < "2.0") {
		copyLocalStorage();
	}
	storage.set({
		installedVersion: newVer
	});
	log("Upgraded to version", newVer);
}

function copyLocalStorage() {
	var a = Object.keys(localStorage);
	for (var i in a) {
		if (a[i] != "times" && a[i].substring(0, 4) != "last")
			storage.set({
				[a[i]]: storage.get(a[i])
			});
	}
}

function getAudioUrl(audio) {
	var audio = audio || storage.get("sound.audio");
	return "/audio/" + audio;
}
var preferences = {
	locations: [],
	"location.timezone": "local",
	"display.times": {
		imsak: false,
		fajr: true,
		sunrise: true,
		dhuhr: true,
		asr: true,
		sunset: false,
		maghrib: true,
		isha: true,
		midnight: false,
	},
	"display.format": "12-hours",
	"calculation.method": "MWL",
	"calculation.params": {
		fajr: 18,
		maghrib: 0,
		isha: 17,
		midnight: "Standard",
		fajrUnit: "degrees",
		maghribUnit: "minutes",
		ishaUnit: "degrees",
	},
	"calculation.settings": {
		imsak: 10,
		dhuhr: 0,
		asr: "Standard",
		highLats: "NightMiddle",
	},
	"alerts.notification": {
		enabled: false,
		text: "It is time to pray",
	},
	"alerts.prenotif.show": false,
	"alerts.prenotif.timer": 10,
	"alerts.countdown.show": true,
	"alerts.countdown.timer": 10,
	"sound.audio": "adhan.mp3",
	"sound.adhan": {
		enabled: false,
		fajr: true,
		dhuhr: true,
		asr: true,
		maghrib: true,
		isha: true,
	},
};
var lastBadgeUpdate = 0,
	lastDirection = 0,
	lastAudioLoaded = "",
	currentMonth = 0,
	monthlyTimeFormat = 0,
	currentTab = window.location.hash.substring(1) || "home";
var favicon = new Favico({
	animation: "none",
	type: "rectangle",
	textColor: "#fff",
	bgColor: "#d00",
});

function init() {
	install();
	launch();
}

function install() {
	if (isLatestVersion()) return;
	initOptions();
	upgrade();
	if (locationNotSet()) {
		initLocation();
	}
	log("Addon installed");
}

function launch() {
	initModals();
	initPlayer();
	updateTimezone();
	updatePrayerTimes();
	initPage();
	initTabs();
	addListeners();
	updateBadge();
	checkBadge();
	updateTimer();
	updateDailyTable();
	initMonthlyTable();
	updateQiblaPage();
	run();
	log("Addon launched");
}

function run() {
	setTimeout(run, OneMinute - (Date.now() % OneMinute));
	refresh();
}

function initPage() {
	updateLocationList();
	updateMethodList();
	updateTimezone();
	$("#autoplay").prop("checked", storage.get("sound.adhan").enabled);
	if (lastAudioLoaded != storage.get("sound.audio")) {
		player.setAudio(getAudioUrl());
		lastAudioLoaded = storage.get("sound.audio");
	}
}

function updateLocationList() {
	var location = storage.get("location");
	var locations = storage.get("locations");
	var list = $(".location-dropdown .dropdown-menu");
	list.empty();
	for (var i in locations) {
		var address = locations[i].address;
		var href = `javascript:setLocation(${i})`;
		var active = location && location.address == address ? " active" : "";
		var cls = "dropdown-item" + active;
		list.append($("<li>").append($("<a>", {
			class: cls,
			href
		}).text(address)));
	}
	list.append($(`<li><hr class="dropdown-divider"></li><li><a class="dropdown-item" 
            data-bs-toggle="modal"data-bs-target="#optionsModal" href="#">Add Location</a></li>`));
	$(".location-dropdown .dropdown-toggle").text(storage.get("location", {
		address: "Add Location"
	}).address);
}

function setLocation(index) {
	var locations = storage.get("locations");
	storage.set({
		location: locations[index]
	});
	updatePage();
}

function updateMethodList() {
	var method = storage.get("calculation.method");
	var list = $(".method-dropdown .dropdown-menu");
	list.empty();
	for (var item of methodList) {
		var val = item.value;
		if (val == "Custom" && method != "Custom") continue;
		var href = `javascript:setMethod("${val}")`;
		var active = val == method ? " active" : "";
		var cls = "dropdown-item" + active;
		list.append($("<li>").append($("<a>", {
			class: cls,
			href
		}).text(item.desc)));
	}
	list.append($(`<li><hr class="dropdown-divider"></li><li><a class="dropdown-item" 
            data-bs-toggle="modal"data-bs-target="#optionsModal" 
            data-bs-section="calculation"href="#">Calculation Settings</a></li>`));
	for (var item of methodList)
		if (item.value == method)
			$(".method-dropdown .dropdown-toggle").text(item.desc);
}

function setMethod(method) {
	storage.set({
		"calculation.method": method
	});
	updatePage();
}

function initModals() {
	$("#optionsModal").on("show.bs.modal", function(event) {
		var body = $("#optionsModal .modal-body");
		var section = $(event.relatedTarget).data("bs-section");
		var tag = section ? "#" + section : "";
		var height = Math.min(510, $("body").width() * 1.25);
		body.html(`<iframe src="/options/${tag}"
            width="100%" height="${height}px"></iframe>`);
	});
	$("#optionsModal").on("hide.bs.modal", function() {
		updatePage();
	});
	$("#contactModal").on("shown.bs.modal", function() {});
}

function initPlayer() {
	player = new CircleAudioPlayer({
		audio: getAudioUrl(),
		size: 100,
		borderWidth: 7,
	});
	player.appendTo(playerContainer);
	lastAudioLoaded = storage.get("sound.audio");
}

function addListeners() {
	$("#autoplay").on("change", function(event) {
		var adhan = storage.get("sound.adhan");
		adhan.enabled = this.checked;
		storage.set({
			"sound.adhan": adhan
		});
	});
}

function initTabs() {
	$('a[data-bs-toggle="tab"]').on("show.bs.tab", function(event) {
		currentTab = $(event.target).prop("id").split("-")[0];
		setTabTitle();
		if ($.inArray(currentTab, ["home", "monthly", "qibla"]) !== -1) {
			var dom = $("#settings-accordion");
			var source = dom.parent();
			var target = $(`#${currentTab} .settings-box`);
			if (source[0] == target[0]) return;
			var clone = dom.clone();
			dom.appendTo(target);
			clone.appendTo(source);
			sleep(400).then(() => clone.remove());
		}
	});
	$("#quran-tab").on("show.bs.tab", function(event) {
		var body = $("#quran");
		if (body.html() != "") return;
		body.html(`<iframe src="http://tanzil.net/?embed=true&nohead=true" width="770px" height="1000px"
                style="overflow-x:hidden; overflow-y:auto;" scrolling="no"></iframe>`);
	});
	$(".brand-tab").on("click", (event) => {
		var tab = new bootstrap.Tab($("#home-tab")[0]);
		tab.show();
	});
	$("#qibla-tab").on("shown.bs.tab", function(event) {
		lastDirection = 0;
		updateQiblaPage();
	});
	$(".navbar-nav>li>a").on("click", function() {
		$(".navbar-collapse").collapse("hide");
	});
	$(".nav").stickyTabs();
	setTabTitle();
}

function setTabTitle() {
	if (currentTab == "home") {
		updateBadge();
		return;
	}
	var tabTitle = capitalize(currentTab);
	if (currentTab == "monthly") tabTitle = "Monthly Timetable";
	document.title = tabTitle + " | PrayTime!";
}

function updatePage() {
	initPage();
	updatePrayerTimes();
	updateMonthlyTable();
	updateQiblaPage();
	refresh();
}

function refresh() {
	if (locationNotSet()) return;
	updateTimesIfNeeded();
	updateDailyTable();
	updateBadge();
	updateNotifications();
}

function updateTimer() {
	setTimeout(updateTimer, 1000);
	var timeLeft = locationNotSet() ? 0 : getNextTime().timeLeft;
	$("#timer-div").text(formatCounter(Math.max(0, timeLeft)));
}

function checkBadge() {
	setTimeout(checkBadge, BadgeCheckPeriod);
	if (Date.now() - lastBadgeUpdate < OneMinute) return;
	updateBadge();
}

function updateNotifications() {
	var notif = storage.get("alerts.notification");
	var next = getNextTime();
	var name = labelName(next.label);
	if (notif.enabled) {
		var message = isPrayerTime(next.label) ? notif.text : "";
		if (next.minsLeft == 0) showNotification(name, message);
	}
	if (storage.get("alerts.prenotif.show")) {
		var timer = storage.get("alerts.prenotif.timer");
		if (next.minsLeft == timer)
			showNotification(name, timer + " minutes left");
	}
}

function showNotification(title, message) {
	if (Date.now() - storage.get("lastNotifTime") < NotifsGap) return;
	var icon = "/img/icons/icon.png";
	var notification = new Notification(title, {
		body: message,
		icon: icon
	});
	storage.set({
		lastNotifTime: Date.now()
	});
	log("Notification for " + title);
}

function playAdhan() {
	if (Date.now() - storage.get("lastAdhanTime") < NotifsGap) return;
	if (player.audio.currentTime != 0) {
		player.audio.currentTime = 0;
	}
	sleep(300).then(() => player.play());
	storage.set({
		lastAdhanTime: Date.now()
	}, "local");
	log("Adhan played");
}

function updateBadge() {
	if (locationNotSet()) return;
	var next = getNextTime();
	var minsLeft = next.minsLeft;
	var timeName = labelName(next.label);
	var badgeCounter = "";
	if (storage.get("alerts.countdown.show") && minsLeft <= storage.get("alerts.countdown.timer")) {
		badgeCounter = minsLeft;
		if (minsLeft <= 0) {
			var adhan = storage.get("sound.adhan");
			if (adhan.enabled && adhan[next.label]) {
				playAdhan();
			}
			badgeCounter = "";
		}
	}
	favicon.badge(badgeCounter);
	var message = minsLeft <= 0 ? `Now: ${timeName}` : `Next: ${timeName}`;
	$("#timer-header").text(message);
	setTabTitleText(timeName, next.time, minsLeft);
	lastBadgeUpdate = Date.now();
}

function setTabTitleText(timeName, time, minsLeft) {
	if (currentTab != "home") return;
	var title = "PrayTime!";
	if (!isMobile) {
		var str = "";
		if (minsLeft >= 60) {
			str = timeName + " at " + formatTime(time, "12h");
		} else if (minsLeft >= 1) {
			var minsTag = minsLeft == 1 ? "minute" : "minutes";
			str = `${timeName} in ${minsLeft} ${minsTag}`;
		} else str = `Now: ${timeName}`;
		title = str + " | " + title;
	}
	document.title = title;
}

function updateDailyTable() {
	if (locationNotSet()) return;
	var times = getTimes();
	var next = getNextTime();
	var display = storage.get("display.times");
	var dayOffset = Math.floor(next.index / NumTimes) - 1;
	var date = local().plus({
		days: dayOffset
	});
	var format = storage.get("display.format") == "24-hours" ? "24h" : "12h";
	var table = $("#daily-table tbody").empty();
	for (var i in times) {
		var time = getTimeInfo(i);
		if (display[time.label] && dayOffset == Math.floor(i / NumTimes) - 1) {
			timestr = formatTime(times[i], format);
			rowClass = time.label == next.label ? "next-time" : "";
			$("<tr>", {
					class: rowClass
				})
				.append($("<td>", {
					class: "time-label"
				}).text(time.name))
				.append($("<td>", {
					class: "time"
				}).text(timestr))
				.appendTo(table);
		}
	}
	var day = {
		"-1": "",
		0: "",
		1: "Tomorrow"
	} [dayOffset];
	$("#daily-header").html(formatDate(date.ts, day));
}

function displayMonth(offset) {
	currentMonth = currentMonth.plus({
		months: +offset
	});
	$("#table-title").html(currentMonth.toFormat("MMMM y"));
	var display = storage.get("display.times");
	var items = {
		day: "Day"
	};
	for (var i of Times) {
		if (display[i]) items[i] = labelName(i);
	}
	$("#monthly-table thead")
		.empty()
		.append(makeTableRow(items, items, "<th>", ""));
	var tbody = $("#monthly-table tbody").empty();
	var date = currentMonth;
	var endDate = currentMonth.plus({
		months: 1
	});
	var format = monthlyTimeFormat ? "12hs" : "24h";
	var location = storage.get("location");
	while (date < endDate) {
		var times = prayTimes.getTimes({
			date: date.ts,
			latitude: location.lat,
			longitude: location.lng,
			timezone: date.offset / 60,
			format: "timestamp",
		});
		for (i in times) {
			times[i] = formatTime(times[i], format);
		}
		times.day = date.day;
		var today = local().startOf("day");
		var cls = date.ts == today.ts ? "active" : "";
		tbody.append(makeTableRow(times, items, "<td>", cls));
		date = date.plus({
			days: 1
		});
	}
}

function makeTableRow(data, items, cell, cls) {
	var row = $("<tr>", {
		class: cls
	});
	for (var i in items) {
		row.append($(cell).text(data[i]));
	}
	return row;
}

function initMonthlyTable(toggleFormat = 0) {
	if (toggleFormat == 0) {
		currentMonth = local().startOf("month");
		monthlyTimeFormat = +(storage.get("display.format") == "12-hours");
	} else {
		monthlyTimeFormat = (monthlyTimeFormat + 1) % 2;
	}
	$("#time-format").html(["24-hour", "12-hour"][monthlyTimeFormat]);
	updateMonthlyTable();
}

function updateMonthlyTable() {
	if (locationNotSet()) return;
	var location = storage.get("location");
	displayMonth(0);
}
getDirection = function(p, q) {
	var pi = Math.PI,
		lat1 = (p.lat / 180) * pi,
		lat2 = (q.lat / 180) * pi,
		dlng = ((q.lng - p.lng) / 180) * pi;
	var angle = Math.atan2(Math.sin(dlng), Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dlng));
	return (angle * 180) / pi;
};
qiblaDirection = function() {
	const Kaba = {
		lat: 21.42251,
		lng: 39.82616
	};
	var location = storage.get("location");
	return getDirection(location, Kaba);
};
baseDirection = function(angle) {
	return Math.floor((angle + 45) / 90) * 90;
};
$.fn.rotate = function(start, angle, duration, complete) {
	var easing = "linear";
	var diff = Math.abs(angle - start);
	var args = $.speed((duration * diff) / 360, easing, complete);
	var step = args.step;
	return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
			$.style(e, "transform", "rotate(" + now + "deg)");
			if (step) return step.apply(e, arguments);
		};
		$({
			deg: start
		}).animate({
			deg: angle
		}, args);
	});
};

function rotateArrow(start, target) {
	var speed = 2000;
	var diff = target - start;
	if (diff == 0) return;
	var eps = Math.log(Math.abs(diff)) / Math.log(1.7);
	speed *= 10 / eps;
	if (eps <= 1.05) eps = 0;
	eps = Math.sign(diff) * eps;
	$("#compass-arrow").rotate(start, target + eps, speed, () => {
		sleep(1000 / (eps + 1)).then(rotateArrow(target + eps, target));
	});
}

function updateQiblaPage() {
	if ($(".tab-pane.active").prop("id") != "qibla") return;
	var angle = qiblaDirection();
	var base = baseDirection(angle);
	var diff = Math.round(angle - base);
	var text = `Qibla: ${Math.abs(diff)} degrees from `;
	text += ["North", "East", "South", "West"][(base / 90 + 4) % 4];
	text += diff >= 0 ? " (clockwise)" : " (counterclockwise)";
	$("#qibla-direction").text(text);
	rotateArrow(lastDirection, angle);
	lastDirection = angle;
}

function sendMessage() {
	if ($('#contact-form [name="message"]').val().length < 8) {
		$("#contact-alert").text("Message too short.");
		return;
	}
	$.post("/api/message.php", $("#contact-form").serialize())
		.done((data) => {
			if (data == "OK") {
				$("#contact-alert").text("Message successfully sent.");
				$("#contact-submit").hide();
			} else {
				$("#contact-alert").text("Error sending message.");
			}
		})
		.fail(() => {
			$("#contact-alert").text("Connection error.");
		});
}