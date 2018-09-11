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

export function transpose<T>(xss: T[][]): T[][] {
	if (xss.length === 0) return xss;
	const n = xss.length;
	const m = xss[0].length;
	const yss = Array.from(Array(m), () => Array(n));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			yss[j][i] = xss[i][j];
		}
	}
	return yss;
}

export function zip3<A, B, C>(as: A[], bs: B[], cs: C[]): [A, B, C][] {
	const result: [A, B, C][] = [];
	const n = Math.min(as.length, bs.length, cs.length);
	for (let i = 0; i < n; i++) result.push([as[i], bs[i], cs[i]]);
	return result;
}
