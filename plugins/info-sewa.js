let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.32.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
❏──────────────๑
❏──「 *Pembayaran* 」
│ • *Dana:* 0819-9842-5782
│ • *Qris:* Hub owner
❏──────────────๑
│ 📌 Hubungi Owner!!!
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|prem|premium)$/i

export default handler
