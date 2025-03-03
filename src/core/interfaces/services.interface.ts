export enum Services {
    impermeabilizacao = 'impermeabilizacao',
    telhados = 'telhados',
    revestimento = 'revestimento',
    epoxi = 'epoxi',
    hidraulica = 'hidraulica',
    eletrica = 'eletrica',
    alvenaria = 'alvenaria',
    ferragens = 'ferragens',
    piscina = 'piscina',
}

export interface ServiceUrl {
    [service: string]: string;
}