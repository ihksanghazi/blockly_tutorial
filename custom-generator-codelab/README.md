# Blockly Custom JSON Generator

Proyek ini adalah latihan (codelab) untuk membuat aplikasi **Blockly** dengan **blok kustom** yang bisa menghasilkan kode **JSON**, bukan JavaScript.

## Apa itu Blockly?
Blockly adalah alat untuk membuat program dengan cara **drag and drop blok**.
Biasanya Blockly dipakai untuk belajar coding, bikin aplikasi, atau eksperimen.

---

## Setup (Persiapan)

1. Buat aplikasi Blockly baru:
   ```bash
   npx @blockly/create-package app custom-generator-codelab
2. Masuk ke folder:
   ```bash
   cd custom-generator-codelab
   ```
3. Jalankan aplikasi:
   ```bash
   npm start
   ```
> Browser akan terbuka otomatis dengan aplikasi Blockly.

---

## Ganti Storage Key
Supaya data kita tidak bercampur dengan contoh lain, buka file [`serialization.js`](#)
lalu ubah:
```js
// Gunakan storage key unik
const storageKey = 'jsonGeneratorWorkspace';
```

---

## Blok yang Akan Kita Gunakan
- Blok kustom (buatan sendiri):
  - `object` → `{ }` untuk JSON object
  - `member` → `key` : value di dalam object
- Blok bawaan Blockly:
  - `math_number` → angka
  - `text` → teks
  - `logic_boolean` → true/false
  - `logic_null` → null
  - `lists_create_with` → list/array

---

## Membuat Custom Block
Buat file baru: [`src/blocks/json.js`](#)
```js
import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  {
    "type": "object",             // Nama blok
    "message0": "{ %1 %2 }",      // Tampilan blok { ... }
    "args0": [
      {"type": "input_dummy"},    // Placeholder kosong
      {"type": "input_statement", "name": "MEMBERS"} // Slot isi
    ],
    "output": null,               // Bisa mengeluarkan nilai
    "colour": 230,                // Warna blok
  },
  {
    "type": "member",             // Nama blok
    "message0": "%1 %2 %3",       // Format tampilan
    "args0": [
      {"type": "field_input", "name": "MEMBER_NAME", "text": ""}, // Key
      {"type": "field_label", "name": "COLON", "text": ":"},      // Tanda ":"
      {"type": "input_value", "name": "MEMBER_VALUE"}             // Value
    ],
    "previousStatement": null,    // Bisa disambung sebelum
    "nextStatement": null,        // Bisa disambung sesudah
    "colour": 230,                // Warna blok
  }
]);
```

---

## Registrasi Blok di [index.js](#)
Hapus:
```js
import {blocks} from './blocks/text';
```
Ganti dengan:
```js
import {blocks} from './blocks/json'; // Import blok baru
```
Blockly sudah otomatis mendaftarkan blok dengan:
```js
Blockly.common.defineBlocks(blocks);
```

---

## Atur Toolbox (Kumpulan Blok)
Edit file [`src/toolbox.js`](#)
ganti semua isi dengan:
```js
export const toolbox = {
  'kind': 'flyoutToolbox',  // Toolbox berupa panel geser
  'contents': [
    {'kind': 'block', 'type': 'object'},
    {'kind': 'block', 'type': 'member'},
    {'kind': 'block', 'type': 'math_number'},
    {'kind': 'block', 'type': 'text'},
    {'kind': 'block', 'type': 'logic_boolean'},
    {'kind': 'block', 'type': 'logic_null'},
    {'kind': 'block', 'type': 'lists_create_with'},
  ]
}
```

---

## Jalankan Ulang
```bash
npm start
```
Sekarang di toolbox akan muncul blok:
- object (`{ }`)
- member (`key : value`)
- blok bawaan (`number`, `text`, `boolean`, `null`, `list`)

---

## Apa Selanjutnya?

Langkah berikutnya adalah membuat **language generator JSON** agar blok bisa diubah menjadi kode.  
[Baca bagian selanjutnya di sini ➝ The Basics](#)