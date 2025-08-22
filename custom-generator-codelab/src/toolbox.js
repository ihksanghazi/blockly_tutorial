export const toolbox = {  
  'kind': 'flyoutToolbox',    // Toolbox hanya berupa flyout (panel geser)
  'contents': [               // Daftar blok yang tersedia di toolbox
    {
      'kind': 'block',
      'type': 'object'        // Custom block object
    },
    {
      'kind': 'block',
      'type': 'member'        // Custom block member
    },
    {
      'kind': 'block',
      'type': 'math_number'   // Blok bawaan: angka
    },
    {
      'kind': 'block',
      'type': 'text'          // Blok bawaan: teks
    },
    {
      'kind': 'block',
      'type': 'logic_boolean' // Blok bawaan: true/false
    },
    {
      'kind': 'block',
      'type': 'logic_null'    // Blok bawaan: null
    },
    {
      'kind': 'block',
      'type': 'lists_create_with' // Blok bawaan: list/array
    },
  ]
}
