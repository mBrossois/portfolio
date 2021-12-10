export const characterPos: {x: number, y: number} = {x: 0, y: 0};
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const xIncrease = 60;
const yIncrease = 30;
let reachedTop = false;
let reachedBottom = false;
export let animationInAction = false;

export function moveRight(character: HTMLDivElement) {
    characterPos.x += screenWidth - xIncrease > character.getBoundingClientRect().x + character.getBoundingClientRect().width ? xIncrease : 0;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}
export function moveLeft(character: HTMLDivElement) {
    characterPos.x -= character.getBoundingClientRect().x > xIncrease ? xIncrease : 0;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}

export function moveUp(character: HTMLDivElement) {
    characterPos.y -= reachedTop ? 0 : yIncrease;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}
export function moveDown(character: HTMLDivElement) {
    characterPos.y += reachedBottom ? 0 : yIncrease;
    character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
}

export function isTopReached(character: HTMLDivElement) {
    reachedTop = !(character.getBoundingClientRect().y > 0);
    return reachedTop;
}

export function isBottomReached(character: HTMLDivElement) {
    reachedBottom = !(screenHeight - yIncrease > character.getBoundingClientRect().y + character.getBoundingClientRect().height);
    return reachedTop;
}

export function moveToNextLevel(character: HTMLDivElement) {
    animationInAction = true;
    let timesMoved = 0;
    const moveInterval = setInterval(() => {
        characterPos.y -= yIncrease;
        character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
        timesMoved++;
        if(timesMoved === 8) {
            clearInterval(moveInterval);
            characterPos.y = 0;
            characterPos.x = 0;
            character.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`;
            animationInAction = false;
        }
    }, 200)

}
