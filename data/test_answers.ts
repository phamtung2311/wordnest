import test1 from '../test1_answers.json';

export const getAnswers = (testId: string): Record<string, string> => {
  if (testId === '1') return test1 as Record<string, string>;
  
  // Mock fallback if user hasn't provided yet
  const mock: Record<string, string> = {};
  for(let i=101; i<=200; i++) mock[String(i)] = 'A';
  return mock;
};
