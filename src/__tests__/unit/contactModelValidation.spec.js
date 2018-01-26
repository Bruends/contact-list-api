const ContactModel = require('../../models/contact');

describe.skip('contact model', () => {
  it('should not return an error when a valid contact is used', () => {
    const validContact = new ContactModel({ name: 'bruno', phone: '1234-1234', email: 'test@email.com' });

    validContact.validate((err) => {
      expect(err).toBeNull();
    });
  });

  it('should return an error when contact doesnt have a name', () => {
    const invalidContact = new ContactModel({ phone: '1234-1234', email: 'test@email.com' });

    invalidContact.validate((err) => {
      expect(err).not.toBeNull();
    });
  });

  it('should return an error if contact have an invalid email', () => {
    const invalidContact = new ContactModel({ name: 'bruno', email: 'xxxxxxx' });

    invalidContact.validate((err) => {
      expect(err).not.toBeNull();
    });
  });
});
