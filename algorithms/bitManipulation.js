function getBit(num, i) {
  return (num & (1 << i)) ? 1: 0
}

function setBit(num, i) {
  return num | 1 << i
}

function clearBit(num, i) {
  return num & ~(1 << i)
}

function isPowerOfTwo(num) {
  return (num & (num - 1)) == 0
}

function countSetBits(n) {
  for (let count = 0;; count++) {
    if (n == 0) return count;
    n &= n - 1;
  }
}
