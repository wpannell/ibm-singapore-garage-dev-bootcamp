import {categorize} from './categorize';
import * as testData from './test-data';

describe('categorize spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('categorize should', () => {
    it('compute totals for all transactions based on category', () => {
      let categorizedPayments = categorize([
        testData.priorPayments,
        testData.currentPayments
      ]);
      categorizedPayments.should.deepEqual(testData.categorizedPayments);
    });

    it('compute totals for all transactions based on category even ' +
    'when one of the months has no transactions', () => {
      let categorizedPayments = categorize([
        testData.priorPayments,
        testData.emptyPayments
      ]);
      categorizedPayments.should.deepEqual(testData.categorizedPaymentsWithEmpty);
    });
  });
});
