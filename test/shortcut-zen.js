import '../register/zen'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import ZenObservable from 'zen-observable';
import AnyObservable from '..';
import implementation from '../implementation';

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
