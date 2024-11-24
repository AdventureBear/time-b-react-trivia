export interface QuestionType {
    id: number;
    question: string;
    answers: Array<string>;
    correct: number;
    score: Array<number>;
    story: string;
}