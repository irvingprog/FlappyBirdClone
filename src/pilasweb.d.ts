declare class Actores {
    public Aceituna: any;
    public Actor: any;
    public Bomba: any;
    public Explosion: any;
    public Nave: any;
    public Proyectil: any;
    public Piedra: any;
    public Eje: any;
    public Maton: any;
    public Globo: any;
    public Texto: any;
    public Bloque: any;
    public Manzana: any;
    public Cofre: any;
    public Llave: any;
    public Caja: any;
    public Cesto: any;
    public Pelota: any;
    public Zanahoria: any;
    public Boton: any;
    public Puntaje: any;
    public Mono: any;
    public Banana: any;
    public Tortuga: any;
    public Pizarra: any;
    public Pingu: any;
    constructor();
}
declare class Estudiante {
    public habilidades: any;
    public comportamientos: any;
    public comportamiento_actual: any;
    constructor();
    public aprender(clase_de_habilidad: any, argumentos?: any): string;
    public agregar_habilidad(clase_de_habilidad: any, argumentos: any): void;
    public actualizar_habilidades(): void;
    public hacer(comportamiento: any, argumentos?: {}): void;
    public hacer_luego(comportamiento: any, argumentos?: {}): void;
    public actualizar_comportamientos(): void;
    public _adoptar_el_siguiente_comportamiento(): void;
}
declare class Actor extends Estudiante {
    public sprite: any;
    public _imagen: any;
    public vivo: any;
    public radio_de_colision: any;
    public id: any;
    public figura: any;
    public callbacks_cuando_hace_click: any;
    public callbacks_cuando_mueve_mouse: any;
    constructor(imagen: any, x: any, y: any, atributos?: {});
    public tiene_fisica(): boolean;
    public crear_sprite(): void;
    public eliminar(): void;
    public z : any;
    public x : any;
    public y : any;
    public centro_x : any;
    public centro_y : any;
    public escala_x : any;
    public escala_y : any;
    public escala : any;
    public rotacion : any;
    public transparencia : number;
    public ancho : any;
    public alto : any;
    public imagen : any;
    public izquierda : number;
    public derecha : number;
    public arriba : any;
    public abajo : number;
    public ejecutar_callbacks_clicks(): void;
    public ejecutar_callbacks_over(): void;
    public cuando_hace_click : any;
    public cuando_mueve_mouse : any;
    public recibir(evento: any, tipo: any): void;
    public _cuando_hace_click(click: any): void;
    public _cuando_mueve_mouse(evento: any): void;
    public colisiona_con_un_punto(x: any, y: any): boolean;
    public decir(mensaje: any): void;
    public imitar(actor_o_figura: any): void;
    public pre_actualizar(): void;
    public actualizar(): void;
    public colisiona_con(otro_actor: any): any;
    public esta_fuera_de_la_pantalla(): boolean;
}
declare class Aceituna extends Actor {
    public cuadro_normal: any;
    public cuadro_reir: any;
    public cuadro_burlar: any;
    public cuadro_gritar: any;
    constructor(x: any, y: any);
    public normal(): void;
    public reir(): void;
    public gritar(): void;
    public burlarse(): void;
    public saltar(): void;
}
declare class Banana extends Actor {
    constructor(x?: number, y?: number);
    public cerrar(): void;
    public abrir(): void;
}
declare class Bloque extends Actor {
    constructor(x: any, y: any, nombre_imagen: any);
}
declare class Bomba extends Actor {
    public paso: any;
    constructor(x: any, y: any);
    public actualizar(): void;
}
declare class Boton extends Actor {
    public ruta_normal: any;
    public ruta_press: any;
    public ruta_over: any;
    public funciones_normal: any;
    public funciones_press: any;
    public funciones_over: any;
    public estado: any;
    constructor(x: any, y: any, ruta_normal?: string, ruta_press?: string, ruta_over?: string);
    public recibir(evento: any, tipo: any): void;
    public conectar_normal(funcion: any, args?: any): void;
    public conectar_presionado(funcion: any, args?: any): void;
    public conectar_sobre(funcion: any, args?: any): void;
    public desconectar_normal_todo(): void;
    public desconectar_presionado_todo(): void;
    public desconectar_sobre_todo(): void;
    public desconectar_normal(funcion: any, args: any): void;
    public desconectar_presionado(funcion: any, args: any): void;
    public desconectar_sobre(funcion: any, args: any): void;
    public ejecutar_funciones_normal(): void;
    public ejecutar_funciones_press(): void;
    public ejecutar_funciones_over(): void;
    public activar(): void;
    public desactivar(): void;
    public pintar_normal(): void;
    public pintar_presionado(): void;
    public pintar_sobre(): void;
    public detectar_clic(click: any): void;
    public detectar_movimiento(evento: any): void;
}
declare class Caja extends Actor {
    constructor(x: any, y: any);
}
declare class Cesto extends Actor {
    public figura1: any;
    public figura2: any;
    public figura3: any;
    constructor(x?: number, y?: number);
}
declare class Cofre extends Actor {
    public paso: any;
    public esta_abierto: any;
    constructor(x: any, y: any);
    public abrir(): void;
    public actualizar(): void;
}
declare class Eje extends Actor {
    constructor(x: any, y: any);
}
declare class Explosion extends Actor {
    public paso: any;
    constructor(x: any, y: any);
    public actualizar(): void;
}
declare class Globo extends Actor {
    public mensaje: any;
    public actor_texto: any;
    constructor(x: any, y: any, mensaje: any);
    public eliminar(): void;
}
declare class Llave extends Actor {
    constructor(x: any, y: any);
}
declare class Manzana extends Actor {
    constructor(x: any, y: any);
}
declare class Maton extends Actor {
    public paso: any;
    public cuadros: any;
    public direccion: any;
    public velocidad: any;
    public animar: any;
    public obstaculos: any;
    public teclado_habilitado: any;
    constructor(x: any, y: any);
    public actualizar(): void;
    public iniciar_animacion(): void;
    public detener_animacion(): void;
    public avanzar_animacion(): void;
    public mover(x: any, y: any): void;
    public puede_moverse_a(x: any, y: any): boolean;
    public caminar_arriba(pasos: any): string;
    public caminar_abajo(pasos: any): string;
    public caminar_izquierda(pasos: any): string;
    public caminar_derecha(pasos: any): string;
    public saludar(): string;
    public habilitar_teclado(): string;
    public inspeccionar(): string;
}
declare class Mono extends Actor {
    public image_normal: any;
    public image_smile: any;
    public image_shout: any;
    public sound_smile: any;
    public sound_shout: any;
    constructor(x: any, y: any);
    public sonreir(): void;
    public gritar(): void;
    public normal(): void;
    public decir(mensaje: any): void;
    public saltar(): void;
}
declare class Nave extends Actor {
    public paso: any;
    public teclado_habilitado: any;
    public enemigos: any;
    constructor(x: any, y: any);
    public habilitar_teclado(): string;
    public actualizar(): void;
    public disparar(): string;
    public avanzar(velocidad: any): void;
    public definir_enemigos(enemigos: any): string;
}
declare class Pelota extends Actor {
    public figura: any;
    constructor(x: any, y: any);
    public empujar(dx: any, dy: any): string;
    public posicion(x: any, y: any): void;
}
declare class Piedra extends Actor {
    public dx: any;
    public dy: any;
    constructor(x: any, y: any, tamano: any, dx: any, dy: any);
    public actualizar(): void;
    public empujar(dx: any, dy: any): string;
    public clonar(veces: any): string;
    public obtener_tamano_al_azar(): string;
}
declare class Pingu extends Actor {
    public paso: any;
    public cuadros_correr: any;
    public saltando: any;
    constructor(x?: number, y?: number);
    public actualizar(): void;
    public puede_saltar(): void;
    public mover(x: any, y: any): void;
    public animacion_correr(): void;
    public detener_animacion(): void;
}
declare class Pizarra extends Actor {
    public container: any;
    public lienzo: any;
    public _ancho: any;
    public _alto: any;
    constructor(x?: number, y?: number);
    public dibujar_punto(x: any, y: any, color?: any): void;
    public linea(x: any, y: any, x2: any, y2: any, color?: any, grosor?: number): void;
    public rectangulo(x: any, y: any, ancho: any, alto: any, color?: any, relleno?: any, grosor?: number): void;
    public poligono(puntos: any, color?: any, grosor?: number): void;
    public limpiar(): void;
    public pintar(color: any): void;
}
declare class Proyectil extends Actor {
    public paso: any;
    public enemigos: any;
    constructor(x: any, y: any, atributos: any);
    public actualizar(): void;
    public analizar_colisiones(): void;
}
declare class Texto extends Actor {
    public s: any;
    public container: any;
    public texto: any;
    public color: any;
    public sprite_texto: any;
    constructor(x: any, y: any, texto: any, color: any);
    public crear_texto(): void;
    public eliminar_texto(): void;
    public eliminar(): void;
    public escala_x : any;
    public escala_y : any;
    public escala : any;
}
declare class Puntaje extends Texto {
    public valor: any;
    constructor(x: any, y: any, puntaje: any, color: any);
    public aumentar(aumento: any): void;
    public obtener(): any;
}
declare class Tortuga extends Actor {
    public anterior_x: any;
    public anterior_y: any;
    public pizarra: any;
    public lapiz_bajo: any;
    public _color: any;
    constructor(x?: number, y?: number, dibuja?: boolean);
    public avanzar(pasos: any): void;
    public girarderecha(delta: any): void;
    public girarizquierda(delta: any): void;
    public actualizar(): void;
    public bajalapiz(): void;
    public subelapiz(): void;
    public crear_poligono(lados?: number, escala?: number, sentido?: number): void;
    public crear_circulo(radio: any, sentido?: number): void;
    public color : any;
}
declare class Zanahoria extends Actor {
    public cuadro_normal: any;
    public cuadro_sonrie: any;
    constructor(x: any, y: any);
    public normal(): void;
    public sonreir(): void;
    public saltar(): void;
    public decir(): void;
}
declare class Camara {
    public escenario: any;
    public centro_x: any;
    public centro_y: any;
    constructor(escenario: any);
    public x : any;
    public y : any;
    public zoom : any;
    public obtener_posicion_pantalla(x: any, y: any): {
        x: any;
        y: number;
    };
    public obtener_posicion_escenario(x: any, y: any): {
        x: number;
        y: number;
    };
    public obtener_posicion(): {
        x: number;
        y: any;
    };
    public convertir_de_posicion_relativa_a_fisica(x: any, y: any): {
        x: any;
        y: number;
    };
    public convertir_de_posicion_fisica_a_relativa(x: any, y: any): {
        x: any;
        y: number;
    };
    public obtener_area_visible(): {
        izquierda: number;
        derecha: any;
        arriba: any;
        abajo: number;
    };
}
declare class Colisiones {
    public colisiones: any;
    constructor();
    public agregar(grupo_a: any, grupo_b: any, funcion_a_llamar: any, parent?: any): void;
    public verificar_colisiones(): void;
    public _verificar_colisiones_en_tupla(tupla: any): void;
}
declare class colores {
    public negro: any;
    public blanco: any;
    public rojo: any;
    public verde: any;
    public azul: any;
    public gris: any;
    public amarillo: any;
    public magenta: any;
    public cyan: any;
    public grisclaro: any;
    public grisoscuro: any;
    public verdeoscuro: any;
    public azuloscuro: any;
    public naranja: any;
    public rosa: any;
    public violeta: any;
    public marron: any;
    public negro_transparente: any;
    public blanco_transparente: any;
    public rojo_transparente: any;
    public verde_transparente: any;
    public azul_transparente: any;
    public gris_transparente: any;
    constructor();
}
declare class Comportamiento {
    public receptor: any;
    public argumentos: any;
    constructor(argumentos: any);
    public iniciar(receptor: any): void;
    public actualizar(): void;
    public eliminar(): void;
}
declare class AvanzarComoProyectil extends Comportamiento {
    public velocidad: any;
    public dx: any;
    public dy: any;
    public iniciar(receptor: any): void;
    public actualizar(): void;
}
declare class Avanzar extends Comportamiento {
    public pasos: any;
    public velocidad: any;
    public dx: any;
    public dy: any;
    public iniciar(receptor: any): void;
    public actualizar(): boolean;
}
declare class Girar extends Comportamiento {
    public angulo: any;
    public tiempo: any;
    public angulo_aux: any;
    public iniciar(receptor: any): void;
    public actualizar(): boolean;
}
declare class Saltar extends Comportamiento {
    public cuando_termina: any;
    public suelo: any;
    public velocidad_inicial: any;
    public velocidad: any;
    public velocidad_aux: any;
    public sonido_saltar: any;
    public iniciar(receptor: any): void;
    public actualizar(): boolean;
}
declare class Saltando extends Comportamiento {
    public suelo: any;
    public dy: any;
    public cuando_termina: any;
    public iniciar(receptor: any): void;
    public actualizar(): boolean;
}
declare class Orbitar extends Comportamiento {
    public punto_de_orbita_x: any;
    public punto_de_orbita_y: any;
    public radio: any;
    public velocidad: any;
    public direccion: any;
    public angulo: any;
    public iniciar(receptor: any): void;
    public actualizar(): void;
    public mover_astro(): void;
}
declare class OrbitarSobreActor extends Orbitar {
    public actor: any;
    public iniciar(receptor: any): void;
    public actualizar(): void;
}
declare class CaminarBase extends Comportamiento {
    public pasos: any;
    public velocidad: any;
    public iniciar(receptor: any): void;
    public actualizar(): boolean;
    public mover(): void;
}
declare class CaminaArriba extends CaminarBase {
    public mover(): void;
}
declare class CaminaAbajo extends CaminarBase {
    public mover(): void;
}
declare class CaminaIzquierda extends CaminarBase {
    public mover(): void;
}
declare class CaminaDerecha extends CaminarBase {
    public mover(): void;
}
declare class Comportamientos {
    public Subir: any;
    public CaminarBase: any;
    public CaminaArriba: any;
    public CaminaAbajo: any;
    public CaminaIzquierda: any;
    public CaminaDerecha: any;
    public Orbitar: any;
    public OrbitarSobreActor: any;
    public Saltar: any;
    public Girar: any;
    public Avanzar: any;
    public AvanzarComoProyectil: any;
    public Saltando: any;
    constructor();
}
declare class Control {
    public izquierda: any;
    public derecha: any;
    public arriba: any;
    public abajo: any;
    public boton: any;
    constructor(escena: any);
    public recibir(evento: any, tipo: any): void;
    public cuando_pulsa_una_tecla(evento: any): void;
    public cuando_suelta_una_tecla(evento: any): void;
}
declare class DepuradorDeshabilitado {
    public modos: any;
    public diccionario_modos: any;
    constructor();
    public actualizar(): void;
    public definir_modos(modos: any): void;
    public eliminar_todos_los_modos(): void;
    public obtener_modos(): any;
}
declare class ModoDeDepuracion {
    public shape: any;
    public container: any;
    public grosor_linea: any;
    constructor();
    public eliminar(): void;
    public actualizar(): void;
}
declare class ModoRadiosDeColision extends ModoDeDepuracion {
    public actualizar(): void;
}
declare class ModoArea extends ModoDeDepuracion {
    public actualizar(): void;
}
declare class ModoPuntosDeControl extends ModoDeDepuracion {
    public actualizar(): void;
}
declare class ModoFisica extends ModoDeDepuracion {
    public actualizar(): void;
}
declare class ModoPosicion extends ModoDeDepuracion {
    public text_coordenada: any;
    public eje: any;
    constructor();
    private sobre_escribir_dibujado();
    public eliminar(): void;
    public actualizar(): void;
}
declare class escena {
    public Base: any;
    public Normal: any;
    constructor();
}
declare class Base {
    public click_de_mouse: any;
    public cuando_termina_click: any;
    public mueve_mouse: any;
    public actualiza: any;
    public pulsa_tecla: any;
    public suelta_tecla: any;
    public fisica: any;
    public stage: any;
    public camara: any;
    public control: any;
    public actores: any;
    public tareas: any;
    constructor();
    public iniciar(): void;
    public actualizar(): void;
    public ordenar_actores_por_valor_z(): void;
    public agregar_actor(actor: any): void;
    public eliminar_actor(actor: any): void;
    public obtener_posicion_pantalla(x: any, y: any): any;
    public obtener_posicion_escenario(x: any, y: any): any;
}
declare class Normal extends Base {
    public fondo: any;
    public iniciar(): void;
}
declare class Evento {
    public respuestas: any;
    public nombre: any;
    constructor(nombre: any);
    public emitir(evento: any): void;
    public conectar(respuesta: any): void;
    public desconectar(respuesta: any): void;
}
declare var Box2D: any;
declare var PPM: number;
declare var box2d: {
    b2Vec2: any;
    b2AABB: any;
    b2BodyDef: any;
    b2Body: any;
    b2FixtureDef: any;
    b2Fixture: any;
    b2World: any;
    b2PolygonShape: any;
    b2DebugDraw: any;
    b2MouseJointDef: any;
};
declare function convertir_a_metros(valor: any): number;
declare function convertir_a_pixels(valor: any): number;
declare class Figura {
    public cuerpo: any;
    public camara: any;
    public fisica: any;
    public id: any;
    constructor(fisica: any);
    public x : any;
    public y : any;
    public rotacion : number;
    public obtener_posicion(): any;
    public definir_posicion(x: any, y: any): void;
    public obtener_rotacion(): number;
    public definir_rotacion(angulo: any): void;
    public empujar(dx: any, dy: any): void;
    public eliminar(): void;
}
declare class Rectangulo extends Figura {
    constructor(fisica: any, x: any, y: any, ancho: any, alto: any, opciones: any);
}
declare class Circulo extends Figura {
    public _radio: any;
    public _escala: any;
    constructor(fisica: any, x: any, y: any, radio: any, opciones: any);
    public definir_radio(): void;
    public radio : any;
    public escala : any;
}
declare class Fisica {
    public mundo: any;
    public Circulo: any;
    public Rectangulo: any;
    public camara: any;
    public velocidad: any;
    public timeStep: any;
    constructor(camara: any);
    public actualizar(): void;
    public definir_gravedad(dx: any, dy: any): void;
    public dibujar_figuras_sobre_lienzo(graphics: any): void;
    public convertir_vector_relativo_a_pantalla(cuerpo: any, x: any, y: any, v: any): {
        x: any;
        y: any;
    };
    public createBox(width: any, height: any, pX: any, pY: any, type: any, data: any): any;
    public crear_rectangulo(x: any, y: any, ancho: any, alto: any, opciones: any): any;
    public crear_circulo(x: any, y: any, radio: any, opciones: any): any;
}
declare class ConstanteDeMovimiento {
    public constante: any;
    public cuerpo_enlazado: any;
    constructor(figura: any, evento: any);
    public mover(x: any, y: any): void;
    public eliminar(): void;
}
declare class Fondo extends Actor {
    constructor(imagen: any, x: any, y: any);
}
declare class Tarde extends Fondo {
    constructor();
}
declare class Plano extends Fondo {
    constructor();
    public crear_sprite(): void;
    public actualizar(): void;
}
declare class Pasto extends Fondo {
    constructor();
    public crear_sprite(): void;
    public actualizar(): void;
}
declare class PastoCuadriculado extends Fondo {
    constructor();
    public actualizar(): void;
}
declare class Fondos {
    public Plano: any;
    public Pasto: any;
    public PastoCuadriculado: any;
    public Tarde: any;
    constructor();
}
declare class GestorDeEscenas {
    public escena: any;
    constructor();
    public cambiar_escena(nueva_escena: any): void;
    public actualizar(): void;
    public escena_actual(): any;
}
declare class grupo {
    public Grupo: any;
    constructor();
}
declare class HGrupo {
    constructor();
    public pop(): any;
    public push(val: any): number;
    public length: number;
}
declare class Grupo extends HGrupo {
    constructor(actor_o_array: any);
    public agregar_grupo(grupo: any): void;
    public agregar_actor(actor: any): void;
    public x : any[];
    public y : any[];
    public escala : any[];
    public rotacion : any[];
    public aprender(habilidad: any, argumentos?: any): void;
    public hacer(comportamiento: any, argumentos?: any): void;
    public hacer_luego(comportamiento: any, argumentos?: any): void;
    public decir(mensaje: any): void;
    public eliminar(): void;
    public __getattr__(attr: any): any[];
    public __setattr__(attr: any, valor: any): void;
    public ejecutar_funcion(id: any, argumentos1?: any, argumentos2?: any): void;
}
declare class Habilidad {
    public receptor: any;
    public argumentos: any;
    constructor(receptor: any, argumentos?: any);
    public actualizar(): void;
    public eliminar(): void;
}
declare class Imitar extends Habilidad {
    public objeto_a_imitar: any;
    public con_rotacion: any;
    constructor(receptor: any, argumentos: any);
    public actualizar(): void;
}
declare class PuedeExplotar extends Habilidad {
    constructor(receptor: any);
}
declare class SeguirAlMouse extends Habilidad {
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
    public mover(evento: any): void;
}
declare class SeguirClicks extends Habilidad {
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
    public moverse_a_este_punto(evento: any): void;
}
declare class MoverseConElTeclado extends Habilidad {
    public en_movimiento: any;
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
    public mover(x: any, y: any): void;
}
declare class MoverseConElTecladoConRotacion extends Habilidad {
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
}
declare class Arrastrable extends Habilidad {
    public debe_arrastrar: any;
    public constante: any;
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
    public cuando_intenta_arrastrar(evento: any): void;
    public cuando_arrastra(evento: any): void;
    public cuando_termina_de_arrastrar(evento: any): void;
    public comienza_a_arrastrar(evento: any): void;
    public termina_de_arrastrar(): void;
}
declare class Disparar extends Habilidad {
    public contador: any;
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
}
declare class RebotarComoPelota extends Habilidad {
    constructor(receptor: any);
}
declare class RebotarComoCaja extends Habilidad {
    constructor(receptor: any);
}
declare class SeMantieneEnPantalla extends Habilidad {
    constructor(receptor: any);
    public recibir(evento: any, tipo: any): void;
}
declare class Habilidades {
    public Arrastrable: any;
    public PuedeExplotar: any;
    public SeguirAlMouse: any;
    public SeguirClicks: any;
    public MoverseConElTeclado: any;
    public MoverseConElTecladoConRotacion: any;
    public SeMantieneEnPantalla: any;
    public Disparar: any;
    public RebotarComoPelota: any;
    public RebotarComoCaja: any;
    public Imitar: any;
    constructor();
}
declare class Imagenes {
    public data_path: string;
    public recursos: any;
    public imagenes_solicitadas: any;
    public loader: any;
    constructor(callback_onready: any, data_path: any);
    private cargar_recursos();
    private cargar_recurso(nombre);
    public cargar(nombre: any): Imagen;
    public cargar_grilla(nombre: any, columnas?: number, filas?: number): Grilla;
}
declare class Imagen {
    public ruta: any;
    public imagen: any;
    constructor(imagen: any);
    public instanciar(): any;
    public ancho : any;
    public alto : any;
}
declare class Grilla extends Imagen {
    public columnas: any;
    public filas: any;
    public sprite: any;
    public cuadro: any;
    constructor(imagen: any, columnas?: number, filas?: number);
    public instanciar(): any;
    public cantidad_cuadros : number;
    public definir_cuadro(numero_de_cuadro: any): void;
    public avanzar(): boolean;
}
declare class Interpolaciones {
    public interpolar(objeto: any, atributo: any, valor_o_valores: any, tiempo: any, tipo: any): void;
    public AceleracionGradual(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
    public DesaceleracionGradual(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
    public ReboteInicial(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
    public ReboteFinal(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
    public ElasticoInicial(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
    public ElasticoFinal(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): void;
}
declare class Mundo {
    public gestor_escenas: any;
    public depurador: any;
    constructor();
    public actualizar(): void;
    public definir_modos(modos: any): void;
    public obtener_modos(): any;
    public agregar_tarea_una_vez(tiempo: any, funcion: any, parametros?: any, parent?: any): void;
    public agregar_tarea_siempre(tiempo: any, funcion: any, parametros?: any, parent?: any): void;
}
declare var pilas: any;
declare var PxLoader: any;
declare var createjs: any;
declare class Pilas {
    public canvas: any;
    public opciones: any;
    public mundo: any;
    public fondos: any;
    public imagenes: any;
    public actores: any;
    public habilidades: any;
    public comportamientos: any;
    public utils: any;
    public grupo: any;
    public tareas: any;
    public interpolaciones: any;
    public colisiones: any;
    public colores: any;
    public sonidos: any;
    public escena: any;
    public ready: any;
    public iniciar(opciones: any): void;
    public reiniciar(): void;
    public escena_actual(): any;
    private inicializar_opciones(opciones);
    private definir_tamano_del_canvas();
    private obtener_codigo_y_texto_desde_evento(event);
    private conectar_eventos();
    private obtener_posicion_desde_evento(canvas, event);
    private obtener_canvas();
    public onready(): void;
    public ejecutar(): void;
    public actualizar(): void;
    public interpolar(objeto: any, atributo: any, valor_o_valores: any, tiempo: any): any;
    public definir_modos(modos: any): void;
    public mostrar_posiciones(): string;
    public ocultar_posiciones(): string;
    public mostrar_fisica(): string;
    public ocultar_fisica(): string;
}
declare var simbolos: {
    IZQUIERDA: number;
    DERECHA: number;
    ARRIBA: number;
    ABAJO: number;
    ESPACIO: number;
    W: number;
    A: number;
    S: number;
    D: number;
    J: number;
};
declare class Sonidos {
    public recursos: any;
    public preload: any;
    constructor(data_path: any);
    private cargar_recursos();
    private cargar_recurso(nombre);
    public cargar(nombre: any): Sonido;
}
declare class Sonido {
    public nombre: any;
    constructor(nombre: any);
    public reproducir(repetir?: boolean): any;
    public detener(): any;
}
declare class tareas {
    public Tareas: any;
    constructor();
}
declare class Tarea {
    public tiempo: any;
    public tiempo_aux: any;
    public funcion: any;
    public una_vez: any;
    public parametros: any;
    public parent: any;
    constructor(tiempo: any, funcion: any, una_vez: any, parametros: any, parent: any);
    public ejecutar(): void;
}
declare class Tareas {
    public tareas_planificadas: any;
    public contador_de_tiempo: any;
    constructor();
    public _agregar_tarea(tarea: any): void;
    public siempre(tiempo: any, funcion: any, parametros: any, parent: any): void;
    public una_vez(tiempo: any, funcion: any, parametros: any, parent: any): void;
    public actualizar(): void;
}
declare var Math: Math;
declare class Utils {
    public convertir_a_grados(angulo_en_radianes: any): number;
    public convertir_a_radianes(angulo_en_grados: any): number;
    public colisionan(a: any, b: any): boolean;
    public distancia_entre_dos_actores(a: any, b: any): number;
    public distancia_entre_dos_puntos(x1: any, y1: any, x2: any, y2: any): number;
    public obtener_uuid(): any;
    public distancia(a: any, b: any): number;
    public fabricar(clase: any, cantidad?: number, posiciones_al_azar?: boolean): any;
}
