const character = {
        name: 'Маг',
        health: 90
};
export function lifeLevel(character) {
   if (character.health >= 50) {
   return 'healthy';
   }
   if (character.health >= 15) {
   return 'wounded';
   } 
   return 'critical';
}