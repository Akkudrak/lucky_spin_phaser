export class mainScene extends Phaser.Scene{
    constructor () {
        super({ key: 'mainScene' });
    }

    preload (){
        //main scene loads
        this.load.image('bg_main', 'images/gui/bg_main.png');
        this.load.image('btn_config', 'images/gui/btn_config.png');
        
        this.load.image('logo_game', 'images/gui/logo_game.png');
        this.load.image('mono_1', 'images/gui/mono_1.png');

        //waiting players loads
        this.load.image('title_registro', 'images/gui/title_registro.png');
        this.load.image('bg_elipse', '/images/gui/bg_elipse.png');
        this.load.image('pet_1', 'images/gui/pet1.png');
        this.load.image('pet_1_lg', 'images/gui/pet_1_lg.png');
        this.load.image('pet_2', 'images/gui/pet2.png');
        this.load.image('pet_3', 'images/gui/pet3.png');

        //sort teams
        this.load.image('title_equipos', 'images/gui/equipos.png');

        //presentacion
        this.load.image('title_presentacion', 'images/gui/presentacion.png');

        //selectParticipants
        this.load.image('playerSel_desk', 'images/gui/playerSel_desk.png');
        this.load.image('icon_no', 'images/gui/icon_no.png');
        this.load.image('icon_ok', 'images/gui/icon_ok.png');
        this.load.image('icon_wait', 'images/gui/icon_wait.png');

        //roulette
        this.load.image('wheel', 'images/gui/wheel.png');
        this.load.image('needle', 'images/gui/needle.png');
        this.load.image('ciencia', 'images/gui/ciencia.png');
        this.load.image('geografia', 'images/gui/geografia.png');
        this.load.image('matematicas', 'images/gui/matematicas.png');
        this.load.image('general', 'images/gui/general.png');
        this.load.image('cine', 'images/gui/cine.png');
        this.load.image('musica', 'images/gui/musica.png');
        this.load.image('arte', 'images/gui/arte.png');
        this.load.image('deportes', 'images/gui/deportes.png');
        this.load.image('seleccionando', 'images/gui/seleccionando.png');

        //generic
        this.load.image('btn_sm_green', 'images/gui/btn_sm_green.png');
        this.load.image('btn_sm_red', 'images/gui/btn_sm_red.png');
        this.load.image('bg_modal', 'images/gui/bg_modal.png');
        this.load.image('btn_lg_green', 'images/gui/btn_lg_green.png');
        this.load.image('btn_lg_white', 'images/gui/btn_lg_white.png');

        this.load.image('place', 'images/gui/place.png');
        this.load.image('resultados', 'images/gui/resultados.png');
        this.load.image('esperando', 'images/gui/esperando.png');
        this.load.image('seleccion_tema', 'images/gui/seleccion_tema.png');
        this.load.image('l_arte', 'images/gui/l_arte.png');
        this.load.image('l_ciencia', 'images/gui/l_ciencia.png');
        this.load.image('l_matematicas', 'images/gui/l_matematicas.png');
        this.load.image('l_cine', 'images/gui/l_cine.png');
        this.load.image('l_deportes', 'images/gui/l_deportes.png');
        this.load.image('l_general', 'images/gui/l_general.png');
        this.load.image('l_geografia', 'images/gui/l_geografia.png');
        this.load.image('l_musica', 'images/gui/l_musica.png');

        this.load.atlas("mapache", "images/gui/sprites/mapache_talk.png","images/gui/sprites/mapache_talk.json");





    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(w_width-padding, padding, 'btn_config').setOrigin(1,0);


        this.add.image(mid_h, mid_v+(mid_mid_v/2), 'mono_1').setOrigin(.5,.5).setScale(scale);
        this.setButton({scene:this, x:mid_h,y:(w_height-(mid_mid_v/2)),text:"Comenzar",scale_c:scale}).setInteractive().on("pointerdown", () => {
            this.scene.start("roulette_scene");
            //this.scene.start("waiting_scene");
            //this.scene.start("quiz_scene");
        });

        



    }

    setButton(data=null){
        var button=data.scene.add.image(data.x, data.y, 'btn_lg_green').setOrigin(.5,.5).setScale(data.scale_c);
        data.scene.add.text(button.x, button.y-10, data.text, { fontFamily: 'mikado', fontSize: 70 }).setOrigin(.5, .5)//.setStroke('#2F4649',10);
        return button;
    }


    
}