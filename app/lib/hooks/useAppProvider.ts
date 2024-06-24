import {useContext} from 'react'
import {AppContext} from '../providers/AppProvider'

export const useAppProvider = () => {
  return useContext(AppContext)
}
