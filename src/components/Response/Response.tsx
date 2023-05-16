import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-themes-all';

// const response = `{
//   "data": {
//     "country": {
//       "name": "Belarus",
//       "native": "Белару́сь",
//       "capital": "Minsk",
//       "emoji": "🇧🇾",
//       "currency": "BYN",
//       "languages": [
//         {
//           "code": "be",
//           "name": "Belarusian"
//         },
//         {
//           "code": "ru",
//           "name": "Russian"
//         }
//       ]
//     }
//   }
// }`;

type ResponseProps = {
  response: unknown;
};

function Response({ response }: ResponseProps) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
        width: '44%',
      }}
    >
      <CodeMirror
        value={JSON.stringify(response)}
        minHeight="100%"
        theme={noctisLilac}
        editable={false}
        style={{
          flexGrow: 1,
          position: 'relative',
          overflowY: 'scroll',
          fontSize: '16px',
        }}
      />
    </section>
  );
}

export default Response;
