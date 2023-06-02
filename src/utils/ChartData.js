export function emptyChart() {
  const data = [];
  for (let i = 0; i <= 2 * Math.PI; i += 0.01) {
    data.push({ x: i, y: null });
  }
  return data;
}

export function BipolarWave(bin, timePeriod) {
  const data = [];
  let currY = -1;
  if (bin[0]) {
    currY = 1;
  }
  function changeSign(X) {
    if (currY === 1) {
      for (let i = 1; i >= -1; i -= 0.01) {
        data.push({ x: X, y: i });
      }
      currY = -1;
    } else {
      for (let i = -1; i <= 1; i += 0.01) {
        data.push({ x: X, y: i });
      }
      currY = 1;
    }
  }
  let ind = 0;
  function check(ind) {
    if (bin[ind] === 1 && currY === 1) {
      return false;
    }
    if (bin[ind] === 0 && currY === -1) {
      return false;
    }
    return true;
  }
  for (let i = 0; i <= timePeriod * bin.length; i += 0.01) {
    const currX = i / timePeriod;
    const nextX = (i + 0.01) / timePeriod;
    if (
      Math.floor(currX) !== Math.floor(nextX) &&
      i + 0.01 <= timePeriod * bin.length
    ) {
      if (check(ind + 1)) {
        changeSign(Math.floor(nextX) * timePeriod);
      }
      ind++;
    } else {
      data.push({ x: i, y: currY });
    }
  }
  return data;
}

export function sineWave(bin, timePeriod, amp) {
  const data = [];
  let n = bin.length * timePeriod;
  for (let i = 0; i < n; i += 0.01) {
    data.push({ x: i, y: Math.sin((2 * Math.PI * i) / timePeriod) });
  }
  return data;
}

export function bpskWave(bin, timePeriod, amp) {
  const data = [];
  let n = bin.length * timePeriod;
  let sign = 1;
  let prev = 1;
  for (let i = 0; i <= n; i += 0.01) {
    if (prev !== bin[Math.floor(i / timePeriod)]) {
      prev = bin[Math.floor(i / timePeriod)];
      sign *= -1;
    }
    let val = Math.sin((2 * Math.PI * i) / timePeriod) * sign;
    data.push({ x: i, y: val });
  }
  return data;
}
