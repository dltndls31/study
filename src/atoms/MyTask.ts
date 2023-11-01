import React, { useState } from 'react'
import { Provider, atom, useAtom, useSetAtom } from 'jotai'

export const MyTaskAtom = atom([
    {
        title: '예제 태스크 1',
        content: '이것은 예제 태스크입니다.',
        isCompleted: false,
    },
    {
        title: '예제 태스크 2',
        content: '또 다른 예제 태스크입니다.',
        isCompleted: false,
    },
])
export const editingPostIndexAtom = atom(-1)
