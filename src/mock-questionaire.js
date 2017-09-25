
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
          multipleChoice: true,
        },
        {
          id: '1234',
          question: 'How long has the fault light been on?',
          answer: [''],
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
        {
          id: '89787',
          question: 'Please select the component category that you are expeirencing the issue.',
          multipleChoice: true,
          answer: [
            'Windows',
            'Seats',
            'Navigation',
            'Radio',
            'Heating and AC controls',
            'Comfort Features',
          ],
        },
        {
          id: '789797',
          question: 'Please describe in as much detail, what happens.',
          multipleChoice: false,
          answer: [],
        },
        {
          id: '897807087',
          question: 'How often does the issue occur?',
          multipleChoice: true,
          answer: ['Every couple of days', 'Always', 'Once', 'Ocassionally'],
        },
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
