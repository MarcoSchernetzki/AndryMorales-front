import { ProductI } from '../../feature/wishes/model/product';

export const data: Array<ProductI> = [
    {
        id: '1',
        name: 'diseño de cejas',
        image: './assets/diseño-de-cejas-1.JPG',
        price: 12,
        category: 'servicio',
        area: 'cejas',
        description:
            'Cada vez mas, la tendencia se orienta a unas cejas definidas, naturales y pobladas.',
        isAvailable: true,
        duration: '30 min',
        clients: [],
    },
    {
        id: '2',
        name: 'laminado de cejas + diseño',
        image: './assets/laminado-de-cejas-mas-diseño.jpg',
        price: 32,
        category: 'servicio',
        area: 'cejas',
        description:
            'No hay ceja que sea demasiado grande o demasiado pequeña para unas cejas de alta definicion, un tratamiento cosmetico que combina habilmente la remodelacion de la forma con la aplicación del maquillaje para un resultado hiper elegante.',
        isAvailable: true,
        duration: '1:30 hs',
        clients: [],
    },
    {
        id: '3',
        name: 'Pestañas volumen light',
        image: './assets/pestañas-volumen-light1.jpg',
        price: 50,
        category: 'servicio',
        area: 'pestañas',
        description:
            'Las extensiones volumen light te proporcionan un look discreto, natural y delicado, ya que se trabaja un grosor menor que aquel utilizado en las extensiones clasicas tradicionales. Ideal para aquellas personas que prueban por primera vez extensiones de pestañas.',
        isAvailable: true,
        duration: '3:00 hs',
        clients: [],
    },
    {
        id: '4',
        name: 'Pestañas volumen medio',
        image: './assets/pestañas-volumen-medio-1.jpg',
        price: 65,
        category: 'servicio',
        area: 'pestañas',
        description:
            'Las extensiones volumen medio se adhieren desde 4 hasta 6 pestañas sinteticas por cada pestaña natural, dando como resultado un efecto mas voluptuoso.',
        isAvailable: true,
        duration: '3:30 hs',
        clients: [],
    },
    {
        id: '5',
        name: 'Lifting de pestañas + Tinte',
        image: './assets/lifting-pestañas-mas-tinte-1.jpg',
        price: 30,
        category: 'servicio',
        area: 'pestañas',
        description:
            'El lifting de pestañas da un efecto de mayor longitud y espesor, llegando a todos los pelos de forma inmediata. La duracion aproximada es de 2 meses y no necesita reposicion.',
        isAvailable: true,
        duration: '1:30 hs',
        clients: [],
    },
];

export type DataComentType = {
    id: string;
    image: string;
};

export const dataComent: Array<DataComentType> = [
    { id: '1', image: './assets/comments/comentario-1.png' },
    { id: '2', image: './assets/comments/comentario-2.png' },
    { id: '3', image: './assets/comments/comentario-3.png' },
    { id: '4', image: './assets/comments/comentario-4.png' },
    { id: '5', image: './assets/comments/comentario-5.png' },
];
export const dataCertificate: Array<string> = [
    './assets/certificate/certificado-phiacademy.png',
    './assets/certificate/certificado-beautylash.jpg',
    './assets/certificate/certificado-philashes.jpg',
];
