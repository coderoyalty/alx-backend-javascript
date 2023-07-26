export default function divideFunction(numerator, denominator) {
  try {
    const value = numerator / denominator;
    return value;
  } catch (err) {
    throw new Error('cannot divide by 0');
  }
}
