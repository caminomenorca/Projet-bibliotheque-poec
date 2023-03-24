import React from 'react';

export default function SignupForm() {
  return (
    <div className="signup-container">
      <form>
        <h2>Login Info</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className="form-group">
          <label htmlFor="profile-picture">Profile Picture</label>
          <input type="file" id="profile-picture" name="profile-picture" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <h2>Personal Info</h2>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" required />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex</label>
          <select id="sex" name="sex" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="spoken-languages">Spoken Languages</label>
          <input type="text" id="spoken-languages" name="spoken-languages" />
        </div>
        <div className="form-group">
          <label htmlFor="favorite-genres">Favorite Genres</label>
          <input type="text" id="favorite-genres" name="favorite-genres" />
        </div>
        <div className="form-group">
          <label htmlFor="favorite-authors">Favorite Authors</label>
          <input type="text" id="favorite-authors" name="favorite-authors" />
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
