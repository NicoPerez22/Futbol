export class Sponsor {
    id: any;
    sponsor: string;
    montoParcial: number;
    monto: number;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.sponsor = obj && obj.sponsor || '';
    this.montoParcial = obj && obj.montoParcial || '';
    this.monto = obj && obj.monto || '';
  }
}
