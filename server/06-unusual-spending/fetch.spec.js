/*eslint dot-notation: "off"*/

import {replace, when, verify} from '../../test-helper';

describe.only('fetch', () => {
    it('interacts with months and api', () => {
        const months = replace('./months');
        const api = replace('./api')['api'];

        const currentMonth = {};
        const priorMonth = [];

        when(months.current()).thenReturn(currentMonth);
        when(months.prior()).thenReturn(priorMonth);

        let fetch = require('./fetch').fetch;
        fetch('user-id');
        verify(api('user-id', currentMonth));
        verify(api('user-id', priorMonth));
    });
});
