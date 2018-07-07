export class Telefono {
    id: any;
    nombre: string;
    apellido: string;
    profesion: string;
    club: string;
    telefono: number;

  constructor(obj?: any) {
    this.id = obj && obj._id || 0;
    this.nombre = obj && obj.nombre || '';
    this.apellido = obj && obj.apellido || '';
    this.profesion = obj && obj.profesion || '';
    this.club = obj && obj.club || '';
    this.telefono = obj && obj.telefono || '';
  }

}
