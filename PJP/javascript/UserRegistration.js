
$(document).ready(function () {
    // Cloning Qualification Section


    $('#btnAddqual').click(function () {
        var num = $('.clonedqual').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedqual' + num).clone().attr('id', 'clonedqual' + newNum);

        newSection.children(':first').children(':first').attr('id', 'institutename' + newNum).attr('name', 'institutename' + newNum);
        newSection.children(':nth-child(2)').children(':first').attr('id', 'startedstudyingyear' + newNum).attr('name', 'startedstudyingyear' + newNum);
        newSection.children(':nth-child(3)').children(':first').attr('id', 'endingstudyingyear' + newNum).attr('name', 'endingstudyingyear' + newNum);
        newSection.children(':nth-child(4)').children(':first').attr('id', 'degree' + newNum).attr('name', 'degree' + newNum);
        newSection.children(':nth-child(5)').children(':first').attr('id', 'stream' + newNum).attr('name', 'stream' + newNum);
        newSection.children(':nth-child(6)').children(':first').attr('id', 'percentage' + newNum).attr('name', 'percentage' + newNum);


        $('.clonedqual').last().append(newSection)

        $('#btnDelqual').prop('disabled', false);

        document.getElementById('startedstudyingyear' + newNum).onchange = function () {
            var input = document.getElementById('endingstudyingyear' + newNum);
            input.setAttribute("min", this.value);
        };

        document.getElementById('endingstudyingyear' + newNum).onchange = function () {
            var input = document.getElementById('startedstudyingyear' + newNum);
            input.setAttribute("max", this.value);
        };

        if (newNum == 3)
            $('#btnAddqual').prop('disabled', true);
    });

    $('#btnDelqual').click(function () {

        var num = $('.clonedqual').length; // how many "duplicatable" input fields we currently have
        $('#clonedqual' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddqual').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelqual').prop('disabled', true);
    });

    $('#btnDelqual').prop('disabled', true);
});

// Date Validation for Qualification

$(document).ready(function () {

    endingstudyingyear1.max = new Date().toISOString().split("T")[0];
    document.getElementById("startedstudyingyear1").onchange = function () {
        var input = document.getElementById("endingstudyingyear1");
        input.setAttribute("min", this.value);
    };
});

$(document).ready(function () {

    startedstudyingyear1.min = "1960-01-01";
    document.getElementById("endingstudyingyear1").onchange = function () {
        var input = document.getElementById("startedstudyingyear1");
        input.setAttribute("max", this.value);
    };
});


$(document).ready(function () {
    // Cloning Skill Section

    $('#btnAddskill').click(function () {

        var num = $('.clonedskill').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedskill' + num).clone().attr('id', 'clonedskill' + newNum);

        newSection.children(':first').children(':first').attr('id', 'skill' + newNum).attr('name', 'skill' + newNum);

        $('.clonedskill').last().append(newSection)

        $('#btnDelskill').prop('disabled', false);

        if (newNum == 5)
            $('#btnAddskill').prop('disabled', true);
    });

    $('#btnDelskill').click(function () {

        var num = $('.clonedskill').length; // how many "duplicatable" input fields we currently have
        $('#clonedskill' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddskill').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelskill').prop('disabled', true);
    });

    $('#btnDelskill').prop('disabled', true);
});

$(document).ready(function () {
    // Cloning Work Section

    $('#btnAddwork').click(function () {

        var num = $('.clonedwork').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedwork' + num).clone().attr('id', 'clonedwork' + newNum);

        newSection.children(':first').children(':first').attr('id', 'role' + newNum).attr('name', 'role' + newNum);
        newSection.children(':nth-child(2)').children(':first').attr('id', 'organization' + newNum).attr('name', 'organization' + newNum);
        newSection.children(':nth-child(3)').children(':first').attr('id', 'workedlocation' + newNum).attr('name', 'workedlocation' + newNum);
        newSection.children(':nth-child(4)').children(':first').attr('id', 'startedworkingyear' + newNum).attr('name', 'startedworkingyear' + newNum);
        newSection.children(':nth-child(5)').children(':first').attr('id', 'endingworkingyear' + newNum).attr('name', 'endingworkingyear' + newNum);
        newSection.children(':nth-child(6)').children(':first').attr('id', 'shortdescriptionofworkdone' + newNum).attr('name', 'shortdescriptionofworkdone' + newNum);


        $('.clonedwork').last().append(newSection)

        $('#btnDelwork').prop('disabled', false);

        document.getElementById('startedworkingyear' + newNum).onchange = function () {
            var input = document.getElementById('endingworkingyear' + newNum);
            input.setAttribute("min", this.value);
        };

        document.getElementById('endingworkingyear' + newNum).onchange = function () {
            var input = document.getElementById('startedworkingyear' + newNum);
            input.setAttribute("max", this.value);
        };

        if (newNum == 3)
            $('#btnAddwork').prop('disabled', true);
    });

    $('#btnDelwork').click(function () {
        var num = $('.clonedwork').length; // how many "duplicatable" input fields we currently have
        $('#clonedwork' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddwork').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelwork').prop('disabled', true);
    });

    $('#btnDelwork').prop('disabled', true);
});

// Date Validation for Work


$(document).ready(function () {
    endingworkingyear1.max = new Date().toISOString().split("T")[0];
    document.getElementById("startedworkingyear1").onchange = function () {
        var input = document.getElementById("endingworkingyear1");
        input.setAttribute("min", this.value);
    };
});

