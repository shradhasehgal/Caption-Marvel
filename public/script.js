$(document).ready(function() {
    var captions = [];
    var count = 0;
    displayImage = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#preview').attr('src', e.target.result).slideDown();
                $('#preview-caption').attr('src', e.target.result);
                $('#generate').show();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    generateCaption = function() {

        var form = $('#upload-image');
        var formData = new FormData($(form)[0]);

        $.ajax({
            url: '/generate-captions',
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                captions = data
            },
            cache: false,
            contentType: false,
            processData: false
        });

        if(captions.length >= 4)
        {
        
            for(var i=1; i <= 4; i++)
            {
                document.getElementById(i).innerHTML = captions[count];
                count += 1;
            }
        }

        else
        {

            for(var i=0; i < captions.length; i++)
            {
                document.getElementById(i+1).innerHTML = captions[count];
                count += 1;
            }

        }

        $('.step.one .step-content').slideUp();
        $('.step.two').removeClass('disabled');
        $('.step.two .step-content').slideDown();

        // send value of input type file to Imagga
        // get image upload ID
        // send upload ID to categorisation API
        // get categorisation and find captions
        // return captions to frontend

    }
    
    $("#image").change(function() {
        displayImage(this);
    });

    $('#upload-image').submit(function(e){
        e.preventDefault();
        generateCaption();
    });
    
    next = function()
    {
        for(var i=1; i <= 4; i++)
        {
            document.getElementById(i).innerHTML = captions[count];
            count += 1;
        }

        if(count > captions.length -1)
            count = 0;
    }
});

// var captions = [1,2,3,4,5,6,7,8];
// var i = 0;
// function show()
// {
//     document.getElementById("hide").style.display ="inline";
// }

// function next()
// {
//     document.getElementById("caption").innerHTML = 'Caption '+ captions[i];
//     i = i + 1;

//     if(i > captions.length -1)
//         i = 0;
// }