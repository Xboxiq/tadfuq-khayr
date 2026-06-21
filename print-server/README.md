# خادم طباعة تدفّق الخير

خادم محلي صغير (سكربت واحد، بدون مكتبات خارجية) يجعل زر «طباعة»
في التطبيق يُرسل نفس ملف Word المُولَّد إلى الطابعة مباشرة —
**بدون فتح Word أو الضغط على Ctrl+P**.

## كيف يعمل

```
المستخدم يضغط «طباعة»  ↓
        │
        ▼
التطبيق يولّد ملف docx (نفس الملف الذي ينزل عادةً)
        │
        ▼
يرسله عبر HTTP إلى:  http://localhost:9876/print
        │
        ▼
الخادم يحفظ الملف مؤقتاً ويستدعي:
   • على Windows:  PowerShell → Word  (الذي يفهم docx أصلاً)
   • على Mac/Linux: LibreOffice headless
        │
        ▼
الطابعة تطبع
```

إن لم يكن الخادم شغّالاً، يتراجع التطبيق تلقائياً إلى تنزيل الملف
كالسابق (لا ينكسر شيء).

## المتطلّبات

| النظام | المطلوب |
|--------|---------|
| Windows | Node.js (>=18) + Microsoft Word مثبّت |
| macOS  | Node.js + [LibreOffice](https://www.libreoffice.org/download/) (مجاني) |
| Linux  | Node.js + `libreoffice` (عبر apt/dnf/pacman) |

## التشغيل

### Windows
انقر مزدوجاً على `start.bat`
أو من PowerShell:
```powershell
cd print-server
node server.js
```

### Linux / macOS
```bash
cd print-server
./start.sh
# أو:
node server.js
```

تشغيل ناجح يطبع:
```
╔════════════════════════════════════════════════════╗
║          📠  Tadfuq Print Server                   ║
╠════════════════════════════════════════════════════╣
║  http://localhost:9876                              ║
║  platform : win32                                   ║
║  printer  : (system default)                        ║
╚════════════════════════════════════════════════════╝
```

## الإعدادات

متغيّرات البيئة:
- `PRINT_PORT` — تغيير المنفذ (افتراضي 9876)
- `PRINTER`    — اسم طابعة معيّنة بدل الافتراضية للنظام

أمثلة:
```bash
# طباعة على طابعة باسم محدّد
PRINTER="HP-LaserJet" node server.js

# منفذ مختلف
PRINT_PORT=7000 node server.js
```

## فحص الصحّة

من المتصفح أو terminal:
```
http://localhost:9876/ping
```

يُعيد:
```json
{
  "ok": true,
  "service": "tadfuq-print",
  "version": "1.0.0",
  "platform": "win32",
  "printer": "(system default)"
}
```

## تشغيل تلقائي عند الإقلاع (اختياري)

### Windows
- اضغط `Win + R` ← اكتب `shell:startup`
- ضع فيها اختصاراً لـ `start.bat`

### Linux (systemd)
```bash
sudo tee /etc/systemd/system/tadfuq-print.service <<EOF
[Unit]
Description=Tadfuq Print Server
After=network.target

[Service]
ExecStart=/usr/bin/node /opt/tadfuq/print-server/server.js
Restart=always
User=$USER

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl enable --now tadfuq-print
```

## استكشاف الأخطاء

| المشكلة | الحل |
|---------|------|
| `EADDRINUSE` | المنفذ مستخدم — `PRINT_PORT=7000 node server.js` |
| `command not found: libreoffice` | على macOS: `brew install --cask libreoffice` |
| الطباعة فشلت على Windows | تأكّد من تثبيت Word وقدرته على فتح الـ docx يدوياً |
| `/ping` لا يستجيب | الخادم لا يعمل — افتح `start.bat` |

## الأمان

- يستمع فقط على `localhost` — لا أحد على الشبكة يصل إليه.
- لا يحفظ الملفّات (يحذفها بعد ٦٠ ثانية من الطباعة).
- لا يكتب لقاعدة بيانات أو ملفّات log دائمة.
