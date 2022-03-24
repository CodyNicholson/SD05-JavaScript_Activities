// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc1 = newNonPlayableCharacter(10, 300)
const npc2 = newNonPlayableCharacter(110, 300)
const npc3 = newNonPlayableCharacter(210, 300)
const npc4 = newNonPlayableCharacter(310, 300)
const npc5 = newNonPlayableCharacter(410, 300)

// have the NPC start walking east immediately

async function moveNPC(npc){
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest(2700)
    await npc.walkNorth(400)
}

async function infiniteLoopWalk(npc) {
    await npc.walkEast(500);
    await npc.walkNorth(500);
    await npc.walkWest(500);
    await npc.walkSouth(500);
    infiniteLoopWalk(npc);
}

infiniteLoopWalk(npc1);

// moveNPC(npc1);
// moveNPC(npc2);
// moveNPC(npc3);
// moveNPC(npc4);
// moveNPC(npc5);

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)