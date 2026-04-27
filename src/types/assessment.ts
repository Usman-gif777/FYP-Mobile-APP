export interface Assessment {
  id: number;
  title: string;
  description: string;
  category: string;
  questionsCount: number;
  duration: number;
  thumbnail?: string;
}

export interface Question {
  id: number;
  text: string;
  assessmentId: number;
  options: SurveyOption[];
}

export interface SurveyOption {
  id: number;
  text: string;
  value: number;
  questionId: number;
}

export interface TestAttempt {
  id: number;
  assessmentId: number;
  userId: number;
  score: number;
  level: string;
  completedAt: string;
  answers: Answer[];
}

export interface Answer {
  questionId: number;
  optionId: number;
  value: number;
}
