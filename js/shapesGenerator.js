$(document).ready(function() {

    // onclick O K button to generate shapes
    $('#generateShapes').click(function() {

        // get number of shape user wants
        var numberOfShapes = $('input.numberOfShapes').val();

        if(numberOfShapes === "" || numberOfShapes > 50 || numberOfShapes < 0) return;

        // empty up previous shapes
        $('#shapes').text('');

        for(var i = 0; i < numberOfShapes; i++) {

            // random shape from 5 shapes
            let shape = randomShape();

            let code = `
                <div class="box" data-id="${i}">
                    <div class="shape ${shape}"></div>
                    <button class="box-btn box-change-color" data-id="${i}">Change Color</button>
                    <button class="box-btn box-change-shape" data-id="${i}">Change Shape</button>
                </div>
            `;

            document.querySelector('#shapes').innerHTML += code;

        }

    });


});