const queryKey = "api_key=cZcFKoeWmVwmafy662eRF2U1zhVEnPlcyZJwaZo5";
var queryUrl = `https://api.nasa.gov/planetary/apod?${queryKey}`;

console.log(queryUrl);

$("#btn").on("click", requestApi)

function requestApi () {
    const data = $('#selectDate').val()
    $.ajax({url: queryUrl+"&date="+data,
    success: function (result) {
         return sendApi(result)
        }
    })
}


function sendApi (obj) {
    let imag = obj.url
    let type = JSON.stringify(obj.media_type) 

    $("#titulo").html(obj.title)
    $("#copy").html(obj.copyright)

     if (type === '"image"') {
        $("#video").css("display", "none")
        $("#content").css("display", "block")
        $("#wrapper-img").attr("src", imag)
    } 
        else {
        $("#content").css("display", "none")
        $("#wrapper-video").attr("src", imag)
        $("#video").css("display", "block")
        $("#wrapper-video").css("width", "600px")
        $("#wrapper-video").css("height", "520px")
    } 
}
