// n: Cantidad de niños
// m: Cantidad de dulces

// n=3; m= 10
// dulces(n,m)=9;

let dulces = (n,m) => Math.round(m/n)*n;

n = 3;
m = 10;

console.log(`dulces(n,m))=${dulces(n,m)}`);
