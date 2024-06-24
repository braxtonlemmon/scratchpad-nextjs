'use client'

import {ReactNode} from 'react'
import {AppProvider} from './AppProvider'

export function Providers({children}: {children: ReactNode}) {
  return <AppProvider>{children}</AppProvider>
}
