import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Spence Anwell',
        age: 51,
        contact: '2896292860',
        gender: 'Male',
        designation: 'Business Analyst',
        address: '74452 Brown Drive',
        knownTechs: [ 'Java',
        'Angular',
        'AngularJS']
      },
      {
        id: 2,
        name: 'Rurik Dunlap',
        age: 32,
        contact: '5188670680',
        gender: 'Male',
        designation: 'Programmer Analyst',
        address: '33 Green Drive',
        knownTechs: ['Java',
        'Angular',
        'AngularJS' ]
      },
      {
        id: 3,
        name: 'Portie Skuce',
        age: 33,
        contact: '1891733832',
        gender: 'Male',
        designation: 'Business Analyst',
        address: '559 Wayridge Terrace',
        knownTechs: ['Python',
        'Go',
        'C' ]
      },
      {
        id: 4,
        name: 'Ariela McQuode',
        age: 44,
        contact: '5855277376',
        gender: 'Female',
        designation: 'Programmer Analyst',
        address: '83357 Grayhawk Point',
        knownTechs: ['Java',
        'Angular',
        'AngularJS' ]
      },
      {
        id: 5,
        name: 'Bobbie Footer',
        age: 52,
        contact: '3154679655',
        gender: 'Male',
        designation: 'Programmer Analyst',
        address: '1725 Sheridan Center',
        knownTechs: [ 'Python',
        'Go',
        'C']
      },
      {
        id: 6,
        name: 'Hi Cana',
        age: 26,
        contact: '3796918812',
        gender: 'Male',
        designation: 'Design Analyst',
        address: '3110 Banding Hill',
        knownTechs: [ 'Python',
        'Go',
        'C']
      },
      {
        id: 7,
        name: 'Benedetta Mucklestone',
        age: 47,
        contact: '6978098882',
        gender: 'Female',
        designation: 'Programmer Analyst',
        address: '17 Sachtjen Junction',
        knownTechs: ['C#',
        'MySQL',
        'NOSQL' ]
      },
      {
        id: 8,
        name: 'Merry Atwel',
        age: 38,
        contact: '9642508804',
        gender: 'Male',
        designation: 'Quality Analyst',
        address: '5139 Merrick Drive',
        knownTechs: ['C#',
        'MySQL',
        'NOSQL' ]
      },
      {
        id: 9,
        name: 'Audry Murrow',
        age: 39,
        contact: '1397383323',
        gender: 'Female',
        designation: 'Quality Analyst',
        address: '7 Springview Park',
        knownTechs: ['Python',
        'Go',
        'C' ]
      },
      {
        id: 10,
        name: 'April Jacomb',
        age: 50,
        contact: '1002529771',
        gender: 'Female',
        designation: 'Design Analyst',
        address: '67736 Hoepker Drive',
        knownTechs: ['C#',
        'MySQL',
        'NOSQL' ]
      }
    ];
    return { users };
  }
}
