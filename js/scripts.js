$(document).ready(function() {
    var contactList = [];

    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address address">' +
                                   '<div class="form-group">' +
                                       '<label for="new-street">Street</label>' +
                                       '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                       '<label for="new-city">City</label>' +
                                       '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                       '<label for="new-state">State</label>' +
                                       '<input type="text" class="form-control new-state">' +
                                   '</div>' +
                                 '</div>');
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();


            // var inputtedPicture = $("input#fileupload").val();
            var inputtedPicture = document.getElementById('fileUpload').files[0];
            var inputtedFirstName = $("input#new-first-name").val();
            var inputtedLastName = $("input#new-last-name").val();
            var inputtedPhone = $("input#new-number").val();
            var inputtedEmail = $("input#new-email").val();


        var newContact = {
            picture: inputtedPicture,
            firstName: inputtedFirstName,
            lastName: inputtedLastName,
            phoneNumber: inputtedPhone ,
            email: inputtedEmail,
            addresses:  []  };

        $(".address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
            newContact.addresses.push(newAddress);
        });

        contactList.push(newContact);
        $("ul#contacts").empty();
        $.each(contactList, function (index, value) {
            var indexName = "index"+index;
            $("ul#contacts").append("<li id='"+indexName+"'><span class='contact'>" + value.firstName + "</span></li>");
            $(".contact").last().click(function() {
                $("#show-contact").show();
                $("#show-contact h2").text(value.firstName);

                //$(".picture-use").file(newContact.picture);
                $(".first-name").text(value.firstName);
                $(".last-name").text(value.lastName);
                $(".phone-number").text(value.phoneNumber);
                $(".email-use").text(value.email);
                $("#contact-id").val(index);


                $("ul#addresses").text("");
                if(value.addresses.length > 0) {
                    value.addresses.forEach(function (address) {
                        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
                    });
                }

            });
        });
        /*$("ul#contacts").append("<li><span class='contact'>" +
                                newContact.firstName + 
                                "</span></li>");*/


        $("input#fileUpload").val("");
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-number").val("");
        $("input#new-email").val("");

        $("input.new-street").val("");
        $("input.new-city").val("");
        $("input.new-state").val("");

        $(".new-address").remove();

        $("#delete").click(function (index) {
            var contactId = $("#contact-id").val();
            var indexName = "index"+contactId;
            console.log(contactId);
            if(contactList.length > 0){
                contactList.splice(contactId, 1);
                var contactInList = $("#"+indexName+"");
                $("#show-contact").hide();
                contactInList.empty();
            }
        });


       /* $(".contact").last().click(function() {
            $("#show-contact").show();
            console.log(newContact);
            $("#show-contact h2").text(newContact.firstName);

            //$(".picture-use").file(newContact.picture);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".phone-number").text(newContact.phoneNumber);
            $(".email-use").text(newContact.email);


        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
            });

            var imgCanvas = document.getElementById('can');
            var ctx = imgCanvas.getContext("2d");
           // var fileInput = document.getElementById('fileUpload')
            ctx.drawImage(newContact.picture,10,10);

        });*/



    });




    /**  function upload() {
        var imgCanvas = document.getElementById('can');
        var ctx = imgCanvas.getContext("2d");
        var fileInput = document.getElementById('fileUpload')
        ctx.drawImage(fileInput,10,10);
       
       var fileInput = document.getElementById('fileUpload');
        var image = new SimpleImage("fileInput");
        image.drawTo(imgCanvas);

       window.onload = function(){
       
        var ctx = c.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img, 10, 10); 
        
        )

    }
    **/
    
    
});
