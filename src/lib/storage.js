const storage = {
  get(key, fallback) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log('local storage broke');
      return fallback;
    }
  },

  set(key, value, fallback) {
    try {
      return localStorage.setItem(key, value);
    } catch (error) {
      console.log('local storage broke');
      return fallback;
    }
  },
}

export default storage;