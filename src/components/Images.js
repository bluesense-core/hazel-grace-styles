import { nanoid } from 'nanoid';
// Naledi Images
import altair from '../img/shop-img/naledi/altair/main-altair.png';
import altthumb1 from '../img/shop-img/naledi/altair/thumb-alt1.jpg';
import altthumb2 from '../img/shop-img/naledi/altair/thumb-alt2.jpg';
import arcturus from '../img/shop-img/naledi/arcturus/main-arcturus.png';
import arcthumb1 from '../img/shop-img/naledi/arcturus/thumb-arc1.png';
import arcthumb2 from '../img/shop-img/naledi/arcturus/thumb-arc2.png';
import canopus from '../img/shop-img/naledi/canopus/main-canopus.png';
import canthumb from '../img/shop-img/naledi/canopus/thumb-can.jpg';
import castor from '../img/shop-img/naledi/castor/main-castor.png';
import castthumb from '../img/shop-img/naledi/castor/thumb-cast.png';
import orion from '../img/shop-img/naledi/orion/main-orion.png';
import orithumb from '../img/shop-img/naledi/orion/thumb-ori.jpg';
import procyon from '../img/shop-img/naledi/procyon/main-procyon.png';
import procthumb from '../img/shop-img/naledi/procyon/thumb-proc.jpg';
import rigel from '../img/shop-img/naledi/rigel/main-rigel.png';
import rigthumb from '../img/shop-img/naledi/rigel/thumb-rig.jpg';
import sirius from '../img/shop-img/naledi/sirius/main-sirius.png';
import sirthumb from '../img/shop-img/naledi/sirius/thumb-sir.jpg';
import venus from '../img/shop-img/naledi/venus/main-venus.png';
import venthumb1 from '../img/shop-img/naledi/venus/thumb-ven1.jpg';
import venthumb2 from '../img/shop-img/naledi/venus/thumb-ven2.jpg';

// Genesis Images
import anita from '../img/shop-img/genesis/anita/main-anita.png';
import anithumb1 from '../img/shop-img/genesis/anita/thumb-ani1.jpg';
import anithumb2 from '../img/shop-img/genesis/anita/thumb-ani2.jpg';
import bb from '../img/shop-img/genesis/bb/main-bb.png';
import bbthumb1 from '../img/shop-img/genesis/bb/thumb-bb1.jpg';
import bbthumb2 from '../img/shop-img/genesis/bb/thumb-bb2.jpg';
import chia from '../img/shop-img/genesis/chia/main-chia.png';
import esta from '../img/shop-img/genesis/esta/main-esta.png';
import estathumb1 from '../img/shop-img/genesis/esta/thumb-esta1.jpg';
import estathumb2 from '../img/shop-img/genesis/esta/thumb-esta2.jpg';
import grace from '../img/shop-img/genesis/grace/main-grace.png';
import gracethumb from '../img/shop-img/genesis/grace/thumb-grace.jpg';
import hazel from '../img/shop-img/genesis/hazel/main-hazel.png';
import jessica from '../img/shop-img/genesis/jessica/main-jessica.png';
import jessthumb from '../img/shop-img/genesis/jessica/thumb-jess.jpg';
import naomi from '../img/shop-img/genesis/naomi/main-naomi.png';
import naothumb1 from '../img/shop-img/genesis/naomi/thumb-nao1.jpg';
import naothumb2 from '../img/shop-img/genesis/naomi/thumb-nao2.jpg';
import pink from '../img/shop-img/genesis/pink/main-pink.png';
import pinkthumb from '../img/shop-img/genesis/pink/thumb-pink.jpeg';
import pistachio from '../img/shop-img/genesis/pistachio/main-pist.png';
import pomegranate from '../img/shop-img/genesis/pomegranate/main-pome.png';
import quinoa from '../img/shop-img/genesis/quinoa/main-quin.png';
import ruth from '../img/shop-img/genesis/ruth/main-ruth.png';
import ruththumb1 from '../img/shop-img/genesis/ruth/thumb-ruth1.jpg';
import ruththumb2 from '../img/shop-img/genesis/ruth/thumb-ruth2.jpg';
import sesame from '../img/shop-img/genesis/sesame/main-sesame.png';
import wildrice from '../img/shop-img/genesis/wildrice/main-wild.png';
import yellow from '../img/shop-img/genesis/yellow/main-yell.png';
import yellthumb from '../img/shop-img/genesis/yellow/thumb-yell.jpeg';

