$(function() {
    let currentPiece = null;
    let rotationDegree = 0; // Tracks rotation.

    // Setting up drag functionality for puzzle pieces.
    $(".draggablePiece").draggable({
        start: function() {
            currentPiece = $(this);
        }
    }).on("click", function() {
        currentPiece = $(this);
    });

    // Function to rotate the selected piece.
    const rotatePiece = () => {
        if (currentPiece) {
            rotationDegree += 45;
            currentPiece.css('transform', `rotate(${rotationDegree}deg)`);
        }
    };

    // Binding rotation function to rotate button click.
    $("#rotate").on("click", rotatePiece);

    // Function to move the selected piece in a specified direction.
    const movePiece = (direction) => {
        if (currentPiece) {
            let pos = currentPiece.position();
            switch (direction) {
                case "up":    currentPiece.css('top', `${pos.top - 1}px`); break;
                case "right": currentPiece.css('left', `${pos.left + 1}px`); break;
                case "down":  currentPiece.css('top', `${pos.top + 1}px`); break;
                case "left":  currentPiece.css('left', `${pos.left - 1}px`); break;
            }
        }
    };

    // Binding move functions to respective buttons.
    $("#moveUp").on("click", () => movePiece("up"));
    $("#moveRight").on("click", () => movePiece("right"));
    $("#moveDown").on("click", () => movePiece("down"));
    $("#moveLeft").on("click", () => movePiece("left"));
});
