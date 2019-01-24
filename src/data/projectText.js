const projectText = [
  'At zero',
  [
    'My final project at The Iron Yard. Two front end devs and two back end devs given two weeks to plan, create, and deploy a functional web site. The front-end was built using React, React-router-dom, Bootstrap, superagent, and JScookie. The back-end was built using Ruby-on-Rails, bcrypt, paperclip, and action-mailer. Both were deployed on Heroku and we used an S3 bucket to hold images and PDFs.',
    "The purpose of the project we chose to do was to streamline the process of 'advancing'; where bands book shows with venues. MVP of this project focused on the bands allowing them to upload PDFs to their profile to be sent to venues, organizing existing events on a calendar, and sending auto-generated emails to venues which contained a link to a form of common advancing questions.",
    'It was neat to work on a project that had potential real world value. I feel that the site is about half way to something that would be used by bands and venues. The idea of the project could be expanded to many different use cases where detailed information gets exchanged between two or more parties where being reminded what all to ask and saving the answers in one place would be of benefit.',
  ],
  [
    'This was the first collaboration project between the students taking the Ruby on Rails backend course and the students taking the React.JS frontend course. The assignment was to create a website with similar functionality to StackOverflow.',
    'It was great to be able to request what API’s we wanted from the backend and what structures they should have. We did end up waiting for the API’s to get deployed. We used faux-data from Mockaroo to help us develop the site and styled components before they worked. In retrospect it would have been beneficial for the backend team to have had a week head start.',
    'I ended up acting as team lead for the front end. Every day we would meet and update the Trello board. It was a perfect pairing as Hannah enjoyed styling and I enjoyed the functionality.',
  ],
  [
    'The assignment was for the React front-end team of 8 to recreate parts of the Etsy website pixel perfect using React and Etsy’s API’s. Collectively we were assigned the Header, Footer, Homepage, and Item page. We split these into two teams of 4. I was on the team that handled the Homepage and Footer. We were able to use gitHub to collaborate and later merge the two team’s work into one master branch. We communicated well and there were no huge conflicts or loss of work.',
    "Etsy does not make it easy to get at their data. Also any information on additional params for their API URLs is missing from their documentation. The homepage currently makes 8 to 13 API calls to fill in the item pictures, depending on how many recently viewed items there are. The item page makes 14 API calls to load. On Etsy’s site the images that load for their 'Shop by Category' and 'Shop for Gifts' are the same every time. I was unable to find any API that pointed to those items. We went with randomly picking images to display. Each time you refresh our page you get different items displaying.",
  ],
  [
    "A project using Node.JS, Express, Mustache, MongoDB, and Mongoose. The login is handled with passport, bcrypt, and session. The purpose of the site is to allow users to upload and save code snippets, and view their and other's snippets. All the snippets are stored in a common database.",
    'When applied, the “search by” dropdown field searches the collection in the database for all the values with that key and populates the “search for” field with those values. Applying one of those values filters the results to only results (snippets) that have that key: value pair. A user can read all the snippets, but only update, and delete the snippets they created.',
  ],
  [
    'This was a fun little project using Node.JS, Express, Mustache, and MongoDB. The data is from Mockaroo. There are only two views: The index (list) and (a single) robot. Each end point has a different query to the database. The links in the views pass information to dynamic URLs. The end points use this information to query/filter the database and then pass the results to one of the views.',
  ],
  [
    'A hotel booking platform that uses Ethereum smart contract to store hotel inventory, reservations, and process payments.',
    'The first version was build, deployed and allowed developers to book a room for the EthMemphis hackathon.',
    'The second version separated the front end into a traveler interface that would allow for searches and making reservations, and a hotel interface that would allow for hotels to join the platform and function as a management system for inventory.',
    "Storing data 'on chain' is very expensive. The server stores all the profile data in a database and references the contract addresses.",
    'The tech stack for this project is React, Redux, GraphQl, Node.js, Docker, and AWS.',
  ],
  [
    'The server for a payment service that would allow merchants to accept cryptocurrencies with a functionality similar to Stripe. The server was build in Node.js.',
  ],
];
export default projectText;
