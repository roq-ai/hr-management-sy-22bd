const mapping: Record<string, string> = {
  organizations: 'organization',
  payrolls: 'payroll',
  'performance-evaluations': 'performance_evaluation',
  'time-trackings': 'time_tracking',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
