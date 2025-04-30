class User {
    constructor({ id, email, username, avatar_url, created_at }) {
      this.id = id;
      this.email = email;
      this.username = username;
      this.avatar_url = avatar_url || null;
      this.created_at = new Date().toISOString();
    }
  
    static fromSupabase(data) {
      return new User({
        id: data.id,
        email: data.email,
        username: data.username,
        avatar_url: data.avatar_url,
        created_at: data.created_at,
      });
    }
  
    toJSON() {
      return {
        id: this.id,
        email: this.email,
        username: this.username,
        avatar_url: this.avatar_url,
        created_at: this.created_at,
      };
    }
}
  
module.exports = User;