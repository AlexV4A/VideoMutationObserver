import { Lightning, Utils } from '@lightningjs/sdk'
import Player from './Player.js';
import VideoObserver from './lib/observer.js';
export default class App extends Lightning.Component  {
 
  static _template() {
      return {
          Home: {
              // page
          },
          Settings: {
              // page
          },
          Player: {
              type: Player
          }
      }
  }

  // to make the example more real-life im going add a Playing state
  _init() {
      this._setState("Playing")
  }

  static _states() {
      return [
          class Playing extends this{
              // delegate focuspath to the player
              _getFocused() {
                  return this.tag("Player")
              }
          }
      ]
  }
}
