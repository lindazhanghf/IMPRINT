import { Project } from './../project';

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: `Piedmont Park Clean-up`,
    userID: 0,
    userName: 'Jane Doe',
    description: `Hi all, I'm looking for volunteers to help beautify our local park!
    Volunteers will be expected to pick up trash around the park, and should arrive by
    10:50 AM. We will be providing boxed lunch for those who will be staying for the
    entirety of the event. If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Saturday, April 1st, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 0,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: `Piedmont Park`,
    address: "400 Park Dr NE, Atlanta, GA 30309/ 14th Street Entrance",
    progress: 0.7,
    neededVol: 11,
    thumbnail: `./../../assets/thumbnails/piedmont_park.jpg`,
    resources_deadline: ``,
    resources: []
  },
  {
    id: 1,
    title: `Inman Park Bike Meetup`,
    userID: 0,
    userName: 'Jane Doe',
    description: `Hi all, I'm hosting a bike meetup event and would love for you to come!
    Please arrive promptly at 10:45 AM as we will be leaving right at 11:00 AM. Those who
    come late can call me at 770-000-3710 and we will try to find you. Dress comfortably
    because the weather is expected to be in the high 70's. Please spread the word!`,
    date: `Tuesday, April 4th, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 1,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: `Inman Park`,
    address: "400 Park Dr NE, Atlanta, GA 30309/ 14th Street Entrance",
    progress: 0.7,
    neededVol: 11,
    thumbnail: `./../../assets/thumbnails/bikes.png`,
    resources_deadline: ``,
    resources: []
  },
  {
    id: 2,
    title: `Volunteering at Atlanta's Botanical Garden`,
    userID: 0,
    userName: `Jane Doe`,
    description: `Hi all, I'm looking for volunteers to help set up food and drinks for
    an event I'm hosting at Atlanta Botanical Garden! Volunteers will be expected to
    pour food into bowls and pour drinks into cups. Gloves and utensils will be provided.
    Just bring yourself! If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Friday, April 12th, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 0,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Botanical Garden',
    address: "400 Park Dr NE, Atlanta, GA 30309/ 14th Street Entrance",
    progress: 0.8,
    neededVol: 11,
    thumbnail: `./../../assets/thumbnails/botanic_garden.png`,
    resources_deadline: ``,
    resources: []
  },
  {
    id: 3,
    title: `Women's March`,
    userID: 0,
    userName: 'Jane Doe',
    description: `Hi all, I'm looking for people to go to the Women's March with! Please
    try to be here by 10:50 AM. If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Monday, May 15th, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 2,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "400 Park Dr NE, Atlanta, GA 30309/ 14th Street Entrance",
    progress: 0.9,
    neededVol: 11,
    thumbnail: `./../../assets/thumbnails/womens_march.png`,
    resources_deadline: ``,
    resources: []
  }
];
