function newQuote () {
    //the url we are making a request to
    var url = "https://api.chucknorris.io/jokes/random?category=dev";

    $.ajax({
        url: url,
        method: 'get',
        success: function (data) {
            //do something when call is successful
            console.log(data);
            $('#quote').text(data.value);
            $('#url').attr('href', data.url);
            // $('#icon').attr('src', data.icon_url);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

// $(document).ready(function() {
//     newQuote();
//     $('button').on('click', newQuote());
// });