// BankMock Pro - Official TCS iON / IBPS Instructions and Legend

export const TCS_ION_INSTRUCTIONS = {
  general: [
    'The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.',
    'When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.',
    'The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:',
    '1. You have not visited the question yet.',
    '2. You have not answered the question.',
    '3. You have answered the question.',
    '4. You have NOT answered the question, but have marked the question for review.',
    '5. The question(s) "Answered and Marked for Review" will be considered for evaluation.'
  ],
  navigating: [
    'Click on the question number in the Question Palette to go to that question directly.',
    'Click on "Save & Next" to save your answer for the current question and then go to the next question.',
    'Click on "Mark for Review & Next" to save your question as marked for review and go to the next question.'
  ],
  answering: [
    'To select your answer, click on the button of one of the options (A, B, C, D, or E).',
    'To deselect your chosen answer, click on the "Clear Response" button.',
    'To change your chosen answer, click on the button of another option.',
    'To save your answer, you MUST click on the "Save & Next" button.'
  ],
  legendGuide: [
    { type: 'not-visited', label: 'Not Visited', color: '#e5e7eb', text: '#374151', countKey: 'notVisited' },
    { type: 'not-answered', label: 'Not Answered', color: '#ef4444', text: '#ffffff', countKey: 'notAnswered' },
    { type: 'answered', label: 'Answered', color: '#22c55e', text: '#ffffff', countKey: 'answered' },
    { type: 'marked-review', label: 'Marked for Review', color: '#8b5cf6', text: '#ffffff', countKey: 'markedForReview' },
    { type: 'ans-marked-review', label: 'Answered & Marked for Review (Evaluated)', color: '#8b5cf6', hasDot: true, text: '#ffffff', countKey: 'ansAndMarked' }
  ]
};
