import path from "node:path"
import process from "node:process"

import {
	searchForConfigFile,
	generateRuntimeData,
	rollupPlugin
} from "@4tune-poc/realm-js-and-web-base"

import {
	initializeRuntimeFromData
} from "@4tune-poc/realm-js-and-web-base/runtime"

const project_root = await searchForConfigFile(path.dirname(process.argv[1]))

const runtime_data = await generateRuntimeData(
	project_root,
	await rollupPlugin(project_root)
)

const runtime = await initializeRuntimeFromData(runtime_data)

export function loadResource(...args) {
	return runtime.loadResource(...args)
}

export default runtime
