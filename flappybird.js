var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FlappyFondo = (function (_super) {
    __extends(FlappyFondo, _super);
    function FlappyFondo() {
        _super.call(this, 'flappyfondo.png', 0, 0);
    }
    return FlappyFondo;
})(Fondo);

var FlappyBird = (function (_super) {
    __extends(FlappyBird, _super);
    function FlappyBird() {
        var grilla = pilas.imagenes.cargar_grilla('flappybird.png', 3, 1);
        _super.call(this, grilla, 0, 100);
        this.paso = 0;
        this.cuadro = 0;
        this.controlup = true;
        this.controles_h = true;
        this._muerto = false;
        this._imagen.definir_cuadro(this.cuadro);
        var circulo = pilas.escena_actual().fisica.crear_circulo(this.x, this.y, this.radio_de_colision, { restitucion: 0 });
        this.imitar(circulo);
    }
    FlappyBird.prototype.actualizar = function () {
        this.controles();
        this.animacion();
        this.cayendo();

        if (this.y < -120) {
            this.muerto();
        }
    };

    FlappyBird.prototype.muerto = function () {
        this.controles_h = false;
        this._muerto = true;
        this._imagen.definir_cuadro(0);
    };

    FlappyBird.prototype.controles = function () {
        if (this.controles_h) {
            if (this.controlup) {
                if (pilas.escena_actual().control.arriba) {
                    this.figura.empujar(0, -180);
                    this.controlup = false;
                    this.figura.rotacion = -30;
                }
            }

            if (!pilas.escena_actual().control.arriba) {
                this.controlup = true;
            }
        }
    };

    FlappyBird.prototype.animacion = function () {
        this.paso += 0.08;
        if (this.paso > 1) {
            this.paso = 0;
            this.cuadro += 1;

            if (this.cuadro > 2) {
                this.cuadro = 0;
            }

            this._imagen.definir_cuadro(this.cuadro);
        }
    };

    FlappyBird.prototype.cayendo = function () {
        this.figura.rotacion += .8;
        if (this.figura.rotacion > 90) {
            this.figura.rotacion = 90;
        }
    };
    return FlappyBird;
})(Actor);

var FlappyPiso = (function (_super) {
    __extends(FlappyPiso, _super);
    function FlappyPiso(x) {
        _super.call(this, 'flappypiso.png', x, -200);
        this.velocidad = 1;
        var rectangulo = pilas.escena_actual().fisica.crear_rectangulo(0, -160, 288, 20, { dinamico: false });
    }
    FlappyPiso.prototype.actualizar = function () {
        this.izquierda -= this.velocidad;
        if (this.derecha <= -144) {
            this.izquierda = 144;
        }
    };
    return FlappyPiso;
})(Actor);

var FlappyTubo = (function (_super) {
    __extends(FlappyTubo, _super);
    function FlappyTubo() {
        _super.call(this, 'flappytubo.png', 170, 0);
        this.velocidad = 1;
    }
    FlappyTubo.prototype.actualizar = function () {
        this.izquierda -= this.velocidad;
        if (this.derecha <= -144) {
            this.eliminar();
        }
    };
    return FlappyTubo;
})(Actor);

var FlappyGame = (function (_super) {
    __extends(FlappyGame, _super);
    function FlappyGame() {
        _super.apply(this, arguments);
    }
    FlappyGame.prototype.iniciar = function () {
        this.fondo = new FlappyFondo();
        this.bird = new FlappyBird();
        this.tubos = new pilas.grupo.Grupo();

        pilas.mundo.agregar_tarea_siempre(4.2, this.crear_tubos, {}, this);

        this.piso = new FlappyPiso(0);
        this.piso2 = new FlappyPiso(288);
    };

    FlappyGame.prototype.actualizar = function () {
        _super.prototype.actualizar.call(this);
        this.colisiones();
        if (this.bird._muerto) {
            this.parar();
        }
    };
    FlappyGame.prototype.crear_tubos = function () {
        var tubo = new FlappyTubo();
        var tubo2 = new FlappyTubo();
        this.tubos.agregar_actor(tubo);
        this.tubos.agregar_actor(tubo2);
        tubo.arriba = Math.floor(Math.random() * (500 - (300 + 1))) + 300;
        tubo2.rotacion = 180;
        tubo2.arriba = tubo.abajo - 120;
    };

    FlappyGame.prototype.colisiones = function () {
        for (var i in this.tubos) {
            if (this.bird.derecha > this.tubos[i].izquierda && this.bird.izquierda < this.tubos[i].derecha && this.bird.arriba > this.tubos[i].abajo && this.bird.abajo < this.tubos[i].arriba) {
                this.bird.muerto();
                this.parar();
                this.bird.x -= 2;
            }
        }
    };

    FlappyGame.prototype.parar = function () {
        for (var i in this.tubos) {
            this.tubos[i].velocidad = 0;
        }

        this.piso.velocidad = 0;
        this.piso2.velocidad = 0;

        pilas.escena_actual().tareas.tareas_planificadas.splice(0, 1);
    };
    return FlappyGame;
})(Base);
