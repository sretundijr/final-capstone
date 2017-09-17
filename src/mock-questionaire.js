
export default function mockClientIssueQuestionaire() {
  return [
    {
      issueType: 'Check Engine Light',
      questions: [
        {
          question: 'Is there a driveability issue accompaning the check engine light? ' +
          'Example: Runs rough, does not make any power, etc.',
          answer: ['yes', 'no'],
          multiple: true,
        },
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
