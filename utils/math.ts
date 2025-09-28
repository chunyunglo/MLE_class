
// This function calculates the binomial coefficient C(n, k), also known as "n choose k".
// It uses a multiplicative formula to avoid dealing with large factorials,
// which can cause overflow errors for relatively small numbers.
export const binomialCoefficient = (n: number, k: number): number => {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  // Symmetry: C(n, k) === C(n, n-k). Use the smaller k for fewer iterations.
  if (k > n / 2) {
    k = n - k;
  }

  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - i + 1)) / i;
  }
  return res;
};

// This function calculates the likelihood of observing 'k' successes in 'n' trials
// for a given success probability 'p'. This is the core of the binomial likelihood function.
export const calculateLikelihood = (p: number, n: number, k: number): number => {
  if (p < 0 || p > 1) {
    return 0;
  }
  if (k < 0 || n < k) {
    return 0;
  }

  // Handle edge cases where p=0 or p=1 to avoid 0^0 which is NaN
  if (p === 0) {
    return k === 0 ? 1 : 0;
  }
  if (p === 1) {
    return k === n ? 1 : 0;
  }

  // L(p | k, n) = C(n, k) * p^k * (1-p)^(n-k)
  const C_nk = binomialCoefficient(n, k);
  if (!isFinite(C_nk)) {
    // If coefficient is too large, use log-likelihood approach for approximation
    // to avoid Infinity. For this app's constraints, it's a fallback.
    const logLikelihood =
      Math.log(C_nk) + k * Math.log(p) + (n - k) * Math.log(1 - p);
    return Math.exp(logLikelihood);
  }

  return C_nk * Math.pow(p, k) * Math.pow(1 - p, n - k);
};
