let wheel; // Referencia a la ruleta
let isSpinning = false; // Control de giro
let spinSpeed = 0; // Velocidad de giro
const prizes = ['ciencia', 'musica', 'deportes', 'cine','matematicas','arte','geografia','general'];
const sectionAngle = 360 / prizes.length;
var resultIndex = undefined;
var imageCategory=undefined;
var btnAgain=undefined;
export class roulette_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'roulette_scene' });
    }

    init(...props){
        console.log(props);

    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        wheel=this.add.image(mid_h, mid_v, 'wheel').setOrigin(.5,.5).setScale(.8);
        this.add.image(mid_h, wheel.getBounds().top-40, 'needle').setOrigin(.5,0).setScale(.8);
        btnAgain= this.setButton({scene:this, x:mid_h,y:(w_height-(mid_mid_v/2)),text:"¡Otra vez!",scale_c:scale}).setInteractive().on("pointerdown", () => {
                        this.scene.start("roulette_scene");
                        //this.scene.start("waiting_scene");
                        //this.scene.start("quiz_scene");
                    });
        this.spinning();
    }


    spinning(){
        if (!isSpinning) {
            isSpinning = true;
            spinSpeed = Phaser.Math.Between(1000, 3000); // Velocidad inicial aleatoria
        }


    }

    update() {
        if (isSpinning) {
            // Rotar la ruleta
            wheel.angle += spinSpeed;
            var speeds=[.90,.91,.92,.93,.94,.95,.96,.97,.98,.99];
            // Reducir la velocidad gradualmente
            spinSpeed *= speeds[randomIntFromInterval(0,speeds.length-1)];
            resultIndex=Math.floor(((360 - wheel.angle % 360) % 360) / sectionAngle)
            // Detener el giro cuando la velocidad sea muy baja
            if (spinSpeed < 0.1) {
                isSpinning = false;
                spinSpeed = 0;
                console.log(prizes[resultIndex]);
                
                setTimeout(()=>{

                    //this.scene.start("quiz_scene",{theme: prizes[resultIndex] });
                },1500)
                
            }else{
            }
        }
    }

    setButton(data=null){
        var button=data.scene.add.image(data.x, data.y, 'btn_lg_green').setOrigin(.5,.5).setScale(data.scale_c);
        data.scene.add.text(button.x, button.y-10, data.text, { fontFamily: 'mikado', fontSize: 70 }).setOrigin(.5, .5)//.setStroke('#2F4649',10);
        return button;
    }



}