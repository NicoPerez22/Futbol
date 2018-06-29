export class Gasto {
    public id: number;
    public nombre: string;
    public trabajo: string;
    public monto: string;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.nombre = obj && obj.nombre || '';
    this.trabajo = obj && obj.trabajo || '';
    this.monto = obj && obj.monto || '';
  }
}
