export class IngresoSabados {
  public id: Number;
  public estacionamiento: String;
  public entradas: String;
  public buffet: String;
  public taquillero: String;
  public montoArbitros: String;
  public montoMedicos: String;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.estacionamiento = obj && obj.estacionamiento || '';
    this.entradas = obj && obj.entradas || '';
    this.buffet = obj && obj.buffet || '';
    this.taquillero = obj && obj.taquillero || '';
    this.montoArbitros = obj && obj.montoArbitros || '';
    this.montoMedicos = obj && obj.montoMedicos || '';
  }
}

// export class IngresoDomingos {
//   public id: Number;
//   public estacionamiento: String;
//   public entradas: String;
//   public buffet: String;
//   public taquillero: String;
//   public montoArbitros: String;
//   public montoMedicos: String;
//
//   constructor(obj?: any) {
//     this.id = obj && obj._id || 0;
//     this.estacionamiento = obj && obj.estacionamiento || '';
//     this.entradas = obj && obj.entradas || '';
//     this.buffet = obj && obj.buffet || '';
//     this.taquillero = obj && obj.taquillero || '';
//     this.montoArbitros = obj && obj.montoArbitros || '';
//     this.montoMedicos = obj && obj.montoMedicos || '';
//   }
// }
