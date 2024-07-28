export interface Bird {
  name: string;
  value: string;
  positive?: string;
  negative?: string;
  positiveValue: string;
  negativeValue?: string;
  positiveId?: string;
  negativeId?: string;
}

export const BIRDS: Bird[] = [
  {
    name: 'Corella',
    value: '#0D2A43',
    positive: 'Brings routine to my life',
    negative: 'It flies to my balcony at 6 am and yells at me',
    positiveValue: '30%',
    negativeValue: '50%',
    positiveId: 'CorellaNegative',
    negativeId: 'CorellaPositive',
  },
  {
    name: 'Cockatoo',
    value: '#FF6D68',
    positive: 'Absolutely in love with their randomness!',
    positiveValue: '100%',
    positiveId: 'CockatooNegative',
    negativeId: 'CockatooPositive',
  },
  {
    name: 'Loreekit',
    value: '#FFC843',
    negative: 'Sometimes yells at me, too',
    positive: 'Perfect flirter!',
    positiveValue: '75%',
    negativeValue: '10%',
    positiveId: 'LoreekitNegative',
    negativeId: 'LoreekitPositive',
  },
  {
    name: 'Kookaburra',
    value: '#518249',
    positive: 'It was the first bird I met here',
    negative: 'I`m afraid of it!',
    positiveValue: '40%',
    negativeValue: '20%',
    positiveId: 'KookaburraNegative',
    negativeId: 'KookaburraPositive',
  },
  {
    name: 'Magpie',
    value: '#0071CE',
    positive: 'Enjoys watching me code from the window',
    negative: 'Doesn`t want to eat my food',
    positiveValue: '60%',
    negativeValue: '55%',
    positiveId: 'MagpieNegative',
    negativeId: 'MagpiePositive',
  },
  {
    name: 'Noisy miner',
    value: '#5E96DC',
    positive: 'Always brings spring vibes',
    negative: 'Too grey',
    positiveValue: '50%',
    negativeValue: '5%',
    positiveId: 'NoisyMinerNegative',
    negativeId: 'NoisyMinerPositive',
  },
  {
    name: 'Ibis',
    value: '#5E96DC',
    positive: 'I feel sorry for it being named `bin chicken`',
    negative: 'Alright, it is a `bin chicken`',
    positiveValue: '30%',
    negativeValue: '20%',
    positiveId: 'IbisNegative',
    negativeId: 'IbisPositive',
  },
];
