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
    {
        id: 6,
        name: 'Olympic Data Engineering - ETL Pipeline using Azure',
        description: "This project focuses on executing a comprehensive data engineering workflow of Olympic data on the Azure Cloud. The main tasks include extracting data from an API using Azure Data Factory, transforming the data with Azure Databricks, loading the transformed data into Azure Data Lake Storage, and performing data analysis using Azure Synapse Analytics",
        tools: ['Azure Data Factory', 'Azure Databricks', 'Azure Data Lake Storage', 'Apache Spark', 'Azure Synapse Analytics', 'Python', 'SQL'],
        code: 'https://github.com/shubham22122001/Olympic_data_eng_azure',
        demo: '',
        image: ayla,
        role: 'Data Engineering',
        
    },
    {
        id: 7,
        name: 'Uber Data Engineering - ETL Pipeline using GCP',
        description: "This project focuses on analyzing Uber data to gain insights into ride patterns and trends using various tools and technologies, including Google Cloud Platform (GCP), Python, Mage Data Pipeline Tool, BigQuery, and Looker Studio. The key objectives are to identify the top 10 pickup locations, analyze trips based on passenger count, and examine how the average fare amount varies by hour and Created an interactive dashboard in Looker Studio, visualizing trip statistics and identifying trends. Analyzed data for over 5,000 trips pinpointed the top  pickup locations in New York City.",
        tools: ['Python', 'Google Cloud Platform (GCP)', 'Mage Data Pipeline Tool', 'BigQuery', 'Looker Studio'],
        code: 'https://github.com/shubham22122001/Uber_Data_Engineering_Project',
        demo: '',
        image: ayla,
        role: 'Data Engineering',
        
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