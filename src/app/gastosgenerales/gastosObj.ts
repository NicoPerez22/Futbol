export class Gasto {
    id: any;
    nombre: string;
    trabajo: string;
    monto: string;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.nombre = obj && obj.nombre || '';
    this.trabajo = obj && obj.trabajo || '';
    this.monto = obj && obj.monto || '';
}
}
