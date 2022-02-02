const queryKey = "api_key=cZcFKoeWmVwmafy662eRF2U1zhVEnPlcyZJwaZo5";
var queryUrl = `https://api.nasa.gov/planetary/apod?${queryKey}`;

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
        $("#wrapper-video").css("display", "none")
        $("#wrapper-img").css("display", "flex")
        $("#wrapper-img").attr("src", imag)
    } 
        else {
        $(".csimg").css("diplay", "none")
        $("#wrapper-video").css("display", "flex")
        $("#wrapper-video").css("width", "600px")
        $("#wrapper-video").css("height", "520px")
        $("#wrapper-video").attr("src", imag)
    }

}
