import React from 'react';
import VehicleList from './VehicleList';

const Catalog = () => {

    const vehicles = [
        {
            id: 1,
            imageUrl: 'https://loscoches.com/wp-content/uploads/2022/01/honda-civic-type-r-deportivo.jpg',
            description: 'Honda Civic',
            price: 25000
            
        },
        {
            id: 2,
            imageUrl:'https://www.latercera.com/resizer/o9pSNX27e4Habo1khwmsHtrr0Zs=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RP5XD5W7ERASLG5HD3LOVOXUQM.jpg',
            description: 'Mitsibishi Lancer',
            price: 30000,
        },
        {
            id: 3,
            imageUrl: 'https://neomotor.epe.es/binrepository/990x557/0c0/0d0/none/2594535/BNXT/imagen74_NM75_MG7770706.jpeg',
            description: 'Porsche Panamera',
            price: 40000,
        },

    ];

    return <VehicleList vehicles={vehicles}/>;

}

export default Catalog;