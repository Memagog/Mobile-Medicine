export const data_1d = {
  labels: ['9:00', '12:00', '14:00', '16:00', '18:00', '21:00'],
  datasets: [
    {
      data: [0, 300, 500, 340, 300, 200, 280, 578],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['P/C/F'], // optional
};

export const data_7d = {
  labels: [
    '5.12',
    '6.12',
    '6.12',
    '7.12',
    '8.12',
    '9.12',
    '10.12',
    '11.12',
    '12.12',
  ],
  datasets: [
    {
      data: [2000, 3000, 3200, 4000, 3500, 2800, 3300, 3456, 3566, 3789, 4200],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['P/C/F'], // optional
};

export const data1 = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

export const data2 = {
  labels: ['Test1', 'Test2'],
  legend: ['L1', 'L2', 'L3'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};

export const data4 = [
  {
    name: 'Protein',
    population: 100,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Carbohydrate',
    population: 200,
    color: '#900',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Lipids',
    population: 80,
    color: '#444',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
];
