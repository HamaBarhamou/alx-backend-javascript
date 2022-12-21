export function uploadPhoto() {
  return new Promise((resoleve, reject) => {
    resoleve({
      status: 200,
      body: 'photo-profile-1',
    });
  });
}

export function createUser() {
  return new Promise((resoleve, reject) => {
    resoleve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  });
}
