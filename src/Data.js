import { faCoffee, faCab, faStore, faHand, faHeart, faCalendar } from '@fortawesome/free-solid-svg-icons'
import blog1 from './assets/blog1.jpg';
import blog2 from './assets/blog2.jpg';
import blog3 from './assets/blog3.jpg';

const Data = {
    serv : [
        {
            icon: faCoffee,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon: faCab,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon: faStore,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon: faCalendar,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon: faHand,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon: faHeart,
            title: '1914 translation',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        }
    ],
    pricing : [
        {
            title: 'ECONOMY',
            price: '$9.90',
            time: 'Billing PER MONTH',
            Bandwidth: '1GB',
            Onlinespace: '50MB',
            Support: 'No',
            Domain: '1',
            Hiddenfees: 'No',
            class: 'box price'
        },
        {
            title: 'DELUXE',
            price: '$19.90',
            time: 'Billing PER MONTH',
            Bandwidth: '10GB',
            Onlinespace: '50MB',
            Support: 'No',
            Domain: '1',
            Hiddenfees: 'No',
            class: 'box price-deluxe'
        },
        {
            title: 'ULTIMATE',
            price: '$29.90',
            time: 'Billing PER MONTH',
            Bandwidth: '100GB',
            Onlinespace: '50MB',
            Support: 'No',
            Domain: 'Ultimated',
            Hiddenfees: 'No',
            class: 'box price'
        }
    ],
    blog: [
        {
            img: blog1,
            job: 'Web developer',
            title: 'popular belief Lorem Ipsum',
            desc: 'Contrary to popular belief, Lorem Ipsum  classical Latin literature classical Latin literature from 45 BC.',
            link: ''
        },
        {
            img: blog2,
            job: 'Graphic Designer',
            title: 'popular belief Lorem Ipsum',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            link: ''
        },
        {
            img: blog3,
            job: 'Front End Developer',
            title: 'popular belief Lorem Ipsum',
            desc: 'Contrary to popular belief, Lorem Ipsum  classical Latin literature classical Latin literature from 45 BC.',
            link: ''
        }
    ]
}

export default Data