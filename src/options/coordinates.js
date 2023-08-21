import Akron from '../assets/Akron.png';
import AnnArbor from '../assets/AnnArbor.png';
import Ashfield from '../assets/Ashfield.png';
import Atlanta from '../assets/Atlanta.png';
import Austin from '../assets/Austin.png';
import Baltimore from '../assets/Baltimore.png';
import Birmingham from '../assets/Birmingham.png';
import Boston from '../assets/Boston.png';
import CIncinnati from '../assets/CIncinnati.png';
import Chattanooga from '../assets/Chattanooga.png';
import Chicago from '../assets/Chicago.png';
import Columbus from '../assets/Columbus.png';
import Dearborn from '../assets/Dearborn.png';
import Detroit from '../assets/Detroit.png';
import ElPaso from '../assets/ElPaso.png';
import Flint from '../assets/Flint.png';
import Hartford from '../assets/Hartford.png';
import Houston from '../assets/Houston.png';
import JoshuaTree from '../assets/JoshuaTree.png';
import Lafayette from '../assets/Lafayette.png';
import LosAngeles from '../assets/LosAngeles.png';
import Marfa from '../assets/Marfa.png';
import Memphis from '../assets/Memphis.png';
import Montgomery from '../assets/Montgomery.png';
import Nashville from '../assets/Nashville.png';
import NewOrleans from '../assets/NewOrleans.png';
import Nogales from '../assets/Nogales.png';
import NorthAdams from '../assets/NorthAdams.png';
import Philadelphia from '../assets/Philadelphia.png';
import Pittsburgh from '../assets/Pittsburgh.png';
import SanAntonio from '../assets/SanAntonio.png';
import SanDiego from '../assets/SanDiego.png';
import Selma from '../assets/Selma.png';
import StLouis from '../assets/StLouis.png';
import Tuscon from '../assets/Tuscon.png';
import Uvalde from '../assets/Uvalde.png';
import WashingtonDC from '../assets/WashingtonDC.png';

const MAX = 5;

