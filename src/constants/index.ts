import {Subject} from "../types";

export const DEPARTMENTS = ['CS','Math','English']

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept)=>({
    value:dept,
    label:dept,
}))

export const MOCK_SUBJECTS: Subject[] = [
    // MIT
    {
        id: "1",
        code: "MIT-CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Foundational concepts in computation, algorithms, and programming using Python.",
        createdAt: "2024-01-10",
    },
    {
        id: "2",
        code: "MIT-CS301",
        name: "Algorithms and Data Structures",
        department: "CS",
        description: "Design and analysis of efficient algorithms, sorting, graphs, and dynamic programming.",
        createdAt: "2024-01-10",
    },
    {
        id: "3",
        code: "MIT-EE201",
        name: "Circuits and Electronics",
        department: "Engineering",
        description: "Fundamentals of circuit analysis, transistors, amplifiers, and digital logic.",
        createdAt: "2024-01-10",
    },
    {
        id: "4",
        code: "MIT-MATH301",
        name: "Linear Algebra",
        department: "Math",
        description: "Vector spaces, linear transformations, eigenvalues, and applications to engineering.",
        createdAt: "2024-01-10",
    },

    // Stanford
    {
        id: "5",
        code: "SU-CS229",
        name: "Machine Learning",
        department: "CS",
        description: "Supervised and unsupervised learning, neural networks, and practical ML engineering.",
        createdAt: "2024-02-15",
    },
    {
        id: "6",
        code: "SU-CS224N",
        name: "Natural Language Processing with Deep Learning",
        department: "CS",
        description: "Word embeddings, RNNs, transformers, and large language model architectures.",
        createdAt: "2024-02-15",
    },
    {
        id: "7",
        code: "SU-STAT101",
        name: "Introduction to Statistics",
        department: "Math",
        description: "Probability theory, hypothesis testing, regression, and data-driven inference.",
        createdAt: "2024-02-15",
    },
    {
        id: "8",
        code: "SU-BIO101",
        name: "Introductory Biology",
        department: "Science",
        description: "Cell biology, genetics, evolution, and molecular mechanisms of life.",
        createdAt: "2024-02-15",
    },

    // Harvard
    {
        id: "9",
        code: "HU-CS50",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Broad introduction to programming, web development, and computational thinking.",
        createdAt: "2024-03-20",
    },
    {
        id: "10",
        code: "HU-ECON101",
        name: "Principles of Economics",
        department: "Economics",
        description: "Microeconomic and macroeconomic theory, markets, fiscal policy, and global trade.",
        createdAt: "2024-03-20",
    },
    {
        id: "11",
        code: "HU-ENG201",
        name: "Academic Writing and Rhetoric",
        department: "English",
        description: "Critical reading, argumentative writing, and effective communication strategies.",
        createdAt: "2024-03-20",
    },
    {
        id: "12",
        code: "HU-PSYCH101",
        name: "Introduction to Psychology",
        department: "Science",
        description: "Cognitive, developmental, social, and clinical foundations of human behavior.",
        createdAt: "2024-03-20",
    },
]
