import photo from 'assets/images/main-photo-article.png';
import { UserRole } from 'features/auth/enums';

import type { IArticleResponse, ICommentResponse } from 'features/article/types';
import type { HomeResponseType } from 'features/home/types';

export const dataMainArticle: IArticleResponse[] = [
  {
    id: '324235564565234634526',
    img: photo,
    content:
      'TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. NBA which equipe is the best? But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign soil.',
    alt: 'sdsdsdsd',
    title: 'American Games come back in 2019',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lalsddsdklskd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'New York',
    user: {
      role: UserRole.User,
      firstName: 'Vasyl',
      lastName: 'Clopik',
      id: 'sdsd8983984347374837478',
      email: 'examplevasul@gmail.com',
    },
    comments: [],
  },
  {
    id: '324236523455645634526',
    img: 'https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Italian Hokey come back in 2024',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lsddsdkl23skd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
  {
    id: '324564565234634523526',
    img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Romania so bad to play football',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lsddsdkl2323skd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
  {
    id: '32456456523463332323526',
    img: photo,
    content:
      'TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. NBA which equipe is the best? But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign soil.',
    alt: 'sdsdsdsd',
    title: 'American Games come back in 2019',
    published: '2023-08-05T14:42:53.612+00:00',
    path: '/NBA/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'New York',
    user: {
      role: UserRole.User,
      firstName: 'Vasyl',
      lastName: 'Clopik',
      id: 'sdsd8983984347374837478',
      email: 'examplevasul@gmail.com',
    },
    comments: [],
  },
];

export const dataSub: IArticleResponse[] = [
  {
    id: '324564565234634523526',
    img: photo,
    content:
      'TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. NBA which equipe is the best? But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign soil.',
    alt: 'sdsdsdsd',
    title: 'American Games come back in 2019',
    published: '2023-08-05T14:42:53.612+00:00',
    path: '/NBA/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'New York',
    user: {
      role: UserRole.User,
      firstName: 'Vasyl',
      lastName: 'Clopik',
      id: 'sdsd8983984347374837478',
      email: 'examplevasul@gmail.com',
    },
    comments: [],
  },
  {
    id: '324563452354565234626',
    img: 'https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Italian Hokey come back in 2024',
    published: '2023-08-05T14:42:53.612+00:00',
    path: '/NFL/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
  {
    id: '324652346345645523526',
    img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Romania so bad to play hokey',
    published: '2023-08-05T14:42:53.612+00:00',
    path: '/NHL/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
  {
    id: '324563463452456523526',
    img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Romania so bad to play football',
    published: '2023-08-05T14:42:53.612+00:00',
    path: '/WHL/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
];

export const colectionArticleData: IArticleResponse[] = [
  {
    id: '324235564565234634526',
    img: photo,
    content:
      'TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. NBA which equipe is the best? But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign soil.',
    alt: 'sdsdsdsd',
    title: 'American Games come back in 2019',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lalsddsdklskd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'New York',
    user: {
      role: UserRole.User,
      firstName: 'Vasyl',
      lastName: 'Clopik',
      id: 'sdsd8983984347374837478',
      email: 'examplevasul@gmail.com',
    },
    comments: [],
  },
  {
    id: '324236523455645634526',
    img: 'https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Italian Hokey come back in 2024',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lsddsdkl23skd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
  {
    id: '324564565234634523526',
    img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
    content:
      'That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.',
    alt: 'sdsdsdsd',
    title: 'Romania so bad to play football',
    published: '2023-08-05T14:42:53.612+00:00',
    path: 'lsddsdkl2323skd',
    category: {
      id: '3274673247832647623',
      title: 'NFL',
      path: '/NFL',
    },
    conference: {
      team: [],
      id: '93449389472874982734',
      title: 'AFC South',
      path: '/AFC+South',
    },
    team: {
      id: '4832642634762783648723',
      title: 'Buffalo Bills',
      path: '/Buffalo+Bills',
    },
    location: 'Italy',
    user: {
      role: UserRole.User,
      firstName: 'Bogdan',
      lastName: 'Kisa',
      id: 'sdsd89834343347374837478',
      email: 'example@gmail.com',
    },
    comments: [],
  },
];

export const articleCommentsData: ICommentResponse[] = [
  {
    id: '213782713721837',
    user: {
      role: UserRole.User,
      firstName: 'Vasyl',
      lastName: 'Clopik',
      id: '8983984347374837478',
      email: 'examplevasul@gmail.com',
    },
    createAt: '2023-08-18T14:42:53.612+00:00',
    comment: `Interesting article. Personally I am trying to slowly move away from Whatsapp as I am doing with Facebook.
    Most of the Whatsapp group I belong to are permanently on mute otherwise my phone would constantly be beeping each new message on a group typically triggers a flood of comments the majority of which does not add `,
  },
  {
    id: '213754645645837',
    user: {
      role: UserRole.User,
      firstName: 'Maurizio',
      lastName: 'Spadari',
      id: '8983932423423423478',
      email: 'examplemeur@gmail.com',
    },
    createAt: '2023-10-08T14:42:53.612+00:00',
    comment: `Interesting article. Personally I am trying to slowly move away from Whatsapp as I am doing with Facebook.
    Most of the Whatsapp group I belong to are permanently on mute otherwise my phone would constantly be beeping each new message on a group typically triggers a flood of comments the majority of which does not add `,
  },
  {
    id: '213773218283717',
    user: {
      role: UserRole.User,
      firstName: 'Tom',
      lastName: 'Chanter',
      id: '8983789843748374473',
      email: 'exampletom@gmail.com',
    },
    createAt: '2023-11-28T14:42:53.612+00:00',
    comment: `Message services are also looking to get into payments, much like WeChat. Big tech is coming for the banks.`,
  },
];

export const articleData: IArticleResponse = {
  id: '456746576745896756',
  img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
  content: `TOKYO — Major League Baseball begins its 2019 [season](https://www.google.com/) season on Wednesday in Japan with the first of two games between the Oakland Athletics and the Seattle Mariners. But when the teams take the field at the Tokyo Dome, don’t say they’re playing on foreign soil.

  That’s because 12 tons of clay, silt and sand mixtures have been shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval after starting the first of two exhibition games each club played against teams from Japan’s Nippon Professional Baseball as a tuneup.
  
  “Oh, you mean we weren’t pitching on the same mound the Japanese teams use during their season?” Leake said Sunday. “It felt like the same mound that we pitch on in the States. The only thing I would say is that maybe they put a little too much water at first, so some of the clay stuck to my spikes in the first inning, but that happens at home, too. After that, it was perfect.”`,
  alt: 'football',
  title: 'As M.L.B.’s Season Opens in Japan, at Least the Dirt Is Familiar',
  published: '2023-08-05T14:42:53.612+00:00',
  path: '/NBA/AFC+Sout/As-M.L.B-Season-Opens-in-Japan-at-Least-the-Dirt-Is-Familiar',
  category: {
    id: '3274673247832647623',
    title: 'NFL',
    path: '/NFL',
  },
  conference: {
    team: [
      {
        id: '8024989928343348',
        title: 'Buffalo Bills',
        path: '/NFL/Buffalo+Bills',
      },
      {
        id: '9309842443389288',
        title: 'Miami Dolphins',
        path: '/NFL/Miami+Dolphins',
      },
    ],
    id: '93449389472874982734',
    title: 'AFC South',
    path: '/AFC+South',
  },
  team: {
    id: '4832642634762783648723',
    title: 'Buffalo Bills',
    path: '/Buffalo+Bills',
  },
  location: 'New York',
  showComments: true,
  user: {
    role: UserRole.User,
    avatar: 'https://www.thesun.co.uk/wp-content/uploads/2019/04/NINTCHDBPICT000642434471.jpg',
    firstName: 'Pete',
    lastName: 'Davidson',
    id: 'sdsd8983374837479843478',
    email: 'examplepete@gmail.com',
  },
  comments: articleCommentsData,
};

export const photoOfTheDayData = {
  img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
  alt: '',
  title: 'Defending The Throne',
  description:
    'Los Angeles Lakes guard Derek Fisher, right, is pressured by the Denver Nuggets Nene during th efirst quarter of NBA exhibition action on Oct 16',
  author: 'Bla Bla Chepilini',
};

export const homeMockData: HomeResponseType = {
  mainArticle: dataMainArticle,
  subArticle: dataSub,
  mostPopular: colectionArticleData,
  mostComments: colectionArticleData,
  potd: photoOfTheDayData,
  breakdown: {
    first: dataMainArticle,
    second: dataSub,
  },
};