export const getCoordinates = () => {
  const coorindates = [
    {
      id: 'boston',
      title: 'Boston, Massachusetts',
      position: { lat: 42.36246722084178, lng: -71.06349451191598 },
      label: {},
      animate: true,
      icon: {
        url: Boston,
      },
    },
    {
      title: 'Ashfield, Massachusetts',
      position: { lat: 42.4939, lng: -72.8086 },
      label: {},
      animate: true,
      icon: {
        url: Ashfield,
      },
    },
    {
      title: 'North Adams, Massachusetts',
      position: { lat: 42.7006, lng: -73.1082 },
      label: {},
      animate: true,
      icon: {
        url: NorthAdams,
      },
    },
    {
      title: 'Hartford, Connecticut',
      position: { lat: 41.7658, lng: -72.6734 },
      label: {},
      animate: true,
      icon: {
        url: Hartford,
        origin: new google.maps.Point('50%', '50%'),
        anchor: new google.maps.Point('50', '5'),
      },
    },
    {
      title: 'Philadelphia, Pennsylvania',
      position: { lat: 39.9526, lng: -75.1652 },
      label: {},
      animate: true,
      icon: {
        url: Philadelphia,
      },
    },
    {
      title: 'Baltimore, Maryland',
      position: { lat: 39.2904, lng: -76.6122 },
      label: {},
      animate: true,
      icon: {
        url: Baltimore,
      },
    },
    {
      title: 'Washington, D.C.',
      position: { lat: 38.9072, lng: -77.0369 },
      label: {},
      animate: true,
      icon: {
        url: WashingtonDC,
      },
    },
    {
      title: 'Pittsburgh, Pennsylvania',
      position: { lat: 40.4406, lng: -79.9959 },
      label: {},
      animate: true,
      icon: {
        url: Pittsburgh,
      },
    },
    {
      title: 'Columbus, Ohio',
      position: { lat: 39.9612, lng: -82.9988 },
      label: {},
      animate: true,
      icon: {
        url: Columbus,
      },
    },
    {
      title: 'Cincinnati, Ohio',
      position: { lat: 39.1031, lng: -84.512 },
      label: {},
      animate: true,
      icon: {
        url: CIncinnati,
      },
    },
    {
      title: 'Akron, Ohio',
      position: { lat: 41.0814, lng: -81.519 },
      label: {},
      animate: true,
      icon: {
        url: Akron,
      },
    },
    {
      title: 'Dearborn, Michigan',
      position: { lat: 42.3223, lng: -83.1763 },
      label: {},
      animate: true,
      icon: {
        url: Dearborn,
      },
    },
    {
      title: 'Detroit/Dearborn, Michigan',
      position: { lat: 42.3314, lng: -83.0458 },
      label: {},
      animate: true,
      icon: {
        url: Detroit,
      },
    },
    {
      title: 'Flint, Michigan',
      position: { lat: 43.0125, lng: -83.6875 },
      label: {},
      animate: true,
      icon: {
        url: Flint,
      },
    },
    {
      title: 'Ann Arbor, Michigan',
      position: { lat: 42.2808, lng: -83.743 },
      label: {},
      animate: true,
      icon: {
        url: AnnArbor,
      },
    },
    {
      title: 'Chicago, Illinois',
      position: { lat: 41.8781, lng: -87.6298 },
      label: {},
      animate: true,
      icon: {
        url: Chicago,
      },
    },
    {
      title: 'St Louis, Missouri',
      position: { lat: 38.627, lng: -90.1994 },
      label: {},
      animate: true,
      icon: {
        url: StLouis,
      },
    },
    {
      title: 'Memphis, Tennessee',
      position: { lat: 35.1495, lng: -90.049 },
      label: {},
      animate: true,
      icon: {
        url: Memphis,
      },
    },
    {
      title: 'Nashville, Tennessee',
      position: { lat: 36.1627, lng: -86.7816 },
      label: {},
      animate: true,
      icon: {
        url: Nashville,
      },
    },
    {
      title: 'Chattanooga, Tennessee',
      position: { lat: 35.0456, lng: -85.3097 },
      label: {},
      animate: true,
      icon: {
        url: Chattanooga,
      },
    },
    {
      title: 'Atlanta, Georgia',
      position: { lat: 33.749, lng: -84.388 },
      label: {},
      animate: true,
      icon: {
        url: Atlanta,
      },
    },
    {
      title: 'Birmingham, Alabama',
      position: { lat: 33.5207, lng: -86.8025 },
      label: {},
      animate: true,
      icon: {
        url: Birmingham,
      },
    },
    {
      title: 'Montgomery, Alabama',
      position: { lat: 32.3792, lng: -86.3077 },
      label: {},
      animate: true,
      icon: {
        url: Montgomery,
      },
    },
    {
      title: 'Selma, Alabama',
      position: { lat: 32.4074, lng: -87.0211 },
      label: {},
      animate: true,
      icon: {
        url: Selma,
      },
    },
    {
      title: 'New Orleans, Louisiana',
      position: { lat: 29.9511, lng: -90.0715 },
      label: {},
      animate: true,
      icon: {
        url: NewOrleans,
      },
    },
    {
      title: 'Lafayette, Louisiana',
      position: { lat: 30.2241, lng: -92.0198 },
      label: {},
      animate: true,
      icon: {
        url: Lafayette,
      },
    },
    {
      title: 'Houston, Texas',
      position: { lat: 29.7604, lng: -95.3698 },
      label: {},
      animate: true,
      icon: {
        url: Houston,
      },
    },
    {
      title: 'Austin, Texas',
      position: { lat: 30.2672, lng: -97.7431 },
      label: {},
      animate: true,
      icon: {
        url: Austin,
      },
    },
    {
      title: 'San Antonio, Texas',
      position: { lat: 29.4241, lng: -98.4936 },
      label: {},
      animate: true,
      icon: {
        url: SanAntonio,
      },
    },
    {
      title: 'Uvalde, Texas',
      position: { lat: 29.2097, lng: -99.7862 },
      label: {},
      animate: true,
      icon: {
        url: Uvalde,
      },
    },
    {
      title: 'Marfa, Texas',
      position: { lat: 30.3095, lng: -104.0205 },
      label: {},
      animate: true,
      icon: {
        url: Marfa,
      },
    },
    {
      title: 'El Paso, Texas',
      position: { lat: 31.7619, lng: -106.485 },
      label: {},
      animate: true,
      icon: {
        url: ElPaso,
      },
    },
    {
      title: 'Nogales, Arizona',
      position: { lat: 31.3404, lng: -110.9343 },
      label: {},
      animate: true,
      icon: {
        url: Nogales,
      },
    },
    {
      title: 'Tucson, Arizona',
      position: { lat: 32.2226, lng: -110.9747 },
      label: {},
      animate: true,
      icon: {
        url: Tuscon,
      },
    },
    {
      title: 'Joshua Tree, California',
      position: { lat: 34.1347, lng: -116.3131 },
      label: {},
      animate: true,
      icon: {
        url: JoshuaTree,
      },
    },
    {
      title: 'Los Angeles, California',
      position: { lat: 34.0522, lng: -118.2437 },
      label: {},
      animate: true,
      icon: {
        url: LosAngeles,
      },
    },
    {
      title: 'San Diego, California',
      position: { lat: 32.7157, lng: -117.1611 },
      label: {},
      animate: true,
      icon: {
        url: SanDiego,
      },
    },
  ];
  return coorindates.slice(0, MAX ? MAX : coorindates.length);
};

export const cityCoordinates = (city) => {
  const coordinates = {
    boston: {
      coordinates: [
        {
          title: 'Boston, Massachusetts',
          position: { lat: 42.36246722084178, lng: -71.06349451191598 },
          label: {
            className: 'marker-label-small',
          },
          animate: true,
        },
        {
          title: 'Prudential Tower',
          position: { lat: 42.348706, lng: -71.082779 },
          label: {
            className: 'marker-label-small',
          },
          animate: true,
        },
        {
          title: 'Fenway Park',
          position: { lat: 42.346676, lng: -71.097218 },
          label: {
            className: 'marker-label-small',
          },
          animate: true,
        },
        {
          title: 'Boston University',
          position: { lat: 42.3505, lng: -71.1054 },
          label: {
            className: 'marker-label-small',
          },
          animate: true,
        },
      ],
    },
  };

  return coordinates[city];
};
