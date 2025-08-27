import { spawn } from "node:child_process";

const filename = process.argv[2];

if (!filename) {
	console.error("Usage: node runner.js <filename>");
	process.exit(1);
}

const file = `src/${filename}.ts`;

const child = spawn("pnpm", ["exec", "ts-node", file], { stdio: "inherit" });

child.on("exit", (code) => process.exit(code));
