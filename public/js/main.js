$(document).ready(function() {

    console.log('DOCUMENT LOADED')

    $('#chevronImage').on('click', function() {

        scrollToProjects()
    })

    $('#sendMessageButton').on('click', (event) => {
        event.preventDefault()
        
        if($('#contactName').val().trim() != '' && $('#contactEmail').val().trim() != '' && $('#contactMessage').val().trim() != '') {
            let form = $('#contactForm')[0]
            let data = new FormData(form) 
            $.ajax({
                type: "POST",
                enctype: "multipart/form-data",
                url: "/messages",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                success: function(data){
                    $('#successMessage').modal('show')
                    $('#successMessageBody').text(`Thank you, ${data.Name}. Your message has been submitted`)
                },
                error: function(err){
                    console.log('error ', err)
                }
            })
        } 
        else {
            $('#failMessage').modal('show')
        }  
    })

    function scrolltoTop() {

        $('html, body').animate({
            scrollTop: 0,
        }, 500)
    }

    function scrollToProjects() {

        var projectsTop = $('#projectsPage').offset().top
        $('html, body').animate({
            scrollTop: projectsTop,
        }, 500);
    }
});

function clearForm(){
    $('#contactForm')[0].reset()      
}
