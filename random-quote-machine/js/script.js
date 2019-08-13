var twitterFeed;

$("#btnTweet").click(function(){
    var quote = new String(twitterFeed.quoteText+" ~ " + twitterFeed.quoteAuthor)+" ~ ";
                window.open("https://twitter.com/intent/tweet?text="+quote);
    });



$(document).ready(function(){    
    getQuote();
    var hexNumber = getRandomHexnumber();
    document.body.style.backgroundColor = hexNumber;
    document.getElementById('divquote').style.color = hexNumber;
     

    $("#btnNextQuote").click(function(){
    	getQuote();        
        hexNumber = getRandomHexnumber();
        document.body.style.backgroundColor = hexNumber;
        document.getElementById("divquote").style.color = hexNumber;
    });
});

function getRandomHexnumber(){
    var hexNumber="#";
    for(var i = 0 ; i < 3 ; i++)
        hexNumber +=  Math.floor(Math.random()*256).toString(16);
    return hexNumber;
}


function getQuote(){
$.ajax({
         url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
        dataType:"jsonp",
        method:"get",
        cache:false,
        success:
            function(data){
              twitterFeed = data;                           
                $.each(data, function(key, value) {                  

                        if(key==="quoteText")                         
                           document.getElementById("demo").innerHTML = value;
                        if(key ==="quoteAuthor") {
                                if (value==="")                                     
                                   value="sorry, I am not sure who the author is...!"

                        document.getElementById("author").innerHTML = "<strong>who said this :</strong>"+value ;                      
                        }
                });     
            }
        });

}