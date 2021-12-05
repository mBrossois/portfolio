export const characterPos: {x: number, y: number} = {x: 0, y: 0};

export function moveRight(character: HTMLDivElement) {
    characterPos.x += 60;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}
export function moveLeft(character: HTMLDivElement) {
    characterPos.x -= 60;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}

export function moveUp(character: HTMLDivElement) {
    characterPos.y -= 30;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}
export function moveDown(character: HTMLDivElement) {
    characterPos.y += 30;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}
