import {
	rollupPlugin
} from "@4tune/realm-js-and-web-base"

export default async function(project_root) {
	const {plugin} = await rollupPlugin(project_root)

	return plugin
}
