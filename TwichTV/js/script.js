var userList = [{'user':'freecodecamp', 'status':1},{'user':'ESL_SC2','status':1  },{'user':'OgamingSC2', 'status':1 }];
		   
	var twichAPI ='';
	

	function getStatus(){	
		var selectStatus = document.getElementsByName('status');
		
		for(var i = 0; i < selectStatus.length; i++){
		
			if( selectStatus[i].checked ){
				
				
				for( var r = 0; r < userList.length;r++ )
					if( parseInt(selectStatus[i].value) === 2 ){
						for( var r = 0; r < userList.length;r++ ){
							document.getElementsByTagName('TR')[r].style.display = '';
						}
					}else{
						if (!( parseInt(selectStatus[i].value) == userList[r].status)) {
								document.getElementsByTagName('TR')[r].style.display = 'none';
								
						}else{
					
								document.getElementsByTagName('TR')[r].style.display = '';
						}
					}
			}	
				
		}	
	}
	
	
	function getNoLiveStreams(user,index){
		
		twichAPI = 'https://api.twitch.tv/kraken/channels/'+ user + '?client_id=zphxt8ifu539vcciwq3ovc78r70pe5';
		getJsonData(twichAPI,index);
	}
	
	function getChannelData(user,index){
		
		twichAPI = 'https://api.twitch.tv/kraken/streams/'+ user + '?client_id=zphxt8ifu539vcciwq3ovc78r70pe5';
		getJsonData(twichAPI,index);
	}
	
	function getJsonData(twichAPI,index){
		$.getJSON(twichAPI, { 
			format:"json"
			}, 
		function(channelData){
					console.log("The Stream is: "+channelData["stream"]);
					
			if (channelData["stream"] != null) { 
						
        					
			document.getElementsByClassName('channel-logo')[index].src = channelData['stream']['channel']['logo'];
			document.getElementsByClassName('channel-name')[index].innerHTML = channelData['stream']['channel']['display_name'];
			document.getElementsByClassName('channel-name')[index].href = channelData['stream']['channel']['url'];
			document.getElementsByClassName('channel-status')[index].innerHTML = channelData['stream']['channel']['status'];
			
	       	 } else {
	       	getNoLiveStreams(userList[index].user,index);
	       	document.getElementsByClassName('channel-logo')[index].src = channelData['logo'];
			document.getElementsByClassName('channel-name')[index].innerHTML = channelData['display_name'];
			document.getElementsByClassName('channel-name')[index].href = channelData['url'];
			document.getElementsByClassName('channel-status')[index].innerHTML = 'offline';
			userList[index].status = 0;
						
			}
					
		
		});
		
	 
	}
	
	
	
	for(var i = 0; i < userList.length ; i++ ){
		getChannelData(userList[i].user, i);
		}