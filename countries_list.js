
let countriesAfrica = [
	"Algeria",
	"Angola",
	"Benin",
	"Botswana",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cameroon",
	"Central African Republic",
	"Chad",
	"Comoros",
	"Democratic Republic of the Congo",
	"Republic of the Congo",
	"Djibouti",
	"Egypt",
	"Equatorial Guinea",
	"Ethiopia",
	"Eritrea",
	"Eswatini",
	"Gabon",
	"Gambia",
	"Ghana",
	"Guinea",
	"Guinea-Bissau",
	"Cote d'Ivoire",
	"Kenya",
	"Lesotho",
	"Liberia",
	"Libya",
	"Madagascar",
	"Malawi",
	"Mali",
	"Mauritania",
	"Mauritius",
	"Morocco",
	"Mozambique",
	"Namibia",
	"Niger",
	"Nigeria",
	"Rwanda",
	"Sao Tome and Principe",
	"Senegal",
	"Seychelles",
	"Sierra Leone",
	"Somalia",
	"South Africa",
	"South Sudan",
	"Sudan",
	"Tanzania",
	"Togo",
	"Tunisia",
	"Uganda",
	"Zambia",
	"Zimbabwe",
];


let countriesAsia = [
"Afghanistan",
"Armenia",
"Azerbaijan",
"Bahrain",
"Bangladesh",
"Bhutan",
"Brunei",
"Cambodia",
"China",
"Georgia",
"India",
"Indonesia",
"Iran",
"Iraq",
"Israel",
"Japan",
"Jordan",
"Kazakhstan",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Lebanon",
"Malaysia",
"Maldives",
"Mongolia",
"Myanmar",
"Nepal",
"North Korea",
"Oman",
"Pakistan",
"Palestine",
"Philippines",
"Qatar",
"Saudi Arabia",
"Singapore",
"South Korea",
"Sri Lanka",
"Syria",
"Taiwan",
"Tajikistan",
"Thailand",
"Timor-Leste",
"Turkmenistan",
"United Arab Emirates",
"Uzbekistan",
"Vietnam",
"Yemen",
];


let countriesEurope = [
"Albania",
"Andorra",
"Austria",
"Belarus",
"Belgium",
"Bosnia and Herzegovina",
"Bulgaria",
"Croatia",
"Cyprus",
"Czechia",
"Denmark",
"Estonia",
"Finland",
"France",
"Germany",
"Greece",
"Hungary",
"Iceland",
"Ireland",
"Italy",
"Kosovo",
"Latvia",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Malta",
"Moldova",
"Monaco",
"Montenegro",
"Netherlands",
"North Macedonia",
"Norway",
"Poland",
"Portugal",
"Romania",
"Russia",
"San Marino",
"Serbia",
"Slovakia",
"Slovenia",
"Spain",
"Sweden",
"Switzerland",
"Turkey",
"Ukraine",
"United Kingdom",
"Vatican City",
];


let countriesNorthAmerica = [
	"Antigua and Barbuda",
	"Bahamas",
	"Barbados",
	"Belize",
	"Canada",
	"Costa Rica",
	"Cuba",
	"Dominica",
	"Dominican Republic",
	"El Salvador",
	"Grenada",
	"Guatemala",
	"Haiti",
	"Honduras",
	"Jamaica",
	"Mexico",
	"Nicaragua",
	"Panama",
	"St Kitts and Nevis",
	"St Lucia",
	"St Vincent and the Grenadines",
	"Trinidad and Tobago",
	"United States of America",
];
	

let countriesSouthAmerica = [
"Argentina",
"Bolivia",
"Brazil",
"Chile",
"Colombia",
"Ecuador",
"Guyana",
"Paraguay",
"Peru",
"Suriname",
"Uruguay",
"Venezuela",
];



let countriesOceania = [
"Australia",
"Fiji",
"Kiribati",
"Marshall Islands",
"Micronesia",
"Nauru",
"New Zealand",
"Palau",
"Papua New Guinea",
"Samoa",
"Solomon Islands",
"Tonga",
"Tuvalu",
"Vanuatu",
];


let countriesCombined = [];
for (const item of countriesAfrica){
	countriesCombined.push(item);
}

for (const item of countriesAsia){
	countriesCombined.push(item);
}

for (const item of countriesNorthAmerica){
	countriesCombined.push(item);
}

for (const item of countriesSouthAmerica){
	countriesCombined.push(item);
}

for (const item of countriesEurope){
	countriesCombined.push(item)
}

for (const item of countriesOceania){
	countriesCombined.push(item)
}



console.log(countriesCombined.length)
let countries = countriesCombined;
//console.log(countries)
//console.log(typeof countriesCombined)



