import divideFunction from './8-try';

function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(error.message);
    queue.push('Guardrail was processed');
  }
  return queue;
}

console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));
