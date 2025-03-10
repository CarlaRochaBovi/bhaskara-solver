
const button = document.getElementById('calculate')
button.addEventListener('click', () => {
  const a = Number.parseFloat(document.getElementById('a').value);
  const b = Number.parseFloat(document.getElementById('b').value);
  const c = Number.parseFloat(document.getElementById('c').value);
  console.log(a, b, c);

  const answer = "Delta não calculado...";
  const result = calculateBaskhara(a, b, c, answer);

  document.getElementById('result').innerText = result;
});

function calculateBaskhara(a, b, c, answer) {

  //calcula o delta
  const delta = b ** 2 - 4 * a * c;
  console.log(delta);


  // verifica o valor do delta e atualiza o estado
  let updatedAnswer = answer;
  if (delta < 0) {
    updatedAnswer = `Delta negativo igual a: ${delta}`;
    return updatedAnswer;
  }
  if (delta > 0) {
    const formatedDelta = Math.sqrt(delta);
    const x1 = (-b + formatedDelta) / (2 * a);
    const x2 = (-b - formatedDelta) / (2 * a);
    updatedAnswer = `Delta positivo.
      x1 = ${x1.toFixed(2)}
      x2 = ${x2.toFixed(2)}
    `;
    return updatedAnswer;
  }
  if (delta === 0) {
    const x = -b / (2 * a);
    updatedAnswer = `Delta igual a zero. x = ${x.toFixed(2)}`;
    console.log("delta igual a zero calculado");
    return updatedAnswer;
  }
}