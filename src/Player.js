import { Lightning, MediaPlayer, Utils } from '@lightningjs/sdk'


export default class Player extends Lightning.Component  {

    static _template () {
        return {
            MediaPlayer: { type: MediaPlayer }
        };
    }

    _firstActive() {
        this.videoUrl ='images/video.mp4'
        this.tag('MediaPlayer').updateSettings({consumer: this});
        this.tag('MediaPlayer').open(Utils.asset(this.videoUrl));
        
        setTimeout(() => {
            this.tag('MediaPlayer').doPlay()
        }, 2000);

    }

    $mediaplayerPlaying () {
    }

}