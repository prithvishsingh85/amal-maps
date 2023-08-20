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

const MAX = 2;

export const getCoordinates = () => {
  const coorindates = [
    {
      title: 'Boston, Massachusetts',
      position: { lat: 42.36246722084178, lng: -71.06349451191598 },
      icon: {
        url: Boston,
      },
    },
    {
      title: 'Ashfield, Massachusetts',
      position: { lat: 42.4939, lng: -72.8086 },
      icon: {
        url: Ashfield,
      },
    },
    {
      title: 'North Adams, Massachusetts',
      position: { lat: 42.7006, lng: -73.1082 },
      icon: {
        url: NorthAdams,
      },
    },
    {
      title: 'Hartford, Connecticut',
      position: { lat: 41.7658, lng: -72.6734 },
      icon: {
        url: Hartford,
        origin: new google.maps.Point('50%', '50%'),
        anchor: new google.maps.Point('50', '5'),
      },
    },
    {
      title: 'Philadelphia, Pennsylvania',
      position: { lat: 39.9526, lng: -75.1652 },
      icon: {
        url: Philadelphia,
      },
    },
    {
      title: 'Baltimore, Maryland',
      position: { lat: 39.2904, lng: -76.6122 },
      icon: {
        url: Baltimore,
      },
    },
    {
      title: 'Washington, D.C.',
      position: { lat: 38.9072, lng: -77.0369 },
      icon: {
        url: WashingtonDC,
      },
    },
    {
      title: 'Pittsburgh, Pennsylvania',
      position: { lat: 40.4406, lng: -79.9959 },
      icon: {
        url: Pittsburgh,
      },
    },
    {
      title: 'Columbus, Ohio',
      position: { lat: 39.9612, lng: -82.9988 },
      icon: {
        url: Columbus,
      },
    },
    {
      title: 'Cincinnati, Ohio',
      position: { lat: 39.1031, lng: -84.512 },
      icon: {
        url: CIncinnati,
      },
    },
    {
      title: 'Akron, Ohio',
      position: { lat: 41.0814, lng: -81.519 },
      icon: {
        url: Akron,
      },
    },
    {
      title: 'Dearborn, Michigan',
      position: { lat: 42.3223, lng: -83.1763 },
      icon: {
        url: Dearborn,
      },
    },
    {
      title: 'Detroit/Dearborn, Michigan',
      position: { lat: 42.3314, lng: -83.0458 },
      icon: {
        url: Detroit,
      },
    },
    {
      title: 'Flint, Michigan',
      position: { lat: 43.0125, lng: -83.6875 },
      icon: {
        url: Flint,
      },
    },
    {
      title: 'Ann Arbor, Michigan',
      position: { lat: 42.2808, lng: -83.743 },
      icon: {
        url: AnnArbor,
      },
    },
    {
      title: 'Chicago, Illinois',
      position: { lat: 41.8781, lng: -87.6298 },
      icon: {
        url: Chicago,
      },
    },
    {
      title: 'St Louis, Missouri',
      position: { lat: 38.627, lng: -90.1994 },
      icon: {
        url: StLouis,
      },
    },
    {
      title: 'Memphis, Tennessee',
      position: { lat: 35.1495, lng: -90.049 },
      icon: {
        url: Memphis,
      },
    },
    {
      title: 'Nashville, Tennessee',
      position: { lat: 36.1627, lng: -86.7816 },
      icon: {
        url: Nashville,
      },
    },
    {
      title: 'Chattanooga, Tennessee',
      position: { lat: 35.0456, lng: -85.3097 },
      icon: {
        url: Chattanooga,
      },
    },
    {
      title: 'Atlanta, Georgia',
      position: { lat: 33.749, lng: -84.388 },
      icon: {
        url: Atlanta,
      },
    },
    {
      title: 'Birmingham, Alabama',
      position: { lat: 33.5207, lng: -86.8025 },
      icon: {
        url: Birmingham,
      },
    },
    {
      title: 'Montgomery, Alabama',
      position: { lat: 32.3792, lng: -86.3077 },
      icon: {
        url: Montgomery,
      },
    },
    {
      title: 'Selma, Alabama',
      position: { lat: 32.4074, lng: -87.0211 },
      icon: {
        url: Selma,
      },
    },
    {
      title: 'New Orleans, Louisiana',
      position: { lat: 29.9511, lng: -90.0715 },
      icon: {
        url: NewOrleans,
      },
    },
    {
      title: 'Lafayette, Louisiana',
      position: { lat: 30.2241, lng: -92.0198 },
      icon: {
        url: Lafayette,
      },
    },
    {
      title: 'Houston, Texas',
      position: { lat: 29.7604, lng: -95.3698 },
      icon: {
        url: Houston,
      },
    },
    {
      title: 'Austin, Texas',
      position: { lat: 30.2672, lng: -97.7431 },
      icon: {
        url: Austin,
      },
    },
    {
      title: 'San Antonio, Texas',
      position: { lat: 29.4241, lng: -98.4936 },
      icon: {
        url: SanAntonio,
      },
    },
    {
      title: 'Uvalde, Texas',
      position: { lat: 29.2097, lng: -99.7862 },
      icon: {
        url: Uvalde,
      },
    },
    {
      title: 'Marfa, Texas',
      position: { lat: 30.3095, lng: -104.0205 },
      icon: {
        url: Marfa,
      },
    },
    {
      title: 'El Paso, Texas',
      position: { lat: 31.7619, lng: -106.485 },
      icon: {
        url: ElPaso,
      },
    },
    {
      title: 'Nogales, Arizona',
      position: { lat: 31.3404, lng: -110.9343 },
      icon: {
        url: Nogales,
      },
    },
    {
      title: 'Tucson, Arizona',
      position: { lat: 32.2226, lng: -110.9747 },
      icon: {
        url: Tuscon,
      },
    },
    {
      title: 'Joshua Tree, California',
      position: { lat: 34.1347, lng: -116.3131 },
      icon: {
        url: JoshuaTree,
      },
    },
    {
      title: 'Los Angeles, California',
      position: { lat: 34.0522, lng: -118.2437 },
      icon: {
        url: LosAngeles,
      },
    },
    {
      title: 'San Diego, California',
      position: { lat: 32.7157, lng: -117.1611 },
      icon: {
        url: SanDiego,
      },
    },
  ];
  return coorindates.slice(0, MAX ? MAX : coorindates.length);
};
