export class AyM {
  public id: Number;
  public nombre: String;
  public apellido: String;
  public mail: String;
  public fechanacimiento: String;
  public montoA: String;
  public montoM: String;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.nombre = obj && obj.nombre || '';
    this.apellido = obj && obj.apellido || '';
    this.mail = obj && obj.mail || '';
    this.fechanacimiento = obj && obj.fechanacimiento || '';
    this.montoA = obj && obj.montoA || '';
    this.montoM = obj && obj.montoM || '';
  }
}
