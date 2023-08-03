
/* Dado un array de valores, devolver un array truthy (sin valores null, vacíos, NaN, undefined o false) */

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

const truthy = arrDirty.filter(elem => Boolean(elem));

console.log(truthy);

