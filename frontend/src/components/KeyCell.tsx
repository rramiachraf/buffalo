import React, { useState } from 'react'

export const KeyCell: React.FC<{ serialKey: string }> = ({ serialKey }) => {
  const [isVisible, SetVisibility] = useState(false)

  return (
    <td
      onDoubleClick={() => SetVisibility(!isVisible)}
      style={{ cursor: 'pointer' }}
    >
      {isVisible
        ? serialKey
        : serialKey.replace(/(-\w+-\w+-\w+-)/, '-XXXXX-XXXXX-XXXXX-')}
    </td>
  )
}
