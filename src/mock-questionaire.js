
// todo made answer an array for single answer questions
export default function mockClientIssueQuestionaire() {
  return [
    {
      issueType: 'Check Engine Light',
      questions: [
        {
          id: '123',
          question: 'Is there a driveability issue accompaning the check engine light? ' +
          'Example: Runs rough, does not make any power, etc.',
          answer: ['yes', 'no'],
          // multipleBranch: true,
          multipleChoice: true,
          // branch to driveability after completing the remaining questions?
        },
        {
          id: '1234',
          question: 'How long has the fault light been on?',
          answer: [''],
          // multipleBranch: false,
          multipleChoice: false,
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
