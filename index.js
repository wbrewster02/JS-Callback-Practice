
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)


let direction = null;
let x = 100
let y = 250;

function handleDirectionChange(direction){

    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }

    if(direction === 'west'){
        x = x - 1
        character.src = 'assets/green-character/west.gif'

    }
    if(direction === 'north'){
        y = y + 1
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        x = x + 1
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        y = y - 1
        character.src = 'assets/green-character/south.gif'
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

document.addEventListener('keydown', function(e){
    if(e.repeat)return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
        console.log('left pressed')
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
        console.log('up pressed')
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
        console.log('right pressed')
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
        console.log('down pressed')
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})



move(character).WithArrowKeys(100, 250, handleDirectionChange)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
move(newItem('assets/staff.png')).to(600, 250)