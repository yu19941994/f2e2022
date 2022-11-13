let a = () => {
    console.log('hihi');
}

a();

function preload() {
    console.log('load')
    this.load.image('pink_dialogue', require('../images/pink_dialogue.png').default);
}

preload();