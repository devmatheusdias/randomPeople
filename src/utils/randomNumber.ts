export function randomNumber(max: number): number{
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}