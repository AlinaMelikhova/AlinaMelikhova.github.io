interface Bird {
  name: string;
  value: string;
  positive?: string;
  negative?: string;
  positiveValue: string;
  negativeValue?: string;
}

export const BIRDS: Bird[] = [
  {
    name: 'Corella',
    value: '#0D2A43',
    positive: 'Brings routine to my life',
    negative: 'It flies to my balcony every day at 6 am and yells at me',
    positiveValue: '30%',
    negativeValue: '50%',
  },
  {
    name: 'Cockatoo',
    value: '#FF6D68',
    positive: 'Absolutely in love with their randomness!',
    positiveValue: '100%',
  },
  {
    name: 'Loreekit',
    value: '#FFC843',
    negative: 'Sometimes yells at me, too',
    positive: 'Perfect flirters!',
    positiveValue: '75%',
    negativeValue: '10%',
  },
  {
    name: 'Kookaburra',
    value: '#518249',
    positive: 'It was the first bird I met here',
    negative: 'I`m afraid of it!',
    positiveValue: '40%',
    negativeValue: '20%',
  },
  {
    name: 'Magpie',
    value: '#0071CE',
    positive: 'Likes to watch me code from the window',
    negative: 'Doesn`t want to eat my food',
    positiveValue: '60%',
    negativeValue: '55%',
  },
  {
    name: 'Noisy miner',
    value: '#5E96DC',
    positive: 'Always bring spring vibes',
    negative: 'Too grey',
    positiveValue: '50%',
    negativeValue: '5%',
  },
  {
    name: 'Ibis',
    value: '#5E96DC',
    positive: 'I feel sorry for him being named `bin chicken`',
    negative: 'Alright, it is a `bin chicken`',
    positiveValue: '30%',
    negativeValue: '20%',
  },
];
