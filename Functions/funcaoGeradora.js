function* geradora()
{
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}