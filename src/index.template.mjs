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

const loadResource_impl = function loadResource(url) {
	return runtime.loadResourceDynamic(url, false)
}

loadResource_impl.asURL = function loadResourceAsURL(url) {
	return runtime.loadResourceDynamic(url, true)
}

export const loadResource = loadResource_impl

//$$$runtime_glue_code$$$//
