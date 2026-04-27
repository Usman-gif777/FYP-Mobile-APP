export const assessmentApi = {
  // ... existing methods
  getAttempts: () => {
    // Mock data for development
    return Promise.resolve({
      data: [
        {
          id: 1,
          assessmentTitle: 'Depression Assessment',
          completedAt: new Date().toISOString(),
          score: 12,
          level: 'Moderate',
        },
        {
          id: 2,
          assessmentTitle: 'Anxiety Assessment',
          completedAt: new Date(Date.now() - 86400000).toISOString(),
          score: 8,
          level: 'Mild',
        },
      ],
    });
  },
};