/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <cursor />
      word
    </block>
  </editor>
)

export const run = editor => {
  Editor.insertNodes(
    editor,
    <inline>
      <text />
    </inline>,
    { at: [0, 0] }
  )
}

export const output = (
  <editor>
    <block>
      <text />
      <inline>
        <text />
      </inline>
      <cursor />
      word
    </block>
  </editor>
)