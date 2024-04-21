const roles = ['admin', 'dinner', 'franchise'];

class Api {
  isAdmin(user) {
    return user?.role === 'admin';
  }

  isFranchise(user) {
    return user?.role === 'franchise';
  }

  async getPizzas() {
    const pizzas = [
      { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png' },
      { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png' },
      { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png' },
      { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png' },
      { title: 'Flat', description: 'Something special', image: 'pizza5.png' },
      { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png' },
    ];

    return pizzas;
  }

  async login(email, password) {
    if (!password) return false;

    localStorage.setItem('email', email);
    const role = roles.find((role) => email.includes(role)) || 'dinner';
    localStorage.setItem('role', role);
    return { email, role };
  }

  async logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  async getUser() {
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (email) {
      return { email, role };
    }
    return null;
  }

  loggedIn() {
    return !!this.getUser();
  }
}

export default new Api();
