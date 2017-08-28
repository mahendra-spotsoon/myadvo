var counter1 = 1;
var counter2 = 1; //Defining counter

$(document).ready(function () {
    //Select Question type starts here
    $('.menu').click(function () {
        $('.dropdown').slideUp();
        $(this).next().slideToggle();
    });
    $('.dropdown li').click(function () {
        $('.dropdown').slideUp();
        var a = $(this).html();
        $(this).parent().siblings().find('.ques-choice').html(a);
    });
    // Select Question type ends here


    // For Input field border start here
    $('.bdr').click(function () {
        $(".bdr").removeClass('bdr2');
        $(this).toggleClass('bdr2');
    });
    // For Input field border ends here



    //Select option starts here
    $('#choice1').click(function () {
        $(this).parents().closest('.ques-inner').find('.ques-option').hide();
        $(this).parents().closest('.ques-inner').find('.paragraph').show();
    });
    $('#choice2').click(function () {
        $(this).parents().closest('.ques-inner').find('.ques-option').hide();
        $(this).parents().closest('.ques-inner').find('.mcq-mc').show();
    });
    $('#choice3').click(function () {
        $(this).parents().closest('.ques-inner').find('.ques-option').hide();
        $(this).parents().closest('.ques-inner').find('.mc-ma').show();
    });
    $('#choice4').click(function () {
        $(this).parent().parent().parent().parent().find('.ques-option').hide();
        $(this).parent().parent().parent().parent().find('.mcq-one').show();
    });
    //Select option ends here

    //Append new question starts here

    $('.add-ques').click(function () {
        var newquestion = document.createElement('div');
        newquestion.setAttribute('class', 'question d-float paragraph');
        newquestion.innerHTML = '<div class="wrapper-inner"><div class="ques-inner d-float"><div class="ques"><div class="bdr"><input type="text" name="question" placeholder="Question" class="form-control " /></div></div><div class="select-category"><div class="select"><div class="menu" onclick="menuclick(this);"> <span class="ques-choice"><i class="material-icons md-48">format_align_left</i>Paragraph</span><span><i class="material-icons md-48">arrow_drop_down</i></span></div><ul class="dropdown"><li id="choice1" onclick="choice1(this);"><i class="material-icons md-48">format_align_left</i>Paragraph</li><li id="choice2" onclick="choice2(this);"><i class="material-icons md-48">radio_button_checked</i>Multiple Choice</li><li id="choice3"  onclick="choice3(this);"><i class="material-icons md-48">crop_square</i>Checkboxes</li><li id="choice4"  onclick="choice4(this);"><i class="material-icons md-48">radio_button_unchecked</i>Yes/No</li></ul></div></div><div class="ques-option paragraph"><div class="option d-float radio-default"><div class="bdr vid"> <textarea class="form-control" rows="4" placeholder="Write yor text"></textarea></div></div> </div><div class="ques-option mcq-mc"><div class="option-all d-float"><div class="option d-float radio-default"><i class="material-icons md-48">radio_button_checked</i><div class="bdr vid"> <input type="text" name="question" placeholder="Option 1" class="form-control f-small" /></div> </div></div> <div class="option d-float"> <i class="material-icons md-48">radio_button_checked</i><div class="addnew-radio" onclick="newradiobutton(this);">Add Other</div> </div></div><div class="ques-option mc-ma"><div class=" d-float multiple-ch-n-ans"> <div class="option d-float radio-default"> <i class="material-icons md-48">crop_square</i> <div class="bdr vid"> <input type="text" name="question" placeholder="Option 1" class="form-control f-small" /></div></div> </div><div class="option d-float"> <i class="material-icons md-48">crop_square</i><div class="addnew-checkbox" onclick="newcheckboxbutton(this);">Add Other</div> </div> </div><div class="ques-option mcq-one"><div class="option d-float radio-default"><i class="material-icons md-48">radio_button_unchecked</i><div class="one-choice vid"><input type="text" name="question" placeholder="Yes" class="form-control f-small" readonly/></div></div><div class="option d-float radio-default"> <i class="material-icons md-48">radio_button_unchecked</i> <div class="one-choice vid"><input type="text" name="question" placeholder="No" class="form-control f-small" readonly/></div></div></div></div><div class="footer d-float"><i class="material-icons md-48 remove-ques" title="Delete">delete</i></div></div>';
        $('.form-bdr').append($(newquestion));

        //Remove question starts here
        $('.remove-ques').click(function () {
            $(this).parent().parent().remove();
        });

        $('.dropdown li').click(function () {
            $('.dropdown').slideUp();
            var a = $(this).html();
            $(this).parent().parent().find('.ques-choice').html(a);
        });

    });
    //Append new question ends here




    //Remove question starts here
    $('.remove-ques').click(function () {
        $(this).parent().parent().remove();
    });
    //Remove question starts here


    //Hide Create question
    $('.tab li:last-child').click(function () {
        $('.add-ques').hide();
    });
    $('.tab li:first-child').click(function () {
        $('.add-ques').show();
    });
});


function newradiobutton(radio) {

    counter1++;
    var radionew = document.createElement('div');
    radionew.setAttribute('class', 'option d-float');
    radionew.innerHTML = '<i class="material-icons md-48">radio_button_checked</i><div class="bdr vid"><input type="text" name="question" placeholder="Option" class="form-control f-small" /></div><i class="material-icons md-48 remove-radio">clear</i>';
    $(radio).parent().siblings().append($(radionew));

    $('.remove-radio').click(function () {
        $(this).parent().closest('.option').remove();
    });

    // For Input field border After creating new radio button
    $('.bdr').click(function () {
        $(".bdr").removeClass('bdr2');
        $(this).toggleClass('bdr2');
    });

}

//Create new Checkbox button starts here
function newcheckboxbutton(checkbox) {
    counter2++;
    var checkboxnew = document.createElement('div');
    checkboxnew.setAttribute('class', 'option d-float');
    checkboxnew.innerHTML = '<i class="material-icons md-48">crop_square</i><div class="bdr vid"><input type="text" name="question" placeholder="Option" class="form-control f-small" /></div><i class="material-icons md-48 remove-checkbox">clear</i>';
    $(checkbox).parent().siblings().append($(checkboxnew));

    $('.remove-checkbox').click(function () {
        $(this).parent().closest('.option').remove();
    });

    // For Input field border After creating new radio button
    $('.bdr').click(function () {
        $(".bdr").removeClass('bdr2');
        $(this).toggleClass('bdr2');
    });
}
//Create new Checkbox button ends here
function menuclick(a) {
    $('.dropdown').slideUp();
    $(a).next().slideDown();

}

function choice1(ch1) {
    $(ch1).parents().closest('.ques-inner').find('.ques-option').hide();
    $(ch1).parents().closest('.ques-inner').find('.paragraph').show();
}

function choice2(ch2) {
    $(ch2).parents().closest('.ques-inner').find('.ques-option').hide();
    $(ch2).parents().closest('.ques-inner').find('.mcq-mc').show();
}

function choice3(ch3) {
    $(ch3).parents().closest('.ques-inner').find('.ques-option').hide();
    $(ch3).parents().closest('.ques-inner').find('.mc-ma').show();
}

function choice4(ch4) {
    $(ch4).parents().closest('.ques-inner').find('.ques-option').hide();
    $(ch4).parents().closest('.ques-inner').find('.mcq-one').show();
}

// For Tabs ---------------------------------------------------
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();