import {createContext, useContext, useMemo, useState} from 'react'

type TTheme = 'light' | 'dark'

type TAppContext = {
  theme: TTheme
}

export const AppContext = createContext<TAppContext>({
  theme: 'light',
})

export function AppProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<TTheme>('light')

  const value = useMemo(
    () => ({
      theme,
    }),
    [theme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
