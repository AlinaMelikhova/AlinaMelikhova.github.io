import { StaticImageData } from 'next/image';
import afghanHound from '../../../img/dogs/afghanHound.png';
import australianShepherd from '../../../img/dogs/australianShepherd.png';
import germanShepherd from '../../../img/dogs/germanShepherd.png';
import goldenRetriever from '../../../img/dogs/goldenRetriever.png';
import pomeranian from '../../../img/dogs/pomeranian.png';
import shibaInu from '../../../img/dogs/shibaInu.png';

interface Dog {
  name: string;
  bgColor: string;
  img: StaticImageData;
}

export const DOGS: Dog[] = [
  {
    name: 'Afghan Hound',
    bgColor: '#aaf0f9',
    img: afghanHound,
  },
  {
    name: 'Australian Shepherd',
    bgColor: '#FBED69',
    img: australianShepherd,
  },
  {
    name: 'German Shepherd',
    bgColor: '#ff48ac',
    img: germanShepherd,
  },
  {
    name: 'Golden Retriever',
    bgColor: '#ff992d',
    img: goldenRetriever,
  },
  {
    name: 'Pomeranian',
    bgColor: '#B397F7',
    img: pomeranian,
  },
  {
    name: 'Shiba Inu',
    bgColor: '#82EEB8',
    img: shibaInu,
  },
];
