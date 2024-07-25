import { PathOptions } from 'leaflet';

export const LEGEND: {
  min: number;
  style: PathOptions;
  hidden?: boolean;
  title: string;
}[] = [
  {
    min: 0,
    style: { fillColor: '#dfe9ea', color: '#dfe9ea' },
    hidden: true,
    title: 'Not visited',
  },
  {
    min: 1,
    style: { weight: 0.5, fillColor: 'rgb(241 181 216)', color: 'white' },
    title: 'Less than 4 weeks',
  },
  {
    min: 4,
    style: { weight: 0.5, fillColor: 'rgb(201, 181, 241)', color: 'white' },
    title: '4 - 8 weeks',
  },
  {
    min: 8,
    style: { weight: 0.5, fillColor: 'rgb(151 99 255)', color: 'white' },
    title: 'More than 8 weeks',
  },
];

export const VISITED_COUNTRIES: Record<string, number> = {
  EGY: 4,
  MAR: 2,
  ZAF: 12,
  ARM: 8,
  AZE: 1,
  CHN: 1,
  HKG: 1,
  GEO: 24,
  IDN: 4,
  ISR: 2,
  JPN: 3,
  KAZ: 1,
  LBN: 1,
  MYS: 6,
  PSE: 1,
  SGP: 1,
  THA: 8,
  TUR: 56,
  ARE: 1,
  UZB: 8,
  VNM: 2,
  ALB: 3,
  AUT: 2,
  BLR: 3,
  BEL: 1,
  BIH: 2,
  BGR: 4,
  HRV: 1,
  CZE: 1,
  DNK: 1,
  FIN: 1,
  FRA: 4,
  DEU: 4,
  GRC: 3,
  HUN: 3,
  ISL: 1,
  ITA: 4,
  LVA: 1,
  LTU: 1,
  MLT: 2,
  MCO: 1,
  MNE: 2,
  NLD: 1,
  MKD: 2,
  PRT: 2,
  ROU: 2,
  SMR: 1,
  SRB: 4,
  SVK: 1,
  SVN: 1,
  ESP: 4,
  SWE: 1,
  CHE: 2,
  UKR: 2,
  GBR: 8,
  VAT: 1,
  USA: 2,
  AUS: 25,
  RUS: 401,
};

export const TOOLTIP_OFFSET = 20;
