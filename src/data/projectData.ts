const projectData = [
    {
        id: 1,
        title: 'AI Email Assistant',
        description: 'Built a smart email assistant to help users draft replies efficiently. The frontend is developed with React, and the backend uses Spring Boot. Integrated Gemini API to generate AI-based email replies. Also created a Gmail extension that injects a custom reply button into the Gmail compose window, enabling users to generate responses directly within Gmail.',
        tags: ['React', 'Spring Boot', 'Tailwind CSS', 'Gemini API', 'Javascript', 'Google Extension'],
        image: '/assets/projects/ai-mail-assistant-ss.png',
        link: 'https://github.com/raghu309/ai-mail-assistant-and-extension',
    },
    {
        id: 2,
        title: 'React-Native Movie App',
        description: 'Developed a cross-platform mobile application using React Native and Expo to browse and search for movies. Integrated with a public movie API (e.g., TMDB) to display trending, upcoming, and top-rated films. Implemented smooth navigation, responsive UI, and dynamic search functionality for an intuitive user experience on both Android and iOS devices.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Mobile App', 'TMDB API'],
        image: '/assets/projects/react-native-movie-ss.png',
        link: 'https://github.com/raghu309/movie-native-app',
    },
    {
        id: 3,
        title: 'Blog App',
        description: 'Built a full-stack blogging platform with React frontend and Node.js backend, using MongoDB for data storage. Implemented features to add, edit, and delete blog posts. Integrated JWT-based authentication to enable secure user login and registration.',
        tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express', 'Blog App'],
        image: '/assets/projects/blog-ss.png',
        link: 'https://github.com/raghu309/blog-frontent',
    },
     {
        id: 4,
        title: 'Movie Mania',
        description: 'Built a responsive movie search application using React. Users can search for movies by title, with results fetched from TMDB API. Designed a clean and user-friendly interface for smooth browsing.',
        tags: ['React', 'JavaScript', 'Movie API', 'Responsive Design'],
        image: '/assets/projects/movie-web-ss.png',
        link: 'https://github.com/raghu309/movie_mania',
    },
    {
        id: 5,
        title: 'ToDo App',
        description: 'Created a full-stack todo application with React for the frontend and Node.js for the backend. Used MongoDB with Mongoose to store and manage tasks. Implemented features to add, update, delete, and mark todos as completed, providing a smooth and responsive user experience.',
       tags: ['React', 'Node.js', 'MongoDB', 'Mongoose', 'Express', 'Todo App'],
        image: '/assets/projects/todolist-ss.png',
        link: 'https://github.com/raghu309/ToDoList',
    },
    {
        id: 6,
        title: 'Bank Churn Detection',
        description: 'Built a machine learning model to predict customer churn using a Random Forest classifier. Performed exploratory data analysis to identify key patterns, and applied preprocessing techniques such as one-hot encoding, feature scaling, and missing value handling. Achieved effective classification performance using well-tuned hyperparameters.',
        tags: ['Python', 'Machine Learning', 'Random Forest', 'Pandas', 'Scikit-learn', 'EDA'],
        image: '/assets/projects/bank-churn-ss.png',
        link: 'https://github.com/raghu309/BankChurnDataset',
    },
    {
        id: 7,
        title: 'Detect AI Generated Text',
        description: 'Developed a machine learning model to identify AI-generated text using tokenization for text preprocessing and a Random Forest classifier for prediction. Processed textual data to extract meaningful features and trained the model to distinguish between human-written and AI-generated content with high accuracy.',
        tags: ['Python', 'Machine Learning', 'NLP', 'Tokenization', 'Random Forest', 'Scikit-learn'],
        image: '/assets/projects/detect-ai-gen-text-ss.png',
        link: 'https://github.com/raghu309/LLM---Detect-AI-Generated-Text',
    }
];

export default projectData;