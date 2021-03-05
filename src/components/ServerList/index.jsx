import React from 'react'
import {Container,Separator} from './styles'

const ServerList = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator/>

            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
            <ServerButton mentions={72}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>

        </Container>
        )
}
export default ServerList