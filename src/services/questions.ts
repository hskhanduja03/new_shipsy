import { Question } from "../types";

export const generateQuestions = async (
  subject: string,
  level: string
): Promise<Question[]> => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(1000);

  const biologyQuestions: Question[] = [
    {
      id: 1,
      question: "What is the basic unit of life?",
      options: ["Tissue", "Cell", "Organ", "Organism"],
      correctAnswer: 1,
      explanation:
        "The cell is the basic structural and functional unit of life.",
    },
    {
      id: 2,
      question: "Which organ is responsible for pumping blood?",
      options: ["Lungs", "Liver", "Heart", "Kidneys"],
      correctAnswer: 2,
      explanation: "The heart pumps blood throughout the body.",
    },
    {
      id: 3,
      question: "Which part of the plant conducts photosynthesis?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      correctAnswer: 2,
      explanation:
        "Leaves contain chlorophyll and are the main site of photosynthesis.",
    },
    {
      id: 4,
      question: "What is the function of white blood cells?",
      options: [
        "Transport oxygen",
        "Clot blood",
        "Fight infections",
        "Produce hormones",
      ],
      correctAnswer: 2,
      explanation: "White blood cells defend the body against infections.",
    },
    {
      id: 5,
      question: "Where does digestion begin?",
      options: ["Stomach", "Mouth", "Small intestine", "Liver"],
      correctAnswer: 1,
      explanation:
        "Digestion begins in the mouth with the help of enzymes in saliva.",
    },
    {
      id: 6,
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: 2,
      explanation: "Plants absorb carbon dioxide for photosynthesis.",
    },
    {
      id: 7,
      question:
        "Which vitamin is produced when the skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      correctAnswer: 3,
      explanation:
        "Vitamin D is synthesized in the skin when exposed to sunlight.",
    },
    {
      id: 8,
      question: "Which blood cells carry oxygen?",
      options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      correctAnswer: 0,
      explanation: "Red blood cells contain hemoglobin that carries oxygen.",
    },
    {
      id: 9,
      question: "Which organ controls the body?",
      options: ["Heart", "Lungs", "Brain", "Liver"],
      correctAnswer: 2,
      explanation: "The brain is the control center of the body.",
    },
    {
      id: 10,
      question: "Which disease is caused by the deficiency of insulin?",
      options: ["Diabetes", "Cancer", "Asthma", "Hypertension"],
      correctAnswer: 0,
      explanation:
        "Diabetes is caused by a lack of insulin or the body's inability to use it effectively.",
    },
  ];

  const physicsQuestions: Question[] = [
    {
      id: 1,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "1.5 × 10⁷ m/s", "1 × 10⁶ m/s", "9.8 m/s²"],
      correctAnswer: 0,
      explanation:
        "Light travels in vacuum at approximately 3 × 10⁸ meters per second.",
    },
    {
      id: 2,
      question:
        "Which law explains the relationship between force, mass, and acceleration?",
      options: [
        "Newton's First Law",
        "Newton's Second Law",
        "Newton's Third Law",
        "Law of Gravitation",
      ],
      correctAnswer: 1,
      explanation:
        "Newton's Second Law states F = ma (Force equals mass times acceleration).",
    },
    {
      id: 3,
      question: "What is the SI unit of power?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correctAnswer: 1,
      explanation: "Power is measured in watts.",
    },
    {
      id: 4,
      question: "What instrument is used to measure temperature?",
      options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
      correctAnswer: 1,
      explanation: "A thermometer measures temperature.",
    },
    {
      id: 5,
      question: "Which force keeps the planets in orbit around the sun?",
      options: [
        "Electromagnetic force",
        "Frictional force",
        "Gravitational force",
        "Centrifugal force",
      ],
      correctAnswer: 2,
      explanation:
        "Gravitational force attracts planets toward the sun and maintains their orbit.",
    },
    {
      id: 6,
      question: "What is the unit of electric current?",
      options: ["Volt", "Ohm", "Watt", "Ampere"],
      correctAnswer: 3,
      explanation: "Electric current is measured in amperes (A).",
    },
    {
      id: 7,
      question: "Which phenomenon explains the bending of light?",
      options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
      correctAnswer: 1,
      explanation:
        "Refraction is the bending of light when it passes from one medium to another.",
    },
    {
      id: 8,
      question: "Which type of energy is stored in a stretched spring?",
      options: [
        "Kinetic energy",
        "Thermal energy",
        "Elastic potential energy",
        "Gravitational potential energy",
      ],
      correctAnswer: 2,
      explanation:
        "Elastic potential energy is stored in stretched or compressed objects.",
    },
    {
      id: 9,
      question: "What happens to an object in free fall?",
      options: [
        "Its speed remains constant",
        "It accelerates due to gravity",
        "It decelerates",
        "It floats",
      ],
      correctAnswer: 1,
      explanation:
        "An object in free fall accelerates due to gravity at 9.8 m/s².",
    },
    {
      id: 10,
      question: "Which wave does not require a medium to travel?",
      options: ["Sound wave", "Water wave", "Seismic wave", "Light wave"],
      correctAnswer: 3,
      explanation:
        "Light waves are electromagnetic and can travel through a vacuum.",
    },
  ];

  const computerQuestions: Question[] = [
    {
      id: 1,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Program Unit",
        "Control Panel Unit",
        "Central Panel Unit",
      ],
      correctAnswer: 0,
      explanation:
        "CPU stands for Central Processing Unit, the brain of the computer.",
    },
    // more...
  ];

  const historyQuestions: Question[] = [
    {
      id: 1,
      question: "Who was the first President of the United States?",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "John Adams",
        "Thomas Jefferson",
      ],
      correctAnswer: 1,
      explanation:
        "George Washington was the first U.S. President (1789–1797).",
    },
    // more...
  ];

  const generalKnowledgeQuestions: Question[] = [
    // more...
  ];

  const mathQuestions: Question[] = [
    // more...
  ];

  const questionsBySubject: Record<string, Question[]> = {
    biology: biologyQuestions,
    physics: physicsQuestions,
    "computer-science": computerQuestions,
    history: historyQuestions,
    "general-knowledge": generalKnowledgeQuestions,
    mathematics: mathQuestions,
  };

  return questionsBySubject[subject] || [];
};
