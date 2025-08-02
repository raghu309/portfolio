type Profile = {
  name: string;
  link: string;
  description: string;
  image: string;
};

const profileData: Profile[] = [
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/u/raghu30/',
    description: 'Problem Solving & DSA',
    image: '/assets/profiles/leetcode-ss.png',
  },
  {
    name: 'Codeforces',
    link: 'https://codeforces.com/profile/raghu3',
    description: 'Competitive Programming',
    image: '/assets/profiles/codeforces-ss.png'
  },
  {
    name: 'Kaggle',
    link: 'https://www.kaggle.com/raghu33',
    description: 'Machine Learning',
    image: '/assets/profiles/kaggle-ss.png'
  },
];

export default profileData;