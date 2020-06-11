function lotteryCoupons(n) {

    const arr = [];
    for (let i = 1; i < n + 1; i++) {
        const a = Math.floor(i / 10000);
        let remain = i % 10000;

        const b = Math.floor(remain / 1000);
        remain = i % 1000;

        const c = Math.floor(remain / 100);
        remain = i % 100;

        const d = Math.floor(remain / 10);
        remain = i % 10;

        const idx = a + b + c + d + remain;

        if (arr[idx] !== undefined) {
            arr[idx] += 1;
        } else {
            arr[idx] = 1;
        }
    }

    let max = Number.MIN_SAFE_INTEGER;
    let maxCount = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxCount = 1;
        } else if (arr[i] === max) {
            maxCount += 1;
        }
    }

    return maxCount;
}

const ans = lotteryCoupons(99);
console.log(ans);