export default function access(initialState) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'super_admin',
    canDeveloper:
      (currentUser && currentUser.access === 'developer') ||
      (currentUser && currentUser.access === 'super_admin'),
    canUser:
      (currentUser && currentUser.access === 'tellecaller') ||
      (currentUser && currentUser.access === 'super_admin'),
  };
}
