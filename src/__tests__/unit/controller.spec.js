const sinon = require('sinon');

const contactController = require('../../controllers/contact');
const contactModel = require('../../models/contact');

describe('Controller tests', () => {
  describe('GET contact/', () => {
    it('should return a list of contacts', async (done) => {
      const fakeContact = [{
        name: 'test',
        email: 'test@email.com',
      }];

      const request = {};
      const response = {
        send: sinon.spy(),
        status: () => sinon.spy(),
      };

      contactModel.find = sinon.stub();
      contactModel.find.withArgs({}).resolves(fakeContact);

      const controller = contactController(contactModel);
      await controller.all(request, response);
      sinon.assert.calledWith(response.send, fakeContact);

      done();
    });
  });
});
