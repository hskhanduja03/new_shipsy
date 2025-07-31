import { Question } from "../types";


export const generateQuestions = async (
  subject: string,
  level: string
): Promise<Question[]> => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(1000);

  const biologyQuestions: Question[] = [
    /* your biology questions here */
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
    // more...
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
    /* existing */
  ];
  const mathQuestions: Question[] = [
    /* your math questions */
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