// Naledi Data
const nalediData = [
    {
        id: nanoid(),
        src: arcturus,
        alt: 'Arcturus Blouse',
        price: 60000,
        carousel: [
            {
                original: arcturus,
                thumbnail: arcturus,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Arcturus Blouse',
                thumbnailAlt: 'Arcturus Blouse',
                loading: 'lazy',
            },
            {
                original: arcthumb1,
                thumbnail: arcthumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Arcturus Blouse',
                thumbnailAlt: 'Arcturus Blouse',
                loading: 'lazy',
            },
            {
                original: arcthumb2,
                thumbnail: arcthumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Arcturus Blouse',
                thumbnailAlt: 'Arcturus Blouse',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: canopus,
        alt: 'Canopus Dress',
        price: 55000,
        carousel: [
            {
                original: canopus,
                thumbnail: canopus,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Canopus Dress',
                thumbnailAlt: 'Canopus Dress',
                loading: 'lazy',
            },
            {
                original: canthumb,
                thumbnail: canthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Canopus Dress',
                thumbnailAlt: 'Canopus Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: orion,
        alt: 'Orion Dress',
        price: 50000,
        carousel: [
            {
                original: orion,
                thumbnail: orion,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Orion Dress',
                thumbnailAlt: 'Orion Dress',
                loading: 'lazy',
            },
            {
                original: orithumb,
                thumbnail: orithumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Orion Dress',
                thumbnailAlt: 'Orion Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: castor,
        alt: 'Castor Ensemble',
        price: 60000,
        carousel: [
            {
                original: castor,
                thumbnail: castor,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Castor Ensemble',
                thumbnailAlt: 'Castor Ensemble',
                loading: 'lazy',
            },
            {
                original: castthumb,
                thumbnail: castthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Castor Ensemble',
                thumbnailAlt: 'Castor Ensemble',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: rigel,
        alt: 'Rigel Dress',
        price: 40000,
        carousel: [
            {
                original: rigel,
                thumbnail: rigel,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Rigel Dress',
                thumbnailAlt: 'Rigel Dress',
                loading: 'lazy',
            },
            {
                original: rigthumb,
                thumbnail: rigthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Rigel Dress',
                thumbnailAlt: 'Rigel Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: procyon,
        alt: 'Procyon Ensemble',
        price: 40000,
        carousel: [
            {
                original: procyon,
                thumbnail: procyon,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Procyon Ensemble',
                thumbnailAlt: 'Procyon Ensemble',
                loading: 'lazy',
            },
            {
                original: procthumb,
                thumbnail: procthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Procyon Ensemble',
                thumbnailAlt: 'Procyon Ensemble',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: altair,
        alt: 'Altair Dress',
        price: 35000,
        carousel: [
            {
                original: altair,
                thumbnail: altair,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Altair Dress',
                thumbnailAlt: 'Altair Dress',
                loading: 'lazy',
            },
            {
                original: altthumb1,
                thumbnail: altthumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Altair Dress',
                thumbnailAlt: 'Altair Dress',
                loading: 'lazy',
            },
            {
                original: altthumb2,
                thumbnail: altthumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Altair Dress',
                thumbnailAlt: 'Altair Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: sirius,
        alt: 'Sirius Dress',
        price: 30000,
        carousel: [
            {
                original: sirius,
                thumbnail: sirius,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Sirius Dress',
                thumbnailAlt: 'Sirius Dress',
                loading: 'lazy',
            },
            {
                original: sirthumb,
                thumbnail: sirthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Sirius Dress',
                thumbnailAlt: 'Sirius Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: venus,
        alt: 'Venus Dress',
        price: 30000,
        carousel: [
            {
                original: venus,
                thumbnail: venus,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Venus Dress',
                thumbnailAlt: 'Venus Dress',
                loading: 'lazy',
            },
            {
                original: venthumb1,
                thumbnail: venthumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Venus Dress',
                thumbnailAlt: 'Venus Dress',
                loading: 'lazy',
            },
            {
                original: venthumb2,
                thumbnail: venthumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Venus Dress',
                thumbnailAlt: 'Venus Dress',
                loading: 'lazy',
            },
        ],
    },
];

const genesisData = [
    {
        id: nanoid(),
        src: pomegranate,
        alt: 'Pomegranate Blouse',
        price: 25000,
        carousel: [
            {
                original: pomegranate,
                thumbnail: pomegranate,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Pomegranate Blouse',
                thumbnailAlt: 'Pomegranate Blouse',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: hazel,
        alt: 'Hazel Shirt',
        price: 15000,
        carousel: [
            {
                original: hazel,
                thumbnail: hazel,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Hazel Shirt',
                thumbnailAlt: 'Hazel Shirt',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: pistachio,
        alt: 'Pistachio Blouse',
        price: 25000,
        carousel: [
            {
                original: pistachio,
                thumbnail: pistachio,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Pistachio Blouse',
                thumbnailAlt: 'Pistachio Blouse',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: grace,
        alt: 'Grace Dress',
        price: 45000,
        carousel: [
            {
                original: grace,
                thumbnail: grace,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Grace Dress',
                thumbnailAlt: 'Grace Dress',
                loading: 'lazy',
            },
            {
                original: gracethumb,
                thumbnail: gracethumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Grace Dress',
                thumbnailAlt: 'Grace Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: jessica,
        alt: 'Jessica Dress',
        price: 20000,
        carousel: [
            {
                original: jessica,
                thumbnail: jessica,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Jessica Dress',
                thumbnailAlt: 'Jessica Dress',
                loading: 'lazy',
            },
            {
                original: jessthumb,
                thumbnail: jessthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Jessica Dress',
                thumbnailAlt: 'Jessica Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: anita,
        alt: 'Anita Dress',
        price: 25000,
        carousel: [
            {
                original: anita,
                thumbnail: anita,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Anita Dress',
                thumbnailAlt: 'Anita Dress',
                loading: 'lazy',
            },
            {
                original: anithumb1,
                thumbnail: anithumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Anita Dress',
                thumbnailAlt: 'Anita Dress',
                loading: 'lazy',
            },
            {
                original: anithumb2,
                thumbnail: anithumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Anita Dress',
                thumbnailAlt: 'Anita Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: naomi,
        alt: 'Naomi Dress',
        price: 25000,
        carousel: [
            {
                original: naomi,
                thumbnail: naomi,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Naomi Dress',
                thumbnailAlt: 'Naomi Dress',
                loading: 'lazy',
            },
            {
                original: naothumb1,
                thumbnail: naothumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Naomi Dress',
                thumbnailAlt: 'Naomi Dress',
                loading: 'lazy',
            },
            {
                original: naothumb2,
                thumbnail: naothumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Naomi Dress',
                thumbnailAlt: 'Naomi Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: ruth,
        alt: 'Ruth Dress',
        price: 20000,
        carousel: [
            {
                original: ruth,
                thumbnail: ruth,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Ruth Dress',
                thumbnailAlt: 'Ruth Dress',
                loading: 'lazy',
            },
            {
                original: ruththumb1,
                thumbnail: ruththumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Ruth Dress',
                thumbnailAlt: 'Ruth Dress',
                loading: 'lazy',
            },
            {
                original: ruththumb2,
                thumbnail: ruththumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Ruth Dress',
                thumbnailAlt: 'Ruth Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: chia,
        alt: 'Chia Dress',
        price: 30000,
        carousel: [
            {
                original: chia,
                thumbnail: chia,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Chia Dress',
                thumbnailAlt: 'Chia Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: wildrice,
        alt: 'Wildrice Dress',
        price: 25000,
        carousel: [
            {
                original: wildrice,
                thumbnail: wildrice,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Wildrice Dress',
                thumbnailAlt: 'Wildrice Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: quinoa,
        alt: 'Quinoa Dress',
        price: 20000,
        carousel: [
            {
                original: quinoa,
                thumbnail: quinoa,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Quinoa Dress',
                thumbnailAlt: 'Quinoa Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: sesame,
        alt: 'Sesame Dress',
        price: 50000,
        carousel: [
            {
                original: sesame,
                thumbnail: sesame,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Sesame Dress',
                thumbnailAlt: 'Sesame Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: yellow,
        alt: 'Yellow Dress',
        price: 45000,
        carousel: [
            {
                original: yellow,
                thumbnail: yellow,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Yellow Dress',
                thumbnailAlt: 'Yellow Dress',
                loading: 'lazy',
            },
            {
                original: yellthumb,
                thumbnail: yellthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Yellow Dress',
                thumbnailAlt: 'Yellow Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: bb,
        alt: 'BB Ensemble',
        price: 30000,
        carousel: [
            {
                original: bb,
                thumbnail: bb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'BB Ensemble',
                thumbnailAlt: 'BB Ensemble',
                loading: 'lazy',
            },
            {
                original: bbthumb1,
                thumbnail: bbthumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'BB Ensemble',
                thumbnailAlt: 'BB Ensemble',
                loading: 'lazy',
            },
            {
                original: bbthumb2,
                thumbnail: bbthumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'BB Ensemble',
                thumbnailAlt: 'BB Ensemble',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: esta,
        alt: 'Esta Dress',
        price: 25000,
        carousel: [
            {
                original: esta,
                thumbnail: esta,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Esta Dress',
                thumbnailAlt: 'Esta Dress',
                loading: 'lazy',
            },
            {
                original: estathumb1,
                thumbnail: estathumb1,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Esta Dress',
                thumbnailAlt: 'Esta Dress',
                loading: 'lazy',
            },
            {
                original: estathumb2,
                thumbnail: estathumb2,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Esta Dress',
                thumbnailAlt: 'Esta Dress',
                loading: 'lazy',
            },
        ],
    },
    {
        id: nanoid(),
        src: pink,
        alt: 'Pink Blouse',
        price: 25000,
        carousel: [
            {
                original: pink,
                thumbnail: pink,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Pink Blouse',
                thumbnailAlt: 'Pink Blouse',
                loading: 'lazy',
            },
            {
                original: pinkthumb,
                thumbnail: pinkthumb,
                originalClass: 'originalImg',
                thumbnailClass: 'thumbImg',
                originalAlt: 'Pink Blouse',
                thumbnailAlt: 'Pink Blouse',
                loading: 'lazy',
            },
        ],
    },
];

// let cartItems = [];

export { nalediData, genesisData };
