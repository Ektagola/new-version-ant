export default function access(initialState) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'super_admin',
  };
}
