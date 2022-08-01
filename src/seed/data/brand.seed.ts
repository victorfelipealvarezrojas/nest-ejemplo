import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';


export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAd: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAd: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Volvo',
        createdAd: new Date().getTime()
    }
]