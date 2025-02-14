    var game=undefined;
        var demo=false;
        var w_width=window.innerWidth;
        var w_height=window.innerHeight;
        var mid_h=w_width/2;
        var mid_v=w_height/2;
        var mid_mid_v=mid_v/2;
        var mid_mid_h=mid_h/2;
        var padding=20;
        var scale=1.4;


        var receiveMembers = [];
        var usersActive = [];
        var scoreBoardLap = [];
        var resultsGamers = [];
        var start=false;
        var stay=false;
        var stillMoving=false;

        var index=0;
        
        
        var gameover=false;//force gameover
        var gameover_onetime=false;





        var base_cols=10;
        var base_rows=3;

        let col_size=(w_width-(padding*base_cols))/base_cols;
        let cols=[];
        let base_sum=0;

        for (var i = 0; i < base_cols; i++) {
            base_sum+=padding+(col_size)
            cols.push(base_sum);
        }


        var modal=undefined;
        var teams=[];
        var index_teams=0;

      

        function shuffle(array) {
            let currentIndex = array.length;
  
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
  
              // Pick a remaining element...
              let randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
  
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }
