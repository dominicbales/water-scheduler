export const mockEvents = [
  {
    id: 0,
    title: "All Day Event very long title",
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10)
  }
];

export const mockEmptyEvents = [];

export const mockPlants = [
  { name: "Fiddle Leaf Fig", water_after: "7 days" },
  { name: "Croton", water_after: "7 days" },
  { name: "Spider Plant", water_after: "7 days" },
  { name: "Snake Plant", water_after: "14 days" },
  { name: "Money Tree", water_after: "14 days" },
  { name: "Dracaena", water_after: "14 days" },
  { name: "Jade", water_after: "14 days" },
  { name: "Bird's Nest Fern", water_after: "3 days" },
  { name: "Bell Pepper Plant", water_after: "3 days" },
  { name: "Strawberry Plant", water_after: "3 days" },
  { name: "Wavy Fern", water_after: "2 days" }
];

export const mockSortedPlants = {
  "7 days": [
    { name: "Fiddle Leaf Fig", water_after: "7 days" },
    { name: "Croton", water_after: "7 days" },
    { name: "Spider Plant", water_after: "7 days" }
  ],
  "14 days": [
    { name: "Snake Plant", water_after: "14 days" },
    { name: "Money Tree", water_after: "14 days" },
    { name: "Dracaena", water_after: "14 days" },
    { name: "Jade", water_after: "14 days" }
  ],
  "3 days": [
    { name: "Bird's Nest Fern", water_after: "3 days" },
    { name: "Bell Pepper Plant", water_after: "3 days" },
    { name: "Strawberry Plant", water_after: "3 days" }
  ],
  "2 days": [{ name: "Wavy Fern", water_after: "2 days" }]
};

export const mockEmptyPlants = {};

export const mockLists = [
  {
    name: "Fiddle Leaf Fig",
    water_after: "7 days",
    dates: [
      { month: 11, day: 16, year: 2019 },
      { month: 11, day: 23, year: 2019 },
      { month: 11, day: 30, year: 2019 },
      { month: 0, day: 6, year: 2020 }
    ]
  },
  {
    name: "test plant",
    water_after: "14 days",
    dates: [
      { month: 11, day: 16, year: 2019 },
      { month: 11, day: 23, year: 2019 },
      { month: 11, day: 30, year: 2019 },
      { month: 0, day: 6, year: 2020 }
    ]
  }
];
