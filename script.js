
$(document).ready(function(){

    $('#buttonGo').on('click',function(){
        var card = $('#cardName').val();
        $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + card,
            headers: {'X-Mashape-Key': 'O3d5SeCTXgmshemEVwIFaFmARcE5p1Z1EE0jsn183RnGRBSFeA'},
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(result) {
                process(result);
                console.log(card)
            },
            error: function() { alert('The card you searched in not a Hearthstone card!'); }
        });
    });

});

//function
function process(result){
    console.log(result)
    $("#TABEL").empty();
    for(var i=0;i<result.length;i++){
        $("#TABEL").append("<tr><td><div id='cardName" + i + "'></div></td><td><img id='cardPicture" + i + "' src=''"+"</img></td><td><img id='cardPictureGold" + i + "' src=''"+"</img></td><td><div id='cardMech" + i + "'></div></td></tr>")
        if(result[i].type == "Minion" || result[i].type == "Spell" || result[i].type == "Weapon"){
            $("#cardName" + i).text(result[i].name).addClass("recolor")
            $("#cardPicture" + i).attr('src',result[i].img).addClass("resize")
            $("#cardPictureGold" + i).attr('src',result[i].imgGold).addClass("resize")
            $("#cardMech" + i).text(result[i].flavor).addClass("recolor")
        }
        console.log(result[i].img)
    }
}


function firstFunction(){
    var r = confirm("Have you played Hearthstone before? Press OK if so. Press cancel in you haven't- you pleb.");
    if (r == true) {
        return;
    } else {
        window.location = "https://playhearthstone.com/en-us/";
    }
}
