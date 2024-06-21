import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SportPulse',
        description: " Real-time cricket updating application built with Spring Boot, MySQL, web scraping, and Angular 17.  Integrated real-time Match updates via Webscraping, guaranteeing that users receive fast changes on scores and IPL24 point’s table, and saved all completed matches in a database for analysis",
        tools: ['SpringBoot', 'MySQL', 'Web Scrapping', 'AngularJS', 'Express'],
        role: 'Full Stack',
        code: 'https://github.com/shubham22122001/SportsPulse',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: ' Elite Timepieces Ecommerce',
        description: ' Designed and implemented a comprehensive e-commerce platform for luxury timepiece susing React,Node.js,Strapi,Stripe ensuring seamless user experience and robust backend functionality. Implemented features suchas product listing, cart management using Redux,payment processing using Stripe and order management.',
        tools: [' ReactJS','Javascript', 'NodeJS', 'Stripe', 'Strapi'],
        role: 'Full Stack',
        code: 'https://github.com/shubham22122001/ecom_elite_timepieces',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' MusicLab-Music Recommendation System',
        description: 'Lead a web-based recommendation system with mood and genre-specific suggestions, an interactive MusicBot, and personalized recommendations based on previous searches. Created and optimized a sequential model for good recommendations, resulting in an 82% accuracy rate. Also designed a search engine recommendation system based on cosine similarity.',
        tools: ['Python','Django','ML','EDA','SQLLite','API', 'Bootstrap', 'SCSS'],
        code: 'https://github.com/shubham22122001/MusicLab',
        role: 'Full Stack and Machine learning',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Credit CardAnalysis',
        description: "Created a comprehensive credit card analysis report using PowerBI, exhibiting the potential to construct visually appealing and informative dashboards. Imported data from PostgreSQL using SQL queries, demonstrating database management and integration with PowerBI for visualization and analysis.",
        tools: ['Microsoft PowerBI', 'PostgresSQL' ,'DAX'],
        code: 'https://github.com/shubham22122001/Credit-card-PowerBI',
        demo: '',
        image: ayla,
        role: 'Data Analyst',
    },
    {
        id: 5,
        name: 'Finance master',
        description: "Constructed a comprehensive Finance Dashboard App using the MERN stack, incorporating Typescript, Material-UI, and Machine Learning algorithms. Enabled users to visualize financial data via interactive charts while implementing user authentication, data storage, and retrieval using MongoDB. Gained expertise in developing scalable and interactive full-stack web applications with predictive insights. ",
        tools: ['JavaScript', 'ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'TailwindCSS', 'Machine Learning' ],
        code: 'https://github.com/shubham22122001/Finance_Master_MERN',
        demo: '',
        image: ayla,
        role: 'Full stack and Data Analysis',
    },
    
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },