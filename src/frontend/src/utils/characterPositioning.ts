export const characterPos: {x: number, y: number} = {x: 0, y: 0};

export function moveToRight(character: HTMLDivElement) {
    characterPos.x += 12;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}