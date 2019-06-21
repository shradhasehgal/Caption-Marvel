$(document).ready(function() {
    displayImage = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#preview').attr('src', e.target.result).slideDown();
                $('#generate').show();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    generateCaption = function() {

        $('.step.one .step-content').slideUp();
        $('.step.two').removeClass('disabled');
        $('.step.two .step-content').slideDown();
        
        // send value of input type file to Imagga
        // get image upload ID
        // send upload ID to categorisation API
        // get categorisation and find captions
        // return captions to frontend

        var imageLink = 'https://cdn.lynda.com/course/438407/438407-635907149496560185-16x9.jpg'; // replace with link of uploaded image
        $('#preview-caption').attr('src', imageLink);

    }
    
    $("#uploader").change(function() {
        displayImage(this);
    });

    $('#generate').click(function(){
        generateCaption();
    });
    
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