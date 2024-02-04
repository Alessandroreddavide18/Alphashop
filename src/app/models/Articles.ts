export interface IArticles{
    codArt: string
    descrizione: string
    um: string
    codStat: string
    pzCart : number
    pesoNetto: number
    prezzo: number
    idStatoArt: string
    desStatoArt: string
    dataCreazione: Date
    imageUrl: string
    famAssort: ICat
    iva: Iiva
    barcode: IBarcode[]
}

export interface Iiva {
  idIva: number
  descrizione: string
  aliquota: number
}

export interface ICat{
  id: number
  descrizione: string
}

export interface IBarcode{
  barcode: string
  idTipoArt: string
}