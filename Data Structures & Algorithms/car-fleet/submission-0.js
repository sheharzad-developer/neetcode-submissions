class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push({ pos: position[i], speed: speed[i] });
        }
        
        cars.sort((a, b) => b.pos - a.pos);
        
        let fleets = 0;
        let prevTime = 0;
        
        for (const car of cars) {
            let time = (target - car.pos) / car.speed;
            
            if (time > prevTime) {
                fleets++;
                prevTime = time;
            }
        }
        return fleets;
        }
}
