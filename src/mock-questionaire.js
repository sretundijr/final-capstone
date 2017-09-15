
export default function mockClientIssueQuestionaire() {
  return [
    {
      issueType: 'Check Engine Light',
      questions: [
        'test question',
        { question: 'blah', answer: ['yes', 'no'], multiple: true },
      ],
    },
    {
      issueType: 'Driveability Issues',
      questions: [
        'test question',
      ],
    },
    {
      issueType: 'Interior Electrical Issue',
      questions: [
        'test question',
      ],
    },
    {
      issueType: 'Starting Issues',
      questions: [
        'test question',
      ],
    },
    {
      issueType: 'Noise And Vibration Issue',
      questions: [
        'test question',
      ],
    },
    {
      issueType: 'Heating And Cooling System',
      questions: [
        'test question',
      ],
    },
  ];
}
