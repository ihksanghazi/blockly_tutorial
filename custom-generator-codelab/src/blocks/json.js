import * as Blockly from 'blockly';  

// Membuat definisi blok baru dari JSON array
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  {
    "type": "object",             // Nama tipe blok
    "message0": "{ %1 %2 }",      // Tampilan teks pada blok (placeholder untuk input)
    "args0": [                    // Argumen/slot yang bisa diisi di blok
      {
        "type": "input_dummy"     // Slot kosong (dummy) untuk estetika
      },
      {
        "type": "input_statement", // Slot yang bisa berisi statement (blok lain)
        "name": "MEMBERS"          // Nama slot (untuk menyimpan child blocks)
      }
    ],
    "output": null,                // Blok menghasilkan output (null = bisa fleksibel)
    "colour": 230,                 // Warna blok (kode warna Blockly)
  },
  {
    "type": "member",               // Nama tipe blok
    "message0": "%1 %2 %3",         // Teks tampilan dengan 3 bagian
    "args0": [
      {
        "type": "field_input",      // Input teks langsung (field)
        "name": "MEMBER_NAME",      // Nama field
        "text": ""                  // Default teks kosong
      },
      {
        "type": "field_label",      // Label statis
        "name": "COLON",            // Nama field label
        "text": ":"                 // Teks label (simbol ":")
      },
      {
        "type": "input_value",      // Slot input untuk blok lain
        "name": "MEMBER_VALUE"      // Nama slot untuk nilai
      }
    ],
    "previousStatement": null,      // Bisa disambung dengan blok sebelum
    "nextStatement": null,          // Bisa disambung dengan blok sesudah
    "colour": 230,                  // Warna blok
  }
]);
