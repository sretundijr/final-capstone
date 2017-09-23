
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
        {
          id: '12',
          question: 'Did something happen prior to the light coming on?',
          answer: [''],
          multipleChoice: false,
        },
        {
          id: '1',
          question: 'Has another shop attempted to fix the issue or did the issue occur shortly after vehicle service?',
          multipleChoice: false,
          answer: [''],
        },
      ],
    },
    {
      issueType: 'Driveability Issues',
      questions: [
        {
          id: '234',
          question: 'Are you experiencing misfires or hesitations?',
          multipleChoice: true,
          answer: ['yes', 'no'],
        },
        {
          id: '23456',
          question: 'Is the vehicle driveable?',
          multipleChoice: true,
          answer: ['yes', 'no'],
        },
        {
          id: '765',
          question: 'Is the issue intermittent?',
          multipleChoice: true,
          answer: ['yes', 'no'],
        },
        {
          id: '0987',
          question: 'Please describe what is going on?',
          multipleChoice: false,
          answer: [''],
        },
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
