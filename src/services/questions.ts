import { Question } from "../types";


export const generateQuestions = async (
  subject: string,
  level: string
): Promise<Question[]> => {

  const mockQuestions: Question[] = [
    {
      id: 1,
      question: `What is the fundamental unit of life in ${subject}?`,
      options: ["Cell", "Atom", "Molecule", "Tissue"],
      correctAnswer: 0,
      explanation:
        "The cell is the basic structural and functional unit of all living organisms.",
    },
    {
      id: 2,
      question: `Which process converts light energy into chemical energy?`,
      options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
      correctAnswer: 1,
      explanation:
        "Photosynthesis is the process by which plants convert light energy into chemical energy.",
    },
    {
      id: 3,
      question: `What is the powerhouse of the cell?`,
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correctAnswer: 2,
      explanation:
        "Mitochondria are called the powerhouse of the cell because they produce ATP.",
    },
    {
      id: 4,
      question: `Which blood type is considered the universal donor?`,
      options: ["A", "B", "AB", "O"],
      correctAnswer: 3,
      explanation:
        "Type O blood is considered the universal donor because it lacks A and B antigens.",
    },
    {
      id: 5,
      question: `What is the process of cell division called?`,
      options: ["Meiosis", "Mitosis", "Both A and B", "None of the above"],
      correctAnswer: 2,
      explanation:
        "Both meiosis and mitosis are types of cell division with different purposes.",
    },
    {
      id: 6,
      question: `Which organ system is responsible for gas exchange?`,
      options: ["Circulatory", "Respiratory", "Digestive", "Nervous"],
      correctAnswer: 1,
      explanation:
        "The respiratory system is responsible for the exchange of oxygen and carbon dioxide.",
    },
    {
      id: 7,
      question: `What is DNA an abbreviation for?`,
      options: [
        "Deoxyribonucleic Acid",
        "Dinitrogen Acid",
        "Dioxin Acid",
        "Dehydrated Acid",
      ],
      correctAnswer: 0,
      explanation:
        "DNA stands for Deoxyribonucleic Acid, which contains genetic instructions.",
    },
    {
      id: 8,
      question: `Which process removes waste products from the body?`,
      options: ["Digestion", "Circulation", "Excretion", "Respiration"],
      correctAnswer: 2,
      explanation:
        "Excretion is the process of removing metabolic waste products from the body.",
    },
    {
      id: 9,
      question: `What is the largest organ in the human body?`,
      options: ["Liver", "Brain", "Lungs", "Skin"],
      correctAnswer: 3,
      explanation:
        "The skin is the largest organ, covering the entire surface of the body.",
    },
    {
      id: 10,
      question: `Which vitamin is produced when skin is exposed to sunlight?`,
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: 3,
      explanation:
        "Vitamin D is synthesized in the skin when exposed to UVB radiation from sunlight.",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mockQuestions;
};
