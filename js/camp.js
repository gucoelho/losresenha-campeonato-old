var Time = function (id, nome, sigla, liga, cor1, cor2) {
	this.id = id;
	this.nome = nome;
	this.sigla = sigla;
	this.liga = liga;
	this.cor1 = cor1;
	this.cor2 = cor2;
}

var Jogador = function (id, nome, sobrenome, apelido) {
	this.id = id;
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.apelido = apelido;

	this.nomecompleto = nome + ' ' + sobrenome;
}

var Sorteio = function (time, jogador) {
	this.time = time;
	this.jogador = jogador;
}

function formatTagOptions(options) {
	var tags = '';
	for (j = 0; j < options.length; j++) {
		tags += '<option value="' + options[j].id + '">' + options[j].nomecompleto.toString() + '</option>';
	}
	return tags;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

var jogadores = [];
jogadores.push(new Jogador(1, 'Gustavo', 'Coelho', 'Coelho'));
jogadores.push(new Jogador(2, 'Gustavo', 'Simões', 'Sima'));
jogadores.push(new Jogador(3, 'Guilherme', 'Vona', 'Vona'));
jogadores.push(new Jogador(4, 'Felipe', 'De Paula', 'Felipe'));
jogadores.push(new Jogador(5, 'Leonardo', 'Siqueira', 'Léo'));
jogadores.push(new Jogador(6, 'Bruno', 'Moura', 'Bruninho'));
jogadores.push(new Jogador(7, 'Dominick', 'Lucio', 'Dom'));
jogadores.push(new Jogador(8, 'Pedro', 'Oliveira', 'Pedro'));
jogadores.push(new Jogador(9, 'Rafael', 'Vieira', 'Rafa'));
jogadores.push(new Jogador(10, 'Lucas', 'Alvarenga', 'Alva'));
jogadores.push(new Jogador(11, 'William', 'Figueredo', 'Bahia'));
//jogadores.push(new Jogador(12, 'Vinicius', 'Freihat', 'Frei'));
jogadores.push(new Jogador(13, 'José', 'Marcelo', 'Zé'));
jogadores.push(new Jogador(14, 'Rafael', 'Peron', 'Cacau'));
//jogadores.push(new Jogador(15, 'Matheus', 'Carvalho', 'Salva'));
jogadores.push(new Jogador(16, 'Matheus', 'Macieira', 'Pulga'));



var ligas = ['Brasil', 'Alemanha', 'Espanha', 'Italia', 'Inglaterra', 'França', 'Portugal'];

var times = [];

times.push(new Time(1, 'Barcelona', 'BAR', ligas[2], '#a93b63', '#0076b6'));
times.push(new Time(2, 'Real Madrid', 'REA', ligas[2], '#fefefe', '#f6b90c'));
times.push(new Time(3, 'Atlético de Madrid', 'ATM', ligas[2], '#152881', '#e12017'));
times.push(new Time(4, 'Bayern de Munique', 'BAY', ligas[1], '#dc184f', '#0057a4'));
times.push(new Time(5, 'PSG', 'PSG', ligas[5], '#015293', '#e52b38'));
times.push(new Time(6, 'Juventus', 'JUV', ligas[3], '#1e1916', '#ffffff'));
times.push(new Time(7, 'Roma', 'ROM', ligas[3], '#f89728', '#b30838'));
times.push(new Time(8, 'Chelsea', 'CHE', ligas[4], '#034694', '#ffffff'));
times.push(new Time(9, 'Manchester United', 'MAU', ligas[4], '#ffff00', '#ff0000'));
times.push(new Time(10, 'Manchester City', 'MAC', ligas[4], '#00b4db', '#ffffff'));
times.push(new Time(11, 'Borussia Bortmund', 'BOR', ligas[1], '#f8dd37', '#000000'));

function getTimeById(id) {
	for (i = 0; i < times.length; i++) {
		if (id == times[i].id) {
			return times[i];
		}
	}
}

function getJogadorById(id) {
	for (i = 0; i < jogadores.length; i++) {
		if (id == jogadores[i].id) {
			return jogadores[i];
		}
	}
}

function tagTeam(time) {
	return '<div class="time" time="' + time.id + '"><div class ="escudo-time"><img src="./img/escudos/' + time.sigla + '.png" /></div><div class="nome-time"><span>' + time.nome + '</span></div><span class="badge"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span></div>';
}

function tagPlayer(jogador) {
	return '<div class="tagJogador" jogador="' + jogador.id + '"><div class="jogImagem"><img src="img/fotos/perfil/' + jogador.apelido + '.JPG"></div><div><b>' + jogador.apelido + '</b></div><div><small>' + jogador.nomecompleto + '</small></div></div>'
}

function tagSorteado(sorteio) {
	return '<div class="card"><div class="sorteado"><div class="front"><img height="150"src="img/UEFA_Champions_League_logo_2.png"><p>RESENHA LEAGUE</p></div><div class="back"> <div class="sorteadoImg"><img class="imgEscudo" src="./img/escudos/medio/' + sorteio.time.sigla + '.png"><img class="imgJogador" src="./img/fotos/nobg/' + sorteio.jogador.apelido + '.png"><div class="cor1" style="position: absolute;left: 0;top: 0;background-color: red;border-right: 300px solid ' + sorteio.time.cor1 + ';border-top: 300px solid ' + sorteio.time.cor2 + ';"></div></div><div class="divTextSort"><p>' + sorteio.jogador.nome + '</p><p>' + sorteio.time.nome + '</p></div></div></div></div>';
}

var Jogo = function (time1, time2) {
	this.idJogo = undefined;
	this.time1 = time1;
	this.time2 = time2;
	this.gols1 = 0;
	this.gols2 = 0;
	this.rodada = 0;
}

function containsSorteio(sorteio, sorteioLista) {
	for (var i = 0; i < sorteioLista.length; i++) {
		if (sorteioLista[i] == sorteio) {
			return true;
		}
	}
	return false;
}

$(document).ready(function () {

	//$('.card').flip({
	//	trigger: 'click'
	//});

	var flagSorteio = false;
	var sorteioTimes;
	var sorteioJogadores;
	var listaJogos;
	var sorteioFinal;

	$('.card').click(function () {
		alert('dsd');
	});

	for (i = 0; i < times.length; i++) {
		$('#sTimes').append(tagTeam(times[i]));
	}

	for (i = 0; i < jogadores.length; i++) {
		$('#sJogadores').append(tagPlayer(jogadores[i]));
	}

	var jogadoresEscolhidos = [];
	var timesEscolhidos = [];

	$('.tagJogador').click(function () {
		$(this).toggleClass('tagJogador');
		$(this).toggleClass('tagJogador-selected');

		if (!($(this).hasClass('tagJogador-selected'))) {
			jogadoresEscolhidos.pop(getJogadorById($(this).attr('jogador')));
		} else {
			jogadoresEscolhidos.push(getJogadorById($(this).attr('jogador')));
		}

		if (jogadoresEscolhidos.length > 0) {
			console.log(' ');
			for (i = 0; i < jogadoresEscolhidos.length; i++) {
				console.log(jogadoresEscolhidos[i].nome);
			}
		}

	});



	$('.time').click(function () {
		$(this).toggleClass('time-selected');
		$(this).children().toggleClass('badge-selected');

		if (!($(this).hasClass('time-selected'))) {
			timesEscolhidos.pop(getTimeById($(this).attr('time')));
		} else {
			timesEscolhidos.push(getTimeById($(this).attr('time')));
		}

		if (timesEscolhidos.length > 0) {
			console.log(' ');
			for (i = 0; i < timesEscolhidos.length; i++) {
				console.log(timesEscolhidos[i].nome);
			}
		}
	});


	$('#btnSortear').click(function () {
		flagSorteio = true;
		$('#sSorteados').empty();
		sorteioTimes = [];
		sorteioJogadores = [];
		sorteioFinal = [];

		for (i = 0; i < timesEscolhidos.length; i++) {
			sorteioTimes.push(timesEscolhidos[i]);
		}

		for (i = 0; i < jogadoresEscolhidos.length; i++) {
			sorteioJogadores.push(jogadoresEscolhidos[i]);
		}


		if (sorteioTimes.length > sorteioJogadores.length) {
			for (i = 0; i < sorteioJogadores.length; i = i) {
				shuffle(sorteioTimes);
				shuffle(sorteioJogadores);
				sorteioFinal.push(new Sorteio(sorteioTimes[i], sorteioJogadores[i]));

				// console.log(sorteioFinal[i].time.nome +'-'+sorteioFinal[i].jogador.apelido);


				sorteioJogadores.shift(sorteioJogadores[i]);
				sorteioTimes.shift(sorteioTimes[i]);
			}

		} else {

			while (sorteioTimes.length != sorteioJogadores.length) {
				sorteioTimes.push(sorteioTimes[(getRandomInt(1, sorteioTimes.length) - 1)]);
			}

			for (i = 0; i < sorteioTimes.length; i = i) {
				//var sort = Math.round(Math.random);
				shuffle(sorteioTimes);
				shuffle(sorteioJogadores);
				sorteioFinal.push(new Sorteio(sorteioTimes[i], sorteioJogadores[i]));

				//console.log(sorteioFinal[i].time.nome +'-'+sorteioFinal[i].jogador.apelido);


				sorteioJogadores.shift(sorteioJogadores[i]);
				sorteioTimes.shift(sorteioTimes[i]);
			}
		}





		for (i = 0; i < sorteioFinal.length; i++) {

			/* var tag='<div class="card"><div class="sorteado"><div class="front"><img height="150"src="img/UEFA_Champions_League_logo_2.png"><p>RESENHA LEAGUE</p></div><div class="back"> <div class="sorteadoImg"><img class="imgEscudo" src="./img/escudos/medio/'+sorteioFinal[i].time.sigla+'.png"><img class="imgJogador" src="./img/fotos/perfil/'+sorteioFinal[i].jogador.apelido+'.jpg"><div class="cor1" style="position: absolute;left: 0;top: 0;background-color: red;border-right: 300px solid '+sorteioFinal[i].time.cor1+';border-top: 300px solid '+sorteioFinal[i].time.cor2+';"></div></div><div class="divTextSort"><p>'+sorteioFinal[i].jogador.nome+'</p><p>'+sorteioFinal[i].time.nome+'</p></div></div></div></div>';          */
			$('#sSorteados').prepend(tagSorteado(sorteioFinal[i]));

		}

		$('.card').flip({
			speed: 900,
			trigger: 'manual'
		});

		//  var $cards = $('.card').all;

		// setInterval(function(){
		//     for(h=0;h<$cards.length;h++){  $cards[h].flip(true); }
		// } ,100);

		var time = 2000;


		$('.card').each(function () {

			var cardTag = $(this);


			setTimeout(function () {
				cardTag.flip(true);

				// var audioElement = document.createElement('audio');
				// audioElement.setAttribute('src', './sons/audios/Léo.mp3');
				// audioElement.setAttribute('autoplay', 'autoplay');
				// audioElement.play();


			}, time)

			time = time + 3000;
		});


		if (flagSorteio) {

		}

	});


	$('#btn-jogos').click(function(){
	      listaJogos = [];
	      var listaJogadoresJaDefinidos = [];
	            for(i=0;i<sorteioFinal.length;i++){
	                for(j=0;j<sorteioFinal.length;j++){
	                    if(sorteioFinal[i] != sorteioFinal[j] && !containsSorteio(sorteioFinal[j], listaJogadoresJaDefinidos)){
                            if((Math.random()*10) > 5){ 
	                        listaJogos.push(new Jogo(sorteioFinal[i],sorteioFinal[j]));
                            } else {
	                        listaJogos.push(new Jogo(sorteioFinal[j],sorteioFinal[i]));
                            }
	                    }
	                }
	                listaJogadoresJaDefinidos.push(sorteioFinal[i]);
	            }

	function compareNumbers(a, b) {
	  return a.rodada - b.rodada;
	}
	    
	    
	    var qtdRodada = sorteioFinal.length-1;
	    var rodada = 1;
	    var count = 1;
		
	        for(i=0;i<listaJogos.length;i++){
				listaJogos[i].rodada = rodada;
			
	            if(rodada == qtdRodada){
	                rodada = 1;
	                count++;
	            } else { rodada++ } 
	        }
		
	       listaJogos.sort(compareNumbers); 
            
        
            /*for(i=0;i<listaJogos.length;i++){
					      
	            var time1 = listaJogos[i].time1.time.nome;
	            var time2 = listaJogos[i].time2.time.nome;
	            var jogador1 = listaJogos[i].time1.jogador.apelido;
	            var jogador2 = listaJogos[i].time2.jogador.apelido;
	        
					console.log(jogador1 + '\t x\t ' + jogador2 + '\tRODADA:' + listaJogos[i].rodada);
	   //console.log('('+time1+')' + jogador1 + ' x ' + jogador2+'('+time2+') rodada:' + listaJogos[i].rodada);
				}
                    */
var participantes = [];
        
    for(i=0;i<sorteioFinal.length;i++){
        participantes.push(new Participante(sorteioFinal[i]));
    }       
        
var table = document.createElement("TABLE");
var header = table.createTHead();
var row = header.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = 'Jogador';
cell = row.insertCell(1);
cell.innerHTML = 'Time';
cell = row.insertCell(2);
cell.innerHTML = 'JGS';
cell = row.insertCell(3);
cell.innerHTML = 'PTS';
cell = row.insertCell(4);
cell.innerHTML = 'V';
cell = row.insertCell(5);
cell.innerHTML = 'E';
cell = row.insertCell(6);
cell.innerHTML = 'D';
//var header = table.createTHead();
    for(i=0;i<participantes.length;i++){
    var row = table.insertRow(i);
        
    for(j=0;j<7;j++){
        var cell = row.insertCell(j);
        switch(j){
            case 0:  cell.innerHTML = participantes[i].jogador.apelido; break;
            case 1:  cell.innerHTML = participantes[i].time.nome; break;
            case 2:  cell.innerHTML = participantes[i].jogos; break;
            case 3:  cell.innerHTML = participantes[i].pontos; break;
            case 4:  cell.innerHTML = participantes[i].vitorias; break;
            case 5:  cell.innerHTML = participantes[i].empates; break;
            case 6:  cell.innerHTML = participantes[i].derrotas; break;
        }
    }    

    }

       $('#sCampeonato').empty();
       $('#sCampeonato').append(table);
        
        
        
        
        
	});
	
});

var Participante = function(listaSorteio){
    this.jogador = listaSorteio.jogador;
    this.time = listaSorteio.time;
    this.jogos = 0;
    this.pontos = 0;
    this.vitorias = 0;
    this.empates = 0;
    this.derrotas= 0;
    this.GP = 0;
    this.GC = 0;
    this.SG = 0;
}

var Campeonato = function(participantes,jogos){
    this.participantes = participantes;
    this.jogos = jogos;
}