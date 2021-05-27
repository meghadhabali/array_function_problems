var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    data=JSON.parse(this.response)
       var res=data.forEach(element => {
        console.log('Country name:'+element.name + ' --> Capital:'+element.capital + ' --> Flag:'+element.flag);    
    });
}

