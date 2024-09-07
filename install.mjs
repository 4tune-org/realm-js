import runInstall from "@4tune-poc/realm-js-and-web-base/install"

if (!("ANIO_CICD" in process.env)) {
	await runInstall()
}
