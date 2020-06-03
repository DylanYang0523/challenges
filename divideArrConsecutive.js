/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    const solutionA = () => {
        const len = nums.length;
        if (len % k !== 0) return false;

        nums.sort((a, b) => (a - b));

        let isValid = true;

        const deleteNum = (num) => {
            const idx = nums.indexOf(num);
            if (idx >= 0) {
                nums.splice(idx, 1);   
            } else {
                isValid = false;
            }
        }

        while (nums.length > 0 && isValid) {
            const current = nums.splice(0, 1)[0];
            for (let i = 1; i < k; i++) {
                deleteNum(current + i);
            }
        }

        return isValid;
    }
    
    const solutionB = () => {
        const len = nums.length;
        if (len % k !== 0) return false;
        
        const map = {}
        const mapKeyList = [];
        for (let i = 0; i < len; i++) {
            if (map[nums[i]] === undefined) {
                map[nums[i]] = 1;
                mapKeyList.push(nums[i]);
            } else {
                map[nums[i]] += 1;
            }
        }
        
        mapKeyList.sort((a, b) => (a - b));
        
        let isValid = true;
        const minus = (num) => {
            const count = map[num];
            if (!count) {
                isValid = false;
                return;
            };
            map[num] -= 1;
        }
        
        for (let j = 0; j < mapKeyList.length && isValid; j++) {
            const startNum = mapKeyList[j];
            let count = map[startNum];
            
            while (count > 0 && isValid) {
                for (let l = 1; l < k && isValid; l++) {
                    minus(startNum + l);
                }
                count -= 1;
            }   
        }
        
        return isValid;
    }
    
    const solutionC = () => {
        const len = nums.length;
        if (len % k !== 0) return false;
        
        const m = new Map();
        for (let i = 0; i < len; i++) {
            const current = m.get(nums[i]);
            if (current === undefined) {
                m.set(nums[i], 1);
            } else {
                m.set(nums[i], current + 1);
            }
        }
        
        const mAsc = new Map([...m.entries()].sort((a, b) => (a[0] - b[0])));
        let isValid = true;
        
        label:
        for (let [key, val] of mAsc) {
          while (val > 0) {
                for (let i = 0; i < k; i++) {
                    const targetKey = key + i;
                    const targetVal = mAsc.get(targetKey);
                    if (!targetVal) {
                        isValid = false;
                        break label;
                    }
                    
                    const newVal = targetVal - 1
                    if (!newVal) {
                        mAsc.delete(targetKey);
                    } else {
                        mAsc.set(targetKey, newVal);   
                    }
                }
                val -= 1;
            }
        }
        
        return isValid;
    }
    
    return solutionC();
};