import path from "node:path"
import process from "node:process"

import {
	searchForConfigFile,
	generateRuntimeInitData,
	rollupPlugin
} from "@4tune-poc/realm-js-and-web-base"

import {
	initializeRuntime
} from "@4tune-poc/realm-js-and-web-base/runtime"

const project_root = await searchForConfigFile(path.dirname(process.argv[1]))

const {ctx} = await rollupPlugin(project_root)
const {runtime_init_data, project_resources} = ctx

const runtime = await initializeRuntime(runtime_init_data, project_resources)

export function loadResource(url) {
	return runtime.loadResourceDynamic(url)
}

//$$$runtime_glue_code$$$//
