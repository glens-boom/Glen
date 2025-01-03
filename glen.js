const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Glen_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GLEN_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_glen_Tech = glen_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_glen_Tech.sendMessage(Qr_Code_By_glen_Tech.user.id, { text: '' + b64data });
	
				   let GLEN_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃𝙂𝙇𝙀𝙉 𝙈𝘿 𝙎𝙀𝙎𝙎𝙄𝙊𝙉 𝙄𝙎 
┃𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔
┃𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 ✅🍒
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = ✰ GLEN TECH ✰
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://chat.whatsapp.com/DODsf7Xhvl10zqPgcdBNFY
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Chat me 👉 https://wa.me/254720254797 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*2025-2099 glen from kenya🇰🇪 *

_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_glen_Tech.sendMessage(Qr_Code_By_glen_Tech.user.id,{text:GLEN_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_GLEN_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					GLEN_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GLEN_MD_QR_CODE()
});
module.exports = router
