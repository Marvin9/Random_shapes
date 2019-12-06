var colors = ['#020122', '#422040', '#1A3A3A', '#4F517D', '#041B15', '#136F63', '#000022', '#FBF5F3', '#813405',
    '#813405', '#020202', '#04471C', '#6C4B5E', '#4357AD'];

$(document).ready(function () {
    
    // onclick on button inside box (shape modifier)
    $(document).on('click', '#feature #shapes button', function () {

        // unique id to determine clicked div 
        var uniqueId = $(this).attr('data-id');

        // get unique div .box(which contain shape) using uniqueId
        var uniqueDivThatContainClickedShape = $(`div.box[data-id="${uniqueId}"]`);

        // particular shape element which user clicked
        var shapeElementUserWantToModify = uniqueDivThatContainClickedShape.find($('.shape'));

        // current shape
        var currentShape = shapeElementUserWantToModify.attr('class').split(/\s+/).pop();

        var isButtonClickedForShapeChange = $(this).hasClass('box-change-shape');

        if (isButtonClickedForShapeChange) {

            // generate random shape from global shapes
            do {
                shape = randomShape();
            } while (shape === currentShape);

            // new shape
            shapeElementUserWantToModify.attr('class', `shape ${shape}`);

        } else {
            // generate random color
            var color = colors[Math.floor(Math.random() * colors.length)]

            if (currentShape === "triangle") {
                shapeElementUserWantToModify.css({
                    'border-bottom-color': color,
                    'border-left-color': 'transparent',
                    'border-right-color': 'transparent'
                });
            } else {
                shapeElementUserWantToModify.css('border', `5px solid ${color}`);
            }
        }

    });
});