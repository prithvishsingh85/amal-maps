export const baseStyles = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  // {
  //   featureType: 'road.highway.controlled_access',
  //   elementType: 'labels',
  //   stylers: [
  //     {
  //       visibility: 'on',
  //     },
  //   ],
  // },
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8f5eb',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8f5eb',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#333',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#333',
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#a9d0ce',
      },
    ],
  },
];
