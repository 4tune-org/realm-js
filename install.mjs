import runInstall from "@4tune-poc/realm-js-and-web-base/install"
import createIndexFiles from "./createIndexFiles.mjs"

await createIndexFiles()

if (!("ANIO_CICD" in process.env)) {
	await runInstall()
}
