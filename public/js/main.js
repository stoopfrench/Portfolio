$(document).ready(function() {

    console.log('DOCUMENT LOADED')

    $('#chevronImage').on('click', function() {

        scrollToProjects()
    })

    $('#sendMessageButton').on('click', (event) => {
        event.preventDefault()
        
        if($('#contactName').val() != "" || $('#contactEmail').val() != "" || $('#contactMessage').val() != ""){
            let form = $('#contactForm')[0]
            let data = new FormData(form) 
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "/messages",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                success: function(data){
                    $('#successMessage').modal('show')
                    $('.modal-body').text(`Thank you, ${data.Name}. Your message has been submitted`)
                    console.log(data)
                },
                error: function(err){
                    console.log('error ', err)
                }
            })
        } 
        else {
            //Failure modal with explaination
            console.log('invalid')
        }
         
    })

    function scrolltoTop() {

        $('html, body').animate({
            scrollTop: 0,
        }, 500)
    }

    function scrollToProjects() {

        var projectsTop = $('#projectsPage').offset().top;
        $('html, body').animate({
            scrollTop: projectsTop,
        }, 500);
    }
})

