import Controller from '@ember/controller';
import { capitalize } from '@ember/string';

import { variation } from 'ember-launch-darkly';

export default class IdentifiedUserController extends Controller {
  get shape() {
    return capitalize(variation('shape'));
  }
}