$(document).ready(function () {
    startedworkingyear1.min = "1960-01-01";
    document.getElementById("endingworkingyear1").onchange = function () {
        var input = document.getElementById("startedworkingyear1");
        input.setAttribute("max", this.value);
    };
});

$(document).ready(function () {
    // Cloning Project Section


    $('#btnAddproject').click(function () {
        var num = $('.clonedproject').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedproject' + num).clone().attr('id', 'clonedproject' + newNum);

        newSection.children(':first').children(':first').attr('id', 'projecttitle' + newNum).attr('name', 'projecttitle' + newNum);
        newSection.children(':nth-child(2)').children(':first').attr('id', 'startedprojectyear' + newNum).attr('name', 'startedprojectyear' + newNum);
        newSection.children(':nth-child(3)').children(':first').attr('id', 'endingprojectyear' + newNum).attr('name', 'endingprojectyear' + newNum);
        newSection.children(':nth-child(4)').children(':first').attr('id', 'shortdescriptionofprojectdone' + newNum).attr('name', 'shortdescriptionofprojectdone' + newNum);


        $('.clonedproject').last().append(newSection)

        $('#btnDelproject').prop('disabled', false);

        document.getElementById('startedprojectyear' + newNum).onchange = function () {
            var input = document.getElementById('endingprojectyear' + newNum);
            input.setAttribute("min", this.value);
        };

        document.getElementById('endingprojectyear' + newNum).onchange = function () {
            var input = document.getElementById('startedprojectyear' + newNum);
            input.setAttribute("max", this.value);
        };

        if (newNum == 5)
            $('#btnAddproject').prop('disabled', true);
    });

    $('#btnDelproject').click(function () {
        var num = $('.clonedproject').length; // how many "duplicatable" input fields we currently have
        $('#clonedproject' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddproject').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelproject').prop('disabled', true);
    });

    $('#btnDelproject').prop('disabled', true);
});

// Date Validation for Project


$(document).ready(function () {
    endingprojectyear1.max = new Date().toISOString().split("T")[0];
    document.getElementById("startedprojectyear1").onchange = function () {
        var input = document.getElementById("endingprojectyear1");
        input.setAttribute("min", this.value);
    };
});

$(document).ready(function () {
    startedprojectyear1.min = "1960-01-01";
    document.getElementById("endingprojectyear1").onchange = function () {
        var input = document.getElementById("startedprojectyear1");
        input.setAttribute("max", this.value);
    };
});

$(document).ready(function () {
    // Cloning Certificate Section

    $('#btnAddcertificate').click(function () {
        var num = $('.clonedcertificate').length;
        var newNum = new Number(num + 1);

        var newSection = $('#clonedcertificate' + num).clone().attr('id', 'clonedcertificate' + newNum);

        newSection.children(':first').children(':first').attr('id', 'coursename' + newNum).attr('name', 'coursename' + newNum);
        newSection.children(':nth-child(2)').children(':first').attr('id', 'courseorganization' + newNum).attr('name', 'courseorganization' + newNum);
        newSection.children(':nth-child(3)').children(':first').attr('id', 'certificateissuedate' + newNum).attr('name', 'certificateissuedate' + newNum);


        $('.clonedcertificate').last().append(newSection)

        $('#btnDelcertificate').prop('disabled', false);

        if (newNum == 5)
            $('#btnAddcertificate').prop('disabled', true);
    });

    $('#btnDelcertificate').click(function () {
        var num = $('.clonedcertificate').length; // how many "duplicatable" input fields we currently have
        $('#clonedcertificate' + num).remove();     // remove the last element

        // enable the "add" button
        $('#btnAddcertificate').prop('disabled', false);

        // if only one element remains, disable the "remove" button
        if (num - 1 == 1)
            $('#btnDelcertificate').prop('disabled', true);
    });

    $('#btnDelcertificate').prop('disabled', true);


});

// Date Validation for Certificates

$(document).ready(function () {
    certificateissuedate1.min = "1960-01-01";
    certificateissuedate1.max = new Date().toISOString().split("T")[0];
});



// Date Validation for DOB

$(document).ready(function () {
    dob.min = "1960-01-01";
    dob.max = new Date().toISOString().split("T")[0];
});

//Password Validation
document.addEventListener("DOMContentLoaded", function () {
    if (!RegExp.escape) {
        RegExp.escape = function (s) {
            return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
        };
    }


    var checkPassword = function (str) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return re.test(str);
    };

    var supports_input_validity = function () {
        var i = document.createElement("input");
        return "setCustomValidity" in i;
    }
    if (supports_input_validity()) {


        var pwd1Input = document.getElementById("myPwd1");
        pwd1Input.setCustomValidity(pwd1Input.title);

        var pwd2Input = document.getElementById("myPwd2");

        pwd1Input.addEventListener("keyup", function (e) {
            this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
            if (this.checkValidity()) {
                pwd2Input.pattern = RegExp.escape(this.value);
                pwd2Input.setCustomValidity(pwd2Input.title);
            } else {
                pwd2Input.pattern = this.pattern;
                pwd2Input.setCustomValidity("");
            }
        }, false);

        pwd2Input.addEventListener("keyup", function (e) {
            this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "");
        }, false);

    }

}, false);












