function sieveOfEratosthenes(max) {
  let flags = [false, false];
  for (i = 2; i <= max; i++) flags.push(true);

  let prime = 2;
  while (prime <= Math.sqrt(max)) {
    crossOff(flags, prime);
    prime = getNextPrime(flags, prime)
  }
  return flags
}

function crossOff(flags, prime) {
  for (let i = prime**2; i < flags.length; i += prime) flags[i] = false;
}

function getNextPrime(flags, prime) {
  let next = prime + 1;
  while (next < flags.length && !flags[next]) next++;
  return next
}
