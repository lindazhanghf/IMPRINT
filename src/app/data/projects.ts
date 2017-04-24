import { Project, Resource } from './../project';

const piedmont_park_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Clean-up",
        ideal_number: 20,
        current_number: 13,
        contributions: []
    },
]
const inman_park_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 30,
        current_number: 14,
        contributions: []
    }
]
const botanic_garden_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 15,
        current_number: 14,
        contributions: []
    },
    {
        id:1,
        type: "donation",
        name: "Bring bowls and cups!",
        ideal_number: 30,
        current_number: 18,
        contributions: []
    }
]
const womens_march_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 100,
        current_number: 78,
        contributions: []
    },
]
const beekeeping_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 100,
        current_number: 48,
        contributions: []
    },
]
const hike_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 18,
        contributions: []
    },
]
const workshop_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 16,
        contributions: []
    },
]
const cityhall_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 9,
        contributions: []
    },
]
const tasteofatl_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 200,
        current_number: 148,
        contributions: []
    },
    {
        id: 1,
        type: "funding",
        name: "Attandant",
        ideal_number: 1000,
        current_number: 395,
        contributions: []
    },
]
const soupkitchen_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 200,
        current_number: 148,
        contributions: []
    },
    {
        id: 0,
        type: "donation",
        name: "Attandant",
        ideal_number: 400,
        current_number: 382,
        contributions: []
    },

]

export const PROJECTS: Project[] = [
  {
    id: 2,
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
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/bikes.png`,
    resources_deadline: ``,
    resources: inman_park_required_resources
  },
  {
    id: 4,
    title: `Hiking at Stone Mountain`,
    userID: 0,
    userName: 'John Adams',
    description: `Hi everyone! I just moved to the city and was looking to meet some people in the area. Looking forward to meeting everyone at the hike!`,
    date: `Tuesday, May 16th, 2017`,
    timeOfEvent: '10:00 am - 2:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'Stone Mountain',
    address: "400 Peachtree Road, Front Entrance",
    thumbnail: `./../../assets/thumbnails/hike.jpg`,
    resources_deadline: ``,
    resources: hike_required_resources
  },
  {
    id: 5,
    title: `Career Building Workshop`,
    userID: 0,
    userName: 'Pam Locke',
    description: `Hey all! This worked is geared for students in the computing and design `,
    date: `Thursday, May 18th, 2017`,
    timeOfEvent: '11:00 am - 1:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Workshop, Career',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/laptop.jpg`,
    resources_deadline: ``,
    resources: workshop_required_resources
  },
  {
    id: 6,
    title: `Town Hall Meeting`,
    userID: 0,
    userName: 'Pam Locke',
    description: `Hey all! This worked is geared for students in the computing and design `,
    date: `Wednesday, May 28th, 2017`,
    timeOfEvent: '5:00 pm - 6:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Meeting, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "Atlanta History Center, 560 Peachtree Street",
    thumbnail: `./../../assets/thumbnails/cityhall.jpg`,
    resources_deadline: ``,
    resources: cityhall_required_resources
  },
  {
    id: 8,
    title: `Taste of Atlanta Food Festival`,
    userID: 0,
    userName: 'Sophia Amuraso',
    description: `Help support local restaurants! There'll be over 200 vendors at this all-day event! `,
    date: `Saturday, May 28th, 2017`,
    timeOfEvent: '9:00 am - 6:00 pm',
    timeLeft: 19,
    category: 2,
    tag: 'Food, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'Sandy Springs',
    address: "1560 Peachtree Street",
    thumbnail: `./../../assets/thumbnails/tasteofatl.jpg`,
    resources_deadline: ``,
    resources: tasteofatl_required_resources
  },
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
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/piedmont_park.jpg`,
    resources_deadline: ``,
    resources: piedmont_park_required_resources
  },
  {
    id: 1,
    title: `Beekeeping Event at Metro Atlanta Beekeepers Association`,
    userID: 0,
    userName: 'Emily Smith',
    description: `Hi all, the Metro Atlanta Beekeepers Association is hosting a free beekeeping event to educate the community about why keeping the bee population plentiful is imperative to the environment. Join us if you can!`,
    date: `Monday, May 25th, 2017`,
    timeOfEvent: '1:00 pm - 4:00 pm',
    timeLeft: 14,
    category: 2,
    tag: 'Park, Environment, Beekeeping, Gardens',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Botanical Gardens',
    address: "400 Peachtree Dr NE, 18th Street",
    thumbnail: `./../../assets/thumbnails/beekeeping.jpg`,
    resources_deadline: ``,
    resources: beekeeping_required_resources
  },
  {
    id: 3,
    title: `Beautifying Atlanta's Botanical Garden`,
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
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/botanic_garden.png`,
    resources_deadline: ``,
    resources: botanic_garden_required_resources
  },
    {
    id: 7,
    title: `Soup Kitchen`,
    userID: 0,
    userName: 'Burt Marlowe',
    description: `Support the community by volunteering to help serve food to the
    homeless! `,
    date: `Saturday, April 28th, 2017`,
    timeOfEvent: '9:00 am - 12:00 pm',
    timeLeft: 29,
    category: 2,
    tag: 'Food, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Community Food Bank',
    address: "732 Joseph E Lowery Blvd NW",
    thumbnail: `./../../assets/thumbnails/soupkitchen.jpg`,
    resources_deadline: ``,
    resources: soupkitchen_required_resources
  },
    {
    id: 9,
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
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/womens_march.png`,
    resources_deadline: ``,
    resources: womens_march_required_resources
  },
];

