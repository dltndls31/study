import React, { useState } from 'react'
import { Provider, atom, useAtom, useSetAtom } from 'jotai'

export const MyTaskAtom = atom([])
export const editingPostIndexAtom = atom(-1)
