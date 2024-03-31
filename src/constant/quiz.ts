interface Quiz {
  question: string;
  answer: string[];
}

export const QUIZ_LENGTH = 10;

export const mockQuizs: Quiz[] = [
  {
    question: "What is your favorite color?",
    answer: ["Red", "Blue", "Green"],
  },
  {
    question: "Which animal do you identify with?",
    answer: ["Dog", "Cat"],
  },
  {
    question: "What's your preferred way to relax?",
    answer: ["Reading a book", "Watching a movie", "Going for a walk"],
  },
  {
    question: "What type of music do you enjoy?",
    answer: ["Rock", "Pop", "Jazz"],
  },
  {
    question: "How do you like to spend your free time?",
    answer: ["Cooking", "Gardening"],
  },
  {
    question: "What's your favorite season?",
    answer: ["Summer", "Winter", "Spring"],
  },
  {
    question: "What's your favorite type of food?",
    answer: ["Italian", "Mexican", "Chinese"],
  },
  {
    question: "What's your favorite hobby?",
    answer: ["Painting", "Playing a musical instrument", "Photography"],
  },
  {
    question: "What's your favorite outdoor activity?",
    answer: ["Hiking", "Cycling"],
  },
  {
    question: "What's your favorite holiday destination?",
    answer: ["Beach", "Mountains"],
  },
];
