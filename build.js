import * as esbuild from 'esbuild';
import * as path from 'path';
import glob from 'resolve-glob';

const options = {ignore: ["**/*.test.js", "**/*.spec.js", "**/*.stories.js"]};
const entryPoints = glob.sync(
  [
    "./**/*.ts",
	"!./node_modules/**"
  ],
  options)

console.log(entryPoints)

for (let entryPoint of entryPoints) {
	const outFile = path.resolve(path.dirname(entryPoint), path.basename(entryPoint, path.extname(entryPoint)) + '.js')
	console.log(outFile)
	esbuild.buildSync({
		entryPoints: [entryPoint],
		bundle: true,
		inject: ['./window-shim.js'],
		outfile: outFile
	})
}