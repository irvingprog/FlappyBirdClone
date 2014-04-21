declare var pilas;

class FlappyFondo extends Fondo {
	constructor() {
		super('flappyfondo.png', 0, 0);
	}
}

class FlappyBird extends Actor {
	paso;
	cuadro;
	controlup;
	controles_h;
	_muerto;
	
	constructor() {
		var grilla = pilas.imagenes.cargar_grilla('flappybird.png',3,1);
		super(grilla, 0, 100);
		this.paso = 0;
		this.cuadro = 0;
		this.controlup = true;
		this.controles_h = true;
		this._muerto = false;
		this._imagen.definir_cuadro(this.cuadro);
		var circulo = pilas.escena_actual().fisica.crear_circulo(this.x, this.y, this.radio_de_colision, {restitucion:0});
		this.imitar(circulo);
	}

	actualizar() {
		this.controles();
		this.animacion();
		this.cayendo();

		if(this.y<-120) {
			this.muerto();
		}
	}

	muerto() {
		this.controles_h = false;
		this._muerto = true;
		this._imagen.definir_cuadro(0);
	}

	controles() {
		if (this.controles_h) {
			if (this.controlup) {
				if (pilas.escena_actual().control.arriba) {
					this.figura.empujar(0,-180);
					this.controlup = false;
					this.figura.rotacion = -30;
				}
			}

			if (!pilas.escena_actual().control.arriba) {
				this.controlup = true;
			}
		}
	}

	animacion() {
		this.paso += 0.08;
		if (this.paso > 1) {
			this.paso = 0;
			this.cuadro += 1;

			if (this.cuadro > 2) {
				this.cuadro = 0
			}

			this._imagen.definir_cuadro(this.cuadro)
		}		
	}

	cayendo() {
		this.figura.rotacion += .8; 
		if (this.figura.rotacion > 90) {
				this.figura.rotacion = 90;
		}	
	}
}

class FlappyPiso extends Actor {
	velocidad;
	constructor(x) {
		super('flappypiso.png',x,-200);
		this.velocidad = 1;
		var rectangulo = pilas.escena_actual().fisica.crear_rectangulo(0, -160, 288, 20, {dinamico:false});
	}

	actualizar() {
		this.izquierda -= this.velocidad;
		if (this.derecha<=-144) {
			this.izquierda = 144;
		}
	}
}

class FlappyTubo extends Actor {
	velocidad;
	constructor() {
		super('flappytubo.png', 170, 0);
		this.velocidad = 1;
	}

	actualizar() {
		this.izquierda -= this.velocidad;
		if (this.derecha <= -144) {
			this.eliminar();
		}
	}
}

class FlappyGame extends Base {
	fondo;
	bird;
	piso;
	piso2;
	tubos;

	iniciar() {
		this.fondo = new FlappyFondo();
		this.bird = new FlappyBird();
		this.tubos = new pilas.grupo.Grupo();

		pilas.mundo.agregar_tarea_siempre(4.2,this.crear_tubos, {}, this);

		this.piso = new FlappyPiso(0);
		this.piso2 = new FlappyPiso(288);
	}

	actualizar() {
		super.actualizar();
		this.colisiones();
		if (this.bird._muerto) {
			this.parar();
		}
	}
	crear_tubos() {
		var tubo = new FlappyTubo();
		var tubo2 = new FlappyTubo();
		this.tubos.agregar_actor(tubo);
		this.tubos.agregar_actor(tubo2);
		tubo.arriba = Math.floor(Math.random() * (500 - ( 300+ 1)))  + 300;
		tubo2.rotacion = 180;
		tubo2.arriba = tubo.abajo-120;	
	}

	colisiones() {
		for (var i in this.tubos) {
			if (this.bird.derecha > this.tubos[i].izquierda &&
			 	this.bird.izquierda < this.tubos[i].derecha && 
			 	this.bird.arriba>this.tubos[i].abajo &&
			 	this.bird.abajo<this.tubos[i].arriba ) {					
				this.bird.muerto();
				this.parar();
				this.bird.x -= 2;				
			}
		}
	}

	parar() {
		for (var i in this.tubos) {
			this.tubos[i].velocidad = 0;
		}

		this.piso.velocidad = 0;
		this.piso2.velocidad = 0;	

		pilas.escena_actual().tareas.tareas_planificadas.splice(0,1);
	}
}