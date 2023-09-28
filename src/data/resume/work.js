/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'IEEE TEMS',
    position: 'Co-Secretary',
    highlights: [
       'Web dev mentor Leading a team of 70+ people of web dev domain and guide them',
       'Managing the 500+ Students with the other board members',
       'Conducted 10+ technical sessions',
    ],
  },
  {
    name: 'Codechef : 1601 (highest rating)',
    url : 'https://www.codechef.com/users/priyanshj',
  },
  {
    name : 'Leetcode : 500+ Problems',
    url : 'https://leetcode.com/priyansh_23_6/',
  },
  {
    name : 'Hackerrank : 5 star in C and C++',
    url : 'https://www.hackerrank.com/priyanshjain_mu1',
  },

];

export default work;
