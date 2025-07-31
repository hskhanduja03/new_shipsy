import { Question } from "../types";

export const generateQuestions = async (
  subject: string,
  level: string
): Promise<Question[]> => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(1000);

  const questionsBySubject: Record<string, Question[]> = {
    biology: [
      {
        id: 1,
        question: `What is the fundamental unit of life in biology?`,
        options: ["Cell", "Atom", "Molecule", "Tissue"],
        correctAnswer: 0,
        explanation:
          "The cell is the basic structural and functional unit of all living organisms.",
      },
      {
        id: 2,
        question: `Which process converts light energy into chemical energy?`,
        options: [
          "Respiration",
          "Photosynthesis",
          "Digestion",
          "Transpiration",
        ],
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
    ],
    mathematics: [
      {
        id: 1,
        question: "What is the value of π (pi) approximately?",
        options: ["2.14", "3.14", "3.41", "4.13"],
        correctAnswer: 1,
        explanation:
          "π is approximately 3.14 and represents the ratio of a circle's circumference to its diameter.",
      },
      {
        id: 2,
        question: "What is 7 × 8?",
        options: ["54", "56", "64", "58"],
        correctAnswer: 1,
        explanation: "7 multiplied by 8 equals 56.",
      },
      {
        id: 3,
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 1,
        explanation: "The square root of 144 is 12.",
      },
      {
        id: 4,
        question: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        correctAnswer: 1,
        explanation: "25% of 200 is 0.25 × 200 = 50.",
      },
      {
        id: 5,
        question: "Which number is a prime number?",
        options: ["4", "6", "7", "9"],
        correctAnswer: 2,
        explanation: "7 is a prime number with only two factors: 1 and 7.",
      },
      {
        id: 6,
        question: "What is the formula for the area of a triangle?",
        options: [
          "base × height",
          "½ × base × height",
          "base + height",
          "2 × base × height",
        ],
        correctAnswer: 1,
        explanation: "Area of triangle = ½ × base × height.",
      },
      {
        id: 7,
        question: "What is 2 to the power of 5?",
        options: ["16", "32", "64", "128"],
        correctAnswer: 1,
        explanation: "2^5 = 2 × 2 × 2 × 2 × 2 = 32.",
      },
      {
        id: 8,
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["20", "24", "32", "36"],
        correctAnswer: 2,
        explanation: "The pattern doubles each time. Next: 16 × 2 = 32.",
      },
      {
        id: 9,
        question: "Which of these angles is an acute angle?",
        options: ["90°", "120°", "45°", "180°"],
        correctAnswer: 2,
        explanation: "Acute angles are less than 90°. 45° is acute.",
      },
      {
        id: 10,
        question: "What is the perimeter of a square with side length 5?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 2,
        explanation: "Perimeter = 4 × side = 4 × 5 = 20.",
      },
    ],
    "general-knowledge": [
      {
        id: 1,
        question: "Which is the largest continent by land area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: 1,
        explanation: "Asia is the largest continent by land area.",
      },
      {
        id: 2,
        question:
          "Who is the current Secretary-General of the United Nations (as of 2025)?",
        options: [
          "Ban Ki-moon",
          "Antonio Guterres",
          "Kofi Annan",
          "Tedros Adhanom",
        ],
        correctAnswer: 1,
        explanation: "Antonio Guterres is the current UN Secretary-General.",
      },
      {
        id: 3,
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Saturn", "Jupiter"],
        correctAnswer: 0,
        explanation:
          "Mars is called the Red Planet due to its reddish appearance.",
      },
      {
        id: 4,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["India", "Japan", "China", "Thailand"],
        correctAnswer: 1,
        explanation: "Japan is famously known as the Land of the Rising Sun.",
      },
      {
        id: 5,
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
        correctAnswer: 2,
        explanation: "The UK uses Pound Sterling (GBP).",
      },
      {
        id: 6,
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation:
          "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
      },
      {
        id: 7,
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1,
        explanation:
          "The Nile River is generally considered the longest river.",
      },
      {
        id: 8,
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
        correctAnswer: 1,
        explanation: "Ottawa is the capital city of Canada.",
      },
      {
        id: 9,
        question: "Who invented the telephone?",
        options: [
          "Thomas Edison",
          "Nikola Tesla",
          "Alexander Graham Bell",
          "Isaac Newton",
        ],
        correctAnswer: 2,
        explanation:
          "Alexander Graham Bell is credited with inventing the telephone.",
      },
      {
        id: 10,
        question: "Which sport is known as the 'king of sports'?",
        options: ["Basketball", "Tennis", "Soccer", "Cricket"],
        correctAnswer: 2,
        explanation: "Soccer (football) is often called the 'king of sports'.",
      },
    ],
    chemistry: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        correctAnswer: 0,
        explanation: "Gold's symbol is Au from its Latin name 'Aurum'.",
      },
      {
        id: 2,
        question: "Water is made up of which two elements?",
        options: [
          "Hydrogen and Oxygen",
          "Hydrogen and Nitrogen",
          "Oxygen and Carbon",
          "Nitrogen and Helium",
        ],
        correctAnswer: 0,
        explanation: "Water is H₂O, made of hydrogen and oxygen.",
      },
      {
        id: 3,
        question: "What is the pH of pure water?",
        options: ["0", "7", "14", "4"],
        correctAnswer: 1,
        explanation: "Pure water has a neutral pH of 7.",
      },
      {
        id: 4,
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
        explanation: "Plants absorb CO₂ during photosynthesis.",
      },
      {
        id: 5,
        question: "Which element is common in all acids?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Chlorine"],
        correctAnswer: 0,
        explanation: "All acids release hydrogen ions (H⁺) in solution.",
      },
      {
        id: 6,
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Oxygen", "Helium", "Carbon"],
        correctAnswer: 0,
        explanation: "Hydrogen is the first element in the periodic table.",
      },
      {
        id: 7,
        question: "What is the chemical formula of table salt?",
        options: ["NaCl", "KCl", "Na₂CO₃", "CaCl₂"],
        correctAnswer: 0,
        explanation: "Table salt is sodium chloride: NaCl.",
      },
      {
        id: 8,
        question: "Which gas is known as laughing gas?",
        options: [
          "Oxygen",
          "Nitrous oxide",
          "Carbon monoxide",
          "Sulfur dioxide",
        ],
        correctAnswer: 1,
        explanation: "Nitrous oxide (N₂O) is called laughing gas.",
      },
      {
        id: 9,
        question: "Which acid is found in vinegar?",
        options: [
          "Citric acid",
          "Acetic acid",
          "Sulfuric acid",
          "Hydrochloric acid",
        ],
        correctAnswer: 1,
        explanation: "Acetic acid is the main component of vinegar.",
      },
      {
        id: 10,
        question: "Which of the following is a noble gas?",
        options: ["Oxygen", "Chlorine", "Helium", "Nitrogen"],
        correctAnswer: 2,
        explanation: "Helium is a noble gas with full outer shell electrons.",
      },
    ],
    psychology: [
      {
        id: 1,
        question: "Who is known as the father of psychoanalysis?",
        options: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B.F. Skinner"],
        correctAnswer: 0,
        explanation: "Sigmund Freud founded psychoanalysis.",
      },
      {
        id: 2,
        question: "What is the term for learning by association?",
        options: [
          "Operant conditioning",
          "Classical conditioning",
          "Observational learning",
          "Trial and error",
        ],
        correctAnswer: 1,
        explanation: "Classical conditioning involves learning by association.",
      },
      {
        id: 3,
        question: "What is a phobia?",
        options: [
          "A mental illness",
          "An irrational fear",
          "A mood disorder",
          "A personality trait",
        ],
        correctAnswer: 1,
        explanation:
          "Phobias are irrational fears of specific objects or situations.",
      },
      {
        id: 4,
        question: "Which part of the brain regulates emotions?",
        options: ["Cerebellum", "Cortex", "Amygdala", "Thalamus"],
        correctAnswer: 2,
        explanation: "The amygdala plays a key role in processing emotions.",
      },
      {
        id: 5,
        question: "Which psychologist proposed the hierarchy of needs?",
        options: ["Freud", "Skinner", "Maslow", "Piaget"],
        correctAnswer: 2,
        explanation: "Abraham Maslow created the hierarchy of needs theory.",
      },
      {
        id: 6,
        question: "What is the study of behavior and mental processes called?",
        options: ["Biology", "Neurology", "Psychology", "Sociology"],
        correctAnswer: 2,
        explanation:
          "Psychology is the scientific study of behavior and mental processes.",
      },
      {
        id: 7,
        question:
          "Which technique involves rewarding behavior to increase its occurrence?",
        options: [
          "Punishment",
          "Extinction",
          "Negative reinforcement",
          "Positive reinforcement",
        ],
        correctAnswer: 3,
        explanation:
          "Positive reinforcement increases behavior by offering rewards.",
      },
      {
        id: 8,
        question: "What is the term for a split personality disorder?",
        options: [
          "Bipolar disorder",
          "Schizophrenia",
          "Dissociative identity disorder",
          "Depression",
        ],
        correctAnswer: 2,
        explanation:
          "Dissociative Identity Disorder involves multiple distinct identities.",
      },
      {
        id: 9,
        question: "What does IQ stand for?",
        options: [
          "Intelligence Quotient",
          "Intelligence Quality",
          "Insight Quotient",
          "Intellectual Quality",
        ],
        correctAnswer: 0,
        explanation: "IQ stands for Intelligence Quotient.",
      },
      {
        id: 10,
        question:
          "Which stage is NOT part of Piaget's cognitive development theory?",
        options: [
          "Sensorimotor",
          "Preoperational",
          "Postformal",
          "Concrete operational",
        ],
        correctAnswer: 2,
        explanation: "Postformal is not part of Piaget's original theory.",
      },
    ],
    history: [
      {
        id: 1,
        question: "Who was the first President of the United States?",
        options: [
          "Thomas Jefferson",
          "Abraham Lincoln",
          "George Washington",
          "John Adams",
        ],
        correctAnswer: 2,
        explanation: "George Washington was the first U.S. President.",
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1946", "1950"],
        correctAnswer: 1,
        explanation: "World War II ended in 1945.",
      },
      {
        id: 3,
        question: "Who wrote the Indian Constitution?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "B.R. Ambedkar",
          "Subhas Chandra Bose",
        ],
        correctAnswer: 2,
        explanation:
          "B.R. Ambedkar was the chief architect of the Indian Constitution.",
      },
      {
        id: 4,
        question: "Which empire built the Taj Mahal?",
        options: [
          "Maurya Empire",
          "Mughal Empire",
          "British Empire",
          "Gupta Empire",
        ],
        correctAnswer: 1,
        explanation:
          "The Taj Mahal was built by the Mughal Emperor Shah Jahan.",
      },
      {
        id: 5,
        question: "Who was known as the Iron Lady of Britain?",
        options: [
          "Theresa May",
          "Margaret Thatcher",
          "Elizabeth II",
          "Angela Merkel",
        ],
        correctAnswer: 1,
        explanation: "Margaret Thatcher was known as the Iron Lady.",
      },
      {
        id: 6,
        question: "Which city was the capital of the Roman Empire?",
        options: ["Athens", "Rome", "Istanbul", "Venice"],
        correctAnswer: 1,
        explanation: "Rome was the capital of the Roman Empire.",
      },
      {
        id: 7,
        question: "In which year did India gain independence?",
        options: ["1945", "1946", "1947", "1948"],
        correctAnswer: 2,
        explanation: "India gained independence on August 15, 1947.",
      },
      {
        id: 8,
        question: "Who was the first man to walk on the moon?",
        options: [
          "Yuri Gagarin",
          "Buzz Aldrin",
          "Neil Armstrong",
          "John Glenn",
        ],
        correctAnswer: 2,
        explanation: "Neil Armstrong was the first person to walk on the moon.",
      },
      {
        id: 9,
        question: "What was the name of Hitler's political party?",
        options: [
          "Communist Party",
          "Nazi Party",
          "Socialist Union",
          "Democratic Front",
        ],
        correctAnswer: 1,
        explanation:
          "Hitler led the National Socialist German Workers' Party (Nazi).",
      },
      {
        id: 10,
        question: "Who discovered America in 1492?",
        options: [
          "Christopher Columbus",
          "Vasco da Gama",
          "Ferdinand Magellan",
          "Marco Polo",
        ],
        correctAnswer: 0,
        explanation: "Christopher Columbus discovered America in 1492.",
      },
    ],
    physics: [
      {
        id: 1,
        question: "What is the unit of force in the SI system?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correctAnswer: 1,
        explanation:
          "The Newton (N) is the SI unit of force, named after Isaac Newton.",
      },
      {
        id: 2,
        question: "What is the speed of light in vacuum?",
        options: ["3 × 10⁸ m/s", "2 × 10⁸ m/s", "4 × 10⁸ m/s", "1 × 10⁸ m/s"],
        correctAnswer: 0,
        explanation:
          "The speed of light in vacuum is approximately 3 × 10⁸ meters per second.",
      },
      {
        id: 3,
        question: "What is Newton's first law of motion also known as?",
        options: [
          "Law of acceleration",
          "Law of inertia",
          "Law of action-reaction",
          "Law of gravitation",
        ],
        correctAnswer: 1,
        explanation: "Newton's first law is also called the law of inertia.",
      },
      {
        id: 4,
        question: "What type of energy does a moving object possess?",
        options: [
          "Potential energy",
          "Kinetic energy",
          "Thermal energy",
          "Chemical energy",
        ],
        correctAnswer: 1,
        explanation:
          "A moving object possesses kinetic energy due to its motion.",
      },
      {
        id: 5,
        question: "What is the acceleration due to gravity on Earth?",
        options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
        correctAnswer: 1,
        explanation:
          "The acceleration due to gravity on Earth is approximately 9.8 m/s².",
      },
      {
        id: 6,
        question:
          "Which law states that energy cannot be created or destroyed?",
        options: [
          "Newton's law",
          "Ohm's law",
          "Conservation of energy",
          "Hooke's law",
        ],
        correctAnswer: 2,
        explanation:
          "The law of conservation of energy states that energy cannot be created or destroyed.",
      },
      {
        id: 7,
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: 2,
        explanation: "The Ohm (Ω) is the unit of electrical resistance.",
      },
      {
        id: 8,
        question: "What phenomenon explains why objects appear bent in water?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correctAnswer: 1,
        explanation:
          "Refraction is the bending of light when it passes from one medium to another.",
      },
      {
        id: 9,
        question: "What is the relationship between frequency and wavelength?",
        options: [
          "Directly proportional",
          "Inversely proportional",
          "No relationship",
          "Exponentially related",
        ],
        correctAnswer: 1,
        explanation:
          "Frequency and wavelength are inversely proportional: as one increases, the other decreases.",
      },
      {
        id: 10,
        question: "What is absolute zero in Celsius?",
        options: ["-273.15°C", "-100°C", "0°C", "-200°C"],
        correctAnswer: 0,
        explanation:
          "Absolute zero is -273.15°C, the theoretical temperature where all molecular motion stops.",
      },
    ],
  };

  return questionsBySubject[subject] || [];
};
