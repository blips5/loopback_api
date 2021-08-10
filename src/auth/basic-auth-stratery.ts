/*import {BasicStrategy} from 'passport-http';
import {basicUserProfileFactory} from './userprofile.factory';
import {StrategyAdapter} from '@loopback/authentication-passport';

function verify(username: string, password: string, cb: Function) {
  users.find(username, password, cb);
}
const basicStrategy = new BasicStrategy(verify);
export const AUTH_STRATEGY_NAME = 'basic';
export const basicAuthStrategy = new StrategyAdapter(
  // The configured basic strategy instance
  basicStrategy,
  // Give the strategy a name
  // You'd better define your strategy name as a constant, like
  // `const AUTH_STRATEGY_NAME = 'basic'`.
  // You will need to decorate the APIs later with the same name.
  AUTH_STRATEGY_NAME,
  // Provide a user profile factory
  basicUserProfileFactory,
)*/
