
var country_arr = new Array("Azua", "Bahoruco", "Barahona", "Dajabon", "Duarte", "El Seibo", "Elias Pina", "Espalliat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Montecristi", "Monte Plata", " Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez" ,"Santo Domingo", "Valverde");

// States
var s_a = new Array();
s_a[0]="";
s_a[1]="Azua de Compostela|Estebanía|Guayabal|Las Charcas|Las Yayas de Viajama| Padre Las Casas|Peralta|Pueblo Viejo|Sabana Yegua|Tábara Arriba";
s_a[2]="Neiba|Galván|Los Ríos|Tamayo|Villa Jaragua";
s_a[3]="Barahona|Cabral| El Peñón|Enriquillo|Fundación|Jaquimeyes|La Ciénaga|Las Salinas|Paraíso|Polo|Vicente Noble";
s_a[4]="Dajabón|El Pino|Loma de Cabrera|Partido|Restauración";
s_a[5]="San Francisco de Macorís|Arenoso|Castillo|Eugenio María de Hostos|Las Guáranas|Pimentel|Villa Riva";
s_a[6]="El Seibo|Miches";
s_a[7]="Comendador|Bánica|El Llano|Hondo Valle| Juan Santiago|Pedro Santana";
s_a[8]="Moca|Cayetano Germosén|Gaspar Hernández|Jamao al Norte";
s_a[9]="Hato Mayor del Rey|El Valle|Sabana de la Mar";
s_a[10]="Salcedo|Tenares|Villa Tapia";
s_a[11]="Jimaní|Cristóbal|Duvergé|La Descubierta|Mella|Postrer Río";
s_a[12]="Higüey|San Rafael del Yuma";
s_a[13]="La Romana|Guaymate|Villa Hermosa";
s_a[14]="La Concepción de La Vega|Constanza|Jarabacoa|Jima Abajo";
s_a[15]="Nagua|Cabrera|El Factor|Río San Juan";
s_a[16]="Bonao|Maimón|Piedra Blanca";
s_a[17]="Montecristi|Castañuela|Guayubín|Las Matas de Santa Cruz|Pepillo Salcedo|Villa Vásquez";
s_a[18]="Monte Plata|Bayaguana|Peralvillo|Sabana Grande de Boyá|Yamasá";
s_a[19]="Pedernales|Oviedo";
s_a[20]="Baní|Nizao";
s_a[21]=" Puerto Plata|Altamira|Guananico|Imbert|Luperón|Sosúa|Villa Isabela|Villa Montellano";
s_a[22]="Samaná|Las Terrenas|Sánchez";
s_a[23]="San Cristóbal|Bajos de Haina|Cambita Garabito|Los Cacaos|Sabana Grande de Palenque|San Gregorio de Nigua|Villa Altagracia|Yaguate";
s_a[24]="San José de Ocoa|Rancho Arriba|Sabana Larga";
s_a[25]="San Juan de la Maguana|Bohechío|El Cercado|Juan de Herrera|Las Matas de Farfán|Vallejuelo";
s_a[26]="San Pedro de Macorís|Consuelo|Guayacanes|Quisqueya|Ramón Santana|San José de Los Llanos";
s_a[27]="Cotuí|Cevicos|Fantino|La Mata";
s_a[28]="Santiago|Bisonó|Jánico|Licey al Medio|Puñal|Sabana Iglesia|San José de las Matas|Tamboril|Villa González";
s_a[29]="San Ignacio de Sabaneta|Los Almácigos|Monción";
s_a[30]="Santo Domingo Este|Boca Chica|Los Alcarrizos|Pedro Brand|San Antonio de Guerra|Santo Domingo Norte|Santo Domingo Oeste";
s_a[31]="Mao|Esperanza|Laguna Salada";


function populateStates( countryElementId, stateElementId ){
	
	var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

	var stateElement = document.getElementById( stateElementId );
	
	stateElement.length=0;	// Fixed by Julian Woods
	stateElement.options[0] = new Option('Municipio','');
	stateElement.selectedIndex = 0;
	
	var state_arr = s_a[selectedCountryIndex].split("|");
	
	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function populateCountries(countryElementId, stateElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var countryElement = document.getElementById(countryElementId);
	countryElement.length=0;
	countryElement.options[0] = new Option('Provincia','-1');
	countryElement.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
	}

	// Assigned all countries. Now assign event listener for the states.

	if( stateElementId ){
		countryElement.onchange = function(){
			populateStates( countryElementId, stateElementId );
		};
	}
}