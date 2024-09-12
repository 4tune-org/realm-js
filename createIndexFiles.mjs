import fs from "node:fs/promises"
import {fileURLToPath} from "node:url"
import path from "node:path"
import {createRequire} from "node:module"
import createRuntimeGlueCode from "@4tune/realm-js-and-web-base/runtime/createRuntimeGlueCode"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(__filename)

const types_path = require.resolve("@4tune/realm-js-and-web-base/runtime/types")
const {default: types} =await import(types_path)

let template = (await fs.readFile(
	path.join(__dirname, "src", "index.template.mjs")
)).toString()

const glue_code = createRuntimeGlueCode("runtime")

template = template.split(`//$$$runtime_glue_code$$$//`).join(glue_code)
template = template.trimEnd() + "\n"

export default async function() {
	await fs.writeFile(path.join(__dirname, "src", "__index.auto.mjs"), template)
	await fs.writeFile(path.join(__dirname, "src", "__index.auto.d.ts"), types)
}
