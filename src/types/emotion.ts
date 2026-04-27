export interface EmotionResult {
  dominantEmotion: string;
  probabilities: {
    happy: number;
    sad: number;
    angry: number;
    neutral: number;
    fearful: number;
    surprised: number;
  };
  audioAnalysis: any;
  textAnalysis: any;
}