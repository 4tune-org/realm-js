import fs from "node:fs/promises"
import {fileURLToPath} from "node:url"
import path from "node:path"
import createRuntimeGlueCode from "@4tune-poc/realm-js-and-web-base/runtime/createRuntimeGlueCode"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let template = (await fs.readFile(
	path.join(__dirname, "src", "index.template.mjs")
)).toString()

const glue_code = createRuntimeGlueCode(false, "runtime")

template = template.split(`//$$$runtime_glue_code$$$//`).join(glue_code)
template = template.trimRight() + "\n"

export default async function() {
	await fs.writeFile(path.join(__dirname, "src", "index.mjs"), template)
}
