export class Micro {
    id: any;
    destino: string;
    monto: number;
    empresa: string;
    nmicro: number;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.destino = obj && obj.destino || '';
    this.monto = obj && obj.monto || '';
    this.empresa = obj && obj.empresa || '';
    this.nmicro = obj && obj.nmicro || '';

  }
}
