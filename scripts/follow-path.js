/**
 * https://codepen.io/francoisromain/pen/YxyEQL
 * look at that, see how they manage string manipulations
 */
svgLine = () => {
    const path = document.querySelectorAll('#svgLine path');
    const lineLength = Math.floor(path[0].getTotalLength());
    const points = [
        {x: 50, y: 0},
        {x: 100, y: 0},
        {x: 150, y: 0},
        {x: 200, y: 0},
        {x: 250, y: 0},
        {x: 300, y: 0},
        {x: 350, y: 0},
        {x: 400, y: 0},
        {x: 450, y: 0}
    ];
}
svgLine()
// https://codepen.io/jodoron/pen/oNbMWRz