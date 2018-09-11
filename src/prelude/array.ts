export function countIf<T>(f: (x: T) => boolean, xs: T[]): number {
	return xs.filter(f).length;
}

export function count<T>(x: T, xs: T[]): number {
	return countIf(y => x === y, xs);
}

export function concat<T>(xss: T[][]): T[] {
	return ([] as T[]).concat(...xss);
}

export function intersperse<T>(sep: T, xs: T[]): T[] {
	return concat(xs.map(x => [sep, x])).slice(1);
}

export function erase<T>(x: T, xs: T[]): T[] {
	return xs.filter(y => x !== y);
}

export function unique<T>(xs: T[]): T[] {
	return [...new Set(xs)];
}

export function sum(xs: number[]): number {
	return xs.reduce((a, b) => a + b, 0);
}

export function map<A, B>(f: (x: A) => B, xs: A[]): B[] {
	return xs.map(x => f(x)); // f にはちょうど１つ引数を渡すため、x=>f(x)の代わりにfと書いてはいけない
}
