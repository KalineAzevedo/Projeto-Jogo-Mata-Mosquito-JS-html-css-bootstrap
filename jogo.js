// ajuste do tamanho da tela
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10 

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal') {
	//1500
	criarMosquitoTempo = 1500
}else if (nivel === 'dificil') {
	//1000
	criarMosquitoTempo = 1000
}else if (nivel === 'dificilimooo') {
	//750
	criarMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight 
	largura = window.innerWidth 

	console.log(largura,altura)
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){

	tempo -=1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarMosquito)
		window.location.href = 'vitoria.html'
	}else{

		document.getElementById('cronometro').innerHTML = tempo
	}

},1000)


function posicaoRandomica(){


//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove() 
	
		if(vidas > 3){

			window.location.href = 'fim_de_jogo.html'
		}else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas ++ 
		}
		
	}
	

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

//criacao dos elementos html 
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY  + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	//remocao do mosquito a cada click
	mosquito.onclick = function() { 
		this.remove()
	}

	document.body.appendChild(mosquito)

}

// controlacao do tamanho do mosquito 

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	 switch(classe) {
	 	case 0 :
	 		return 'mosquito1'

	 	case 1 : 
	 		return 'mosquito2'

	 	case 2 :
	 		return 'mosquito3'
	 }
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)

	 switch(classe) {
	 	case 0 :
	 		return 'ladoA'

	 	case 1 : 
	 		return 'ladoB'

	 }
}