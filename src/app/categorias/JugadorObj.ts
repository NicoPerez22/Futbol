export class Jugador {
  public id: number;
  public nsocio: string;
  public nombre: string;
  public apellido: string;
  public telefono: string;
  public fechapago: string;
  public observacion: string;
  public planillamed: string;
  public mail: string;
  public pago: string;


  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.nsocio = obj && obj.nsocio || '';
    this.nombre = obj && obj.nombre || '';
    this.apellido = obj && obj.apellido || '';
    this.telefono = obj && obj.telefono || '';
    this.fechapago = obj && obj.fechapago || '';
    this.observacion = obj && obj.observacion || '';
    this.planillamed = obj && obj.planillamed || '';
    this.mail = obj && obj.mail || '';
    this.pago = obj && obj.pago || '';
  }
}
