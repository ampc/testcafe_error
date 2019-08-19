//@ts-ignore
import {t} from 'testcafe';

fixture`Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async (t) => {
    // Test code
   await t.debug();
});
