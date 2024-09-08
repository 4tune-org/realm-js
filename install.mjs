import runInstall from "@4tune-poc/realm-js-and-web-base/install"
import createIndexFile from "./createIndexFile.mjs"

await createIndexFile()

if (!("ANIO_CICD" in process.env)) {
	await runInstall()
}
