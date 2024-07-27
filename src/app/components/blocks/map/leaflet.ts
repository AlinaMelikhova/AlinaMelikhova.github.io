'use client';

import L from 'leaflet';
import './leaflet.css';
import geo from './all.geojson.json';
import { VISITED_COUNTRIES, LEGEND, TOOLTIP_OFFSET } from './config';

export function initMap(element: HTMLElement) {
  const tooltipEl = document.getElementById('map-tooltip');
  const tooltipCountryEl = document.getElementById('map-tooltip-country');
  const tooltipLengthEl = document.getElementById('map-tooltip-length');

  if (!tooltipEl || !tooltipCountryEl || !tooltipLengthEl) {
    throw new Error('Could not find tooltip elements');
  }

  const map = L.map(element, {
    center: [51.505, -0.09],
    zoom: 2,
    dragging: true,
    scrollWheelZoom: false,
    attributionControl: false,
  });

  console.dir(geo);

  const countries = L.geoJSON(geo as any, {
    style: (feature) => {
      const weeks = VISITED_COUNTRIES[getCountryCode(feature)] ?? 0;
      const description = getLegend(weeks);

      return {
        fill: true,
        fillOpacity: 1,
        stroke: true,
        ...description.style,
      };
    },
  });

  countries.on('mousemove', (event) => {
    const { sourceTarget, originalEvent } = event;
    const weeks = VISITED_COUNTRIES[getCountryCode(sourceTarget.feature)] ?? 0;

    if (weeks === 0) {
      tooltipEl.style.visibility = '';
      return;
    }

    tooltipCountryEl.innerHTML = sourceTarget.feature.properties.NAME_EN;
    tooltipLengthEl.innerHTML = getNumberWeeks(weeks);

    const width = tooltipEl.offsetWidth;
    const height = tooltipEl.offsetHeight;
    const screenWidth = window.innerWidth;
    const { clientX, clientY } = originalEvent;
    const { top } = element.getBoundingClientRect();

    if (screenWidth - clientX - TOOLTIP_OFFSET * 2 >= width) {
      tooltipEl.style.left = `${clientX + TOOLTIP_OFFSET}px`;
    } else {
      tooltipEl.style.left = `${clientX - TOOLTIP_OFFSET - width}px`;
    }
    tooltipEl.style.top = `${clientY - top - height / 2}px`;
    tooltipEl.style.visibility = 'visible';
  });

  countries.on('mouseout', () => {
    tooltipEl.style.visibility = '';
  });

  countries.addTo(map);

  return () => {
    map.off();
    map.remove();
  };
}

function getCountryCode(feature?: GeoJSON.Feature) {
  return feature?.properties?.ISO_A3_EH;
}

function getLegend(weeks: number) {
  return LEGEND.findLast((item) => item.min <= weeks) ?? LEGEND[0];
}

function getNumberWeeks(weeks: number) {
  if (weeks === 0) return 'Not visited';
  if (weeks === 1) return 'About a week';

  const months = Math.floor(weeks / 4);
  const rest = weeks % 4;

  if (months >= 100) return `Way too long, man...`;
  if (months === 1) return `About a month`;
  if (months > 1)
    return rest ? `More than ${months} months` : `About ${months} months`;
  return `About ${weeks} weeks`;
}
