$(document).ready(function () {
    


$('.butt').click(function(){
    $('.spiner').show();
   
    
    $.ajax({
        // type: "method",
        url: "https://jsonplaceholder.typicode.com/albums",
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            response.forEach(element => {
                let card = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${element.userId}</h5>
                  <p class="card-text">${element.id}</p>
                  <a href="#" class="btn btn-info">${element.title}</a>
                </div>
              </div>`;

              $('.cont').append(card);
              
              
            });
            $('.spiner').hide();
            
        }
    })
})


});


////////////////////////////////////////////////////
///////////////////////////////////////////////////
$.ajax({
    // type: "method",
    url: "/ajax.json",
    // data: "data",
    // dataType: "dataType",
    success: function (response) {
        response.forEach(element =>{
           $('.butt2').click(function () { 
            let cars = `<p>${element.id} ${element.Mark} ${element.Color} </p>`;
             
            $('.car').append(cars);
            $('.butt2').hide();
            
            })
        })
        
    }
});