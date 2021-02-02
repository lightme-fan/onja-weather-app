import React from 'react'
import Search from './components/search/search'
import Sidebar from './components/sidebar/sidebar'
import { DefaultContainer } from './defaultStyle'

function App() {
    return (
        <DefaultContainer>
            <Sidebar>
                <Search/>            
            </Sidebar> 
        </DefaultContainer>
    )
}

export default App
