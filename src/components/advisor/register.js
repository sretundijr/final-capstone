
import React from 'react';

import TextInput from './text-input';
import EmailInput from './email-input';

export default function Register() {
  return (
    <div>
      <form className="form-style-4">
        <label htmlFor="shop-name">
          <span>
            Shop Name
          </span>
          <TextInput
            name="shop-name"
            onChange={e => this.setShopName(e.target.value)}
            value={this.state.shopName}
          />
        </label>
        <label htmlFor="advisor-name">
          <span>
            Your Name
          </span>
          <TextInput
            name="advisor-name"
            onChange={e => this.setAdvisorName(e.target.value)}
            value={this.state.advisorName}
          />
        </label>
        <label htmlFor="advisor-email">
          <span>
            Your Email
          </span>
          <EmailInput
            name="advisor-email"
            onChange={e => this.setAdvisorEmail(e.target.value)}
            value={this.state.advisorEmail}
          />
        </label>
      </form>
    </div>
  );
}
