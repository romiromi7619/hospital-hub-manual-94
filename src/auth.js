let currentUser = null;

export function initAuth() {
  // Check localStorage for existing session
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
  }
}

export function getAuth() {
  return {
    user: currentUser,
    isAuthenticated: !!currentUser
  };
}

export async function login(email, password) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  let mockUser;
  if (email.includes('admin')) {
    mockUser = {
      id: 'a-' + Math.random().toString(36).substr(2, 9),
      name: 'Admin ' + email.split('@')[0],
      email,
      role: 'admin'
    };
  } else if (email.includes('doctor')) {
    mockUser = {
      id: 'd-' + Math.random().toString(36).substr(2, 9),
      name: 'Dr. ' + email.split('@')[0],
      email,
      role: 'doctor'
    };
  } else {
    mockUser = {
      id: 'p-' + Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role: 'patient'
    };
  }

  currentUser = mockUser;
  localStorage.setItem('user', JSON.stringify(mockUser));
  return mockUser;
}

export function logout() {
  currentUser = null;
  localStorage.removeItem('user');
}

export async function register(name, email, password, role) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  const mockUser = {
    id: role === 'doctor' 
      ? 'd-' + Math.random().toString(36).substr(2, 9)
      : role === 'admin'
      ? 'a-' + Math.random().toString(36).substr(2, 9)
      : 'p-' + Math.random().toString(36).substr(2, 9),
    name,
    email,
    role
  };

  currentUser = mockUser;
  localStorage.setItem('user', JSON.stringify(mockUser));
  return mockUser;
}